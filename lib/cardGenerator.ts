import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

import { processImage } from './imageProcessing';
import { getBuilderTitle } from './builderTitles';
import { generatePassId } from './generatePassId';

function escapeXml(value: string = ''): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function generateBuilderCard(input: {
  name: string;
  role: string;
  stack: string;
  location?: string;
  xHandle?: string;
  github?: string;
  photoFile?: File;
}) {
  const passId = generatePassId();
  const builderTitle = getBuilderTitle(input.name);

  const name = escapeXml(
    (input.name || 'BUILDER').toUpperCase()
  );

  const role = escapeXml(
    (input.role || 'BUILDING THE FUTURE').toUpperCase()
  );

  const stack = escapeXml(
    (input.stack || 'FULL STACK · AI · WEB3').toUpperCase()
  );

  const location = escapeXml(
    (input.location || 'GOA, INDIA').toUpperCase()
  );

  const title = escapeXml(
    builderTitle.toUpperCase()
  );

  const safePassId = escapeXml(passId);

  const xHandle = input.xHandle
    ? escapeXml(input.xHandle.toUpperCase())
    : '';

  const github = input.github
    ? escapeXml(input.github.toUpperCase())
    : '';

  /*
   * ---------------------------------------------------------
   * PROCESS PHOTO
   * ---------------------------------------------------------
   */

  const photoBuffer = input.photoFile
    ? (await processImage(input.photoFile, 900)).buffer
    : null;

  let photoComposite: Buffer;

  if (photoBuffer) {
    photoComposite = await sharp(photoBuffer)
      .resize(460, 580, {
        fit: 'cover',
        position: 'centre',
      })
      .jpeg({ quality: 92 })
      .toBuffer();
  } else {
    photoComposite = await sharp({
      create: {
        width: 460,
        height: 580,
        channels: 3,
        background: {
          r: 246,
          g: 232,
          b: 200,
        },
      },
    })
      .jpeg({ quality: 92 })
      .toBuffer();
  }

  /*
   * ---------------------------------------------------------
   * OPTIONAL SOCIAL INFORMATION
   * ---------------------------------------------------------
   */

  const socialSection = `
    ${
      xHandle
        ? `
      <text
        x="590"
        y="740"
        font-family="DejaVu Sans"
        font-size="15"
        letter-spacing="2"
        fill="#F6E8C8"
      >X</text>

      <text
        x="650"
        y="740"
        font-family="DejaVu Sans"
        font-size="17"
        fill="#F6E8C8"
      >${xHandle}</text>
      `
        : ''
    }

    ${
      github
        ? `
      <text
        x="590"
        y="780"
        font-family="DejaVu Sans"
        font-size="15"
        letter-spacing="2"
        fill="#F6E8C8"
      >GITHUB</text>

      <text
        x="680"
        y="780"
        font-family="DejaVu Sans"
        font-size="17"
        fill="#F6E8C8"
      >${github}</text>
      `
        : ''
    }
  `;

  /*
   * ---------------------------------------------------------
   * SVG CARD
   *
   * IMPORTANT:
   * Use DejaVu Sans instead of Arial.
   * This avoids relying on Windows fonts when Sharp runs
   * on Vercel's Linux environment.
   * ---------------------------------------------------------
   */

  const svg = `
  <svg
    width="1080"
    height="1350"
    viewBox="0 0 1080 1350"
    xmlns="http://www.w3.org/2000/svg"
  >

    <!-- BACKGROUND -->

    <rect
      width="1080"
      height="1350"
      fill="#063B2A"
    />

    <rect
      x="36"
      y="36"
      width="1008"
      height="1278"
      rx="34"
      fill="#04251C"
      stroke="#F6E8C8"
      stroke-opacity="0.2"
    />

    <rect
      x="80"
      y="80"
      width="920"
      height="1190"
      rx="30"
      fill="none"
      stroke="#FFD83D"
      stroke-opacity="0.18"
      stroke-width="1"
    />

    <!-- DECORATIVE LINES -->

    <path
      d="M0 190C180 150 320 180 470 240C620 300 810 290 1080 220"
      stroke="#37E6D5"
      stroke-opacity="0.12"
      fill="none"
      stroke-width="2"
    />

    <path
      d="M0 1080C180 1040 330 1040 480 1090C620 1130 790 1140 1080 1060"
      stroke="#FF3D81"
      stroke-opacity="0.10"
      fill="none"
      stroke-width="2"
    />

    <!-- DECORATIVE SHAPES -->

    <g
      opacity="0.26"
      fill="#F6E8C8"
    >
      <path
        d="M120 250c16-40 44-58 72-70-16 26-16 58 0 86-26-10-46-12-72-16z"
      />

      <path
        d="M950 230c18-34 42-46 66-54-8 20-8 46 0 68-24-9-42-10-66-14z"
      />
    </g>

    <!-- GRID -->

    <g
      fill="none"
      stroke="#F6E8C8"
      stroke-opacity="0.12"
      stroke-width="1"
    >
      <path d="M130 320h800" />
      <path
        d="M130 320h800"
        transform="translate(0 24)"
      />
      <path
        d="M130 320h800"
        transform="translate(0 48)"
      />
      <path
        d="M130 320h800"
        transform="translate(0 72)"
      />
    </g>

    <!-- HEADER -->

    <text
      x="95"
      y="168"
      font-family="DejaVu Sans"
      font-size="42"
      letter-spacing="4"
      fill="#F6E8C8"
    >HH</text>

    <text
      x="95"
      y="214"
      font-family="DejaVu Sans"
      font-size="18"
      letter-spacing="6"
      fill="#FFD83D"
    >GOA 2026</text>

    <text
      x="470"
      y="155"
      text-anchor="middle"
      font-family="DejaVu Sans"
      font-size="40"
      letter-spacing="8"
      fill="#F6E8C8"
    >HACKER HOUSE</text>

    <text
      x="470"
      y="205"
      text-anchor="middle"
      font-family="DejaVu Sans"
      font-size="28"
      letter-spacing="10"
      fill="#FFD83D"
    >GOA</text>

    <!-- LOGO -->

    <rect
      x="910"
      y="118"
      width="78"
      height="78"
      rx="39"
      fill="none"
      stroke="#FFD83D"
      stroke-width="2"
    />

    <circle
      cx="949"
      cy="157"
      r="26"
      fill="none"
      stroke="#FF3D81"
      stroke-width="2"
    />

    <text
      x="949"
      y="164"
      text-anchor="middle"
      font-family="DejaVu Sans"
      font-size="12"
      letter-spacing="2"
      fill="#F6E8C8"
    >HH</text>

    <!-- PHOTO LABEL -->

    <text
      x="95"
      y="330"
      font-family="DejaVu Sans"
      font-size="19"
      letter-spacing="4"
      fill="#FFD83D"
    >PHOTO / BUILDER</text>

    <!-- PHOTO -->

    <image
      href="data:image/jpeg;base64,${photoComposite.toString('base64')}"
      x="80"
      y="350"
      width="460"
      height="580"
      preserveAspectRatio="xMidYMid slice"
    />

    <!-- BUILDER NAME -->

    <text
      x="590"
      y="388"
      font-family="DejaVu Sans"
      font-size="54"
      font-weight="700"
      letter-spacing="3"
      fill="#F6E8C8"
    >${name}</text>

    <!-- BUILDER TITLE -->

    <text
      x="590"
      y="450"
      font-family="DejaVu Sans"
      font-size="24"
      letter-spacing="3"
      fill="#FFD83D"
    >${title}</text>

    <!-- ROLE -->

    <text
      x="590"
      y="520"
      font-family="DejaVu Sans"
      font-size="20"
      letter-spacing="2"
      fill="#F6E8C8"
    >${role}</text>

    <!-- STACK -->

    <text
      x="590"
      y="560"
      font-family="DejaVu Sans"
      font-size="20"
      letter-spacing="2"
      fill="#37E6D5"
    >${stack}</text>

    <!-- LOCATION -->

    <text
      x="590"
      y="650"
      font-family="DejaVu Sans"
      font-size="16"
      letter-spacing="2"
      fill="#F6E8C8"
    >LOCATION</text>

    <text
      x="590"
      y="682"
      font-family="DejaVu Sans"
      font-size="18"
      fill="#F6E8C8"
    >${location}</text>

    <!-- SOCIALS -->

    ${socialSection}

    <!-- PASS BOX -->

    <rect
      x="590"
      y="910"
      width="390"
      height="92"
      rx="18"
      fill="#F6E8C8"
      fill-opacity="0.12"
      stroke="#FFD83D"
      stroke-opacity="0.24"
    />

    <text
      x="610"
      y="955"
      font-family="DejaVu Sans"
      font-size="16"
      letter-spacing="2"
      fill="#FFD83D"
    >PASS ID · ${safePassId}</text>

    <text
      x="610"
      y="980"
      font-family="DejaVu Sans"
      font-size="14"
      letter-spacing="2"
      fill="#F6E8C8"
    >BUILDERS ONLY · GOA 2026</text>

    <!-- BAR -->

    <rect
      x="590"
      y="1030"
      width="390"
      height="46"
      rx="6"
      fill="#F6E8C8"
      fill-opacity="0.14"
    />

    <rect
      x="610"
      y="1044"
      width="320"
      height="16"
      rx="2"
      fill="#37E6D5"
      fill-opacity="0.78"
    />

    <rect
      x="610"
      y="1068"
      width="280"
      height="4"
      rx="2"
      fill="#FF3D81"
      fill-opacity="0.7"
    />

    <rect
      x="930"
      y="1044"
      width="30"
      height="16"
      rx="2"
      fill="#FFD83D"
      fill-opacity="0.9"
    />

    <circle
      cx="1030"
      cy="1100"
      r="18"
      fill="none"
      stroke="#FFD83D"
      stroke-width="2"
    />

    <!-- FOOTER -->

    <text
      x="95"
      y="1180"
      font-family="DejaVu Sans"
      font-size="16"
      letter-spacing="3"
      fill="#F6E8C8"
    >#FRAMEINGOA</text>

    <text
      x="540"
      y="1180"
      text-anchor="middle"
      font-family="DejaVu Sans"
      font-size="16"
      letter-spacing="3"
      fill="#F6E8C8"
    >HACKER HOUSE GOA</text>

    <text
      x="985"
      y="1180"
      text-anchor="end"
      font-family="DejaVu Sans"
      font-size="16"
      letter-spacing="3"
      fill="#F6E8C8"
    >28—31 OCT 2026</text>

    <text
      x="95"
      y="1230"
      font-family="DejaVu Sans"
      font-size="14"
      letter-spacing="2"
      fill="#F6E8C8"
    >BUILT IN GOA · SHIPPED TO THE WORLD</text>

  </svg>
  `;

  /*
   * ---------------------------------------------------------
   * GENERATE PNG
   * ---------------------------------------------------------
   */

 const fontPath = path.join(
  process.cwd(),
  'fonts',
  'DejaVuSans.ttf'
);

const font = fs.readFileSync(fontPath);

const renderer = new Resvg(svg, {
  font: {
    fontBuffers: [font],
    defaultFontFamily: 'DejaVu Sans',
  },
});

const png = Buffer.from(renderer.render().asPng());

return {
  png,
  passId,
};

  return {
    png,
    passId,
  };
}