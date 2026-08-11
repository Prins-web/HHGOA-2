import sharp from 'sharp';
import { processImage } from './imageProcessing';
import { getBuilderTitle } from './builderTitles';
import { getFontFaces } from './fonts';
import { generatePassId } from './generatePassId';

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
  const base = sharp({
    create: {
      width: 1080,
      height: 1350,
      channels: 4,
      background: { r: 6, g: 53, b: 42, alpha: 1 },
    },
  });

  const overlay = sharp({
    create: {
      width: 1080,
      height: 1350,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });

  const background = sharp({
    create: {
      width: 1080,
      height: 1350,
      channels: 4,
      background: { r: 6, g: 53, b: 42, alpha: 1 },
    },
  }).png();

  const card = base.composite([{ input: await background.toBuffer(), left: 0, top: 0 }]);

  const photoBuffer = input.photoFile ? (await processImage(input.photoFile, 900)).buffer : null;
  const photo = photoBuffer
    ? sharp(photoBuffer).resize(460, 580, { fit: 'cover' })
    : sharp({ create: { width: 460, height: 580, channels: 3, background: { r: 246, g: 232, b: 200, alpha: 1 } } });

  const photoComposite = await photo
    .composite([
      {
        input: Buffer.from('<svg width="460" height="580"><rect x="0" y="0" width="460" height="580" rx="34" ry="34" fill="none" stroke="#f6e8c8" stroke-width="4" /></svg>'),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 92 })
    .toBuffer();

  const svg = `
  <svg width="1080" height="1350" xmlns="http://www.w3.org/2000/svg">
    <style>${getFontFaces()}</style>
    <rect width="1080" height="1350" fill="#063B2A"/>
    <rect x="36" y="36" width="1008" height="1278" rx="34" fill="#04251C" stroke="#f6e8c8" stroke-opacity="0.2" />
    <rect x="80" y="80" width="920" height="1190" rx="30" fill="none" stroke="#FFD83D" stroke-opacity="0.18" stroke-width="1" />
    <path d="M0 190C180 150 320 180 470 240C620 300 810 290 1080 220" stroke="#37E6D5" stroke-opacity="0.12" fill="none" stroke-width="2" />
    <path d="M0 1080C180 1040 330 1040 480 1090C620 1130 790 1140 1080 1060" stroke="#FF3D81" stroke-opacity="0.10" fill="none" stroke-width="2" />
    <g opacity="0.26" fill="#F6E8C8">
      <path d="M120 250c16-40 44-58 72-70-16 26-16 58 0 86-26-10-46-12-72-16z" />
      <path d="M950 230c18-34 42-46 66-54-8 20-8 46 0 68-24-9-42-10-66-14z" />
    </g>
    <g fill="none" stroke="#F6E8C8" stroke-opacity="0.12" stroke-width="1">
      <path d="M130 320h800" />
      <path d="M130 320h800" transform="translate(0 24)" />
      <path d="M130 320h800" transform="translate(0 48)" />
      <path d="M130 320h800" transform="translate(0 72)" />
    </g>
    <text x="95" y="168" font-family="OpenSans, sans-serif" font-size="42" letter-spacing="4" fill="#F6E8C8">HH</text>
    <text x="95" y="214" font-family="OpenSans, sans-serif" font-size="18" letter-spacing="6" fill="#FFD83D">GOA 2026</text>
    <text x="470" y="155" text-anchor="middle" font-family="OpenSans, sans-serif" font-size="40" letter-spacing="8" fill="#F6E8C8">HACKER HOUSE</text>
    <text x="470" y="205" text-anchor="middle" font-family="OpenSans, sans-serif" font-size="28" letter-spacing="10" fill="#FFD83D">GOA</text>
    <rect x="910" y="118" width="78" height="78" rx="39" fill="none" stroke="#FFD83D" stroke-width="2" />
    <circle cx="949" cy="157" r="26" fill="none" stroke="#FF3D81" stroke-width="2" />
    <text x="949" y="164" text-anchor="middle" font-family="OpenSans, sans-serif" font-size="12" letter-spacing="2" fill="#F6E8C8">HH</text>
    <text x="95" y="1180" font-family="OpenSans, sans-serif" font-size="16" letter-spacing="3" fill="#F6E8C8">#FRAMEINGOA</text>
    <text x="540" y="1180" text-anchor="middle" font-family="OpenSans, sans-serif" font-size="16" letter-spacing="3" fill="#F6E8C8">HACKER HOUSE GOA</text>
    <text x="985" y="1180" text-anchor="end" font-family="OpenSans, sans-serif" font-size="16" letter-spacing="3" fill="#F6E8C8">28—31 OCT 2026</text>
    <text x="95" y="1230" font-family="OpenSans, sans-serif" font-size="14" letter-spacing="2" fill="#F6E8C8">BUILT IN GOA · SHIPPED TO THE WORLD</text>
    <text x="95" y="330" font-family="OpenSans, sans-serif" font-size="19" letter-spacing="4" fill="#FFD83D">PHOTO / BUILDER</text>
    <image href="data:image/jpeg;base64,${photoComposite.toString('base64')}" x="80" y="350" width="460" height="580" preserveAspectRatio="xMidYMid slice" />
    <text x="590" y="388" font-family="OpenSans, sans-serif" font-size="54" font-weight="700" letter-spacing="3" fill="#F6E8C8">${(input.name || 'BUILDER').toUpperCase()}</text>
    <text x="590" y="450" font-family="OpenSans, sans-serif" font-size="24" letter-spacing="3" fill="#FFD83D">${builderTitle}</text>
    <text x="590" y="520" font-family="OpenSans, sans-serif" font-size="20" letter-spacing="2" fill="#F6E8C8">${(input.role || 'BUILDING THE FUTURE').toUpperCase()}</text>
    <text x="590" y="560" font-family="OpenSans, sans-serif" font-size="20" letter-spacing="2" fill="#37E6D5">${(input.stack || 'FULL STACK · AI · WEB3').toUpperCase()}</text>
    <text x="590" y="650" font-family="OpenSans, sans-serif" font-size="16" letter-spacing="2" fill="#F6E8C8">LOCATION</text>
    <text x="590" y="682" font-family="OpenSans, sans-serif" font-size="18" fill="#F6E8C8">${(input.location || 'GOA, INDIA').toUpperCase()}</text>
    ${input.xHandle ? `<text x="590" y="735" font-family="OpenSans, sans-serif" font-size="16" letter-spacing="2" fill="#F6E8C8">X</text><text x="640" y="735" font-family="OpenSans, sans-serif" font-size="18" fill="#F6E8C8">${input.xHandle.toUpperCase()}</text>` : ''}
    ${input.github ? `<text x="590" y="790" font-family="OpenSans, sans-serif" font-size="16" letter-spacing="2" fill="#F6E8C8">GITHUB</text><text x="690" y="790" font-family="OpenSans, sans-serif" font-size="18" fill="#F6E8C8">${input.github.toUpperCase()}</text>` : ''}
    <rect x="590" y="910" width="390" height="92" rx="18" fill="#F6E8C8" fill-opacity="0.12" stroke="#FFD83D" stroke-opacity="0.24" />
    <text x="610" y="955" font-family="OpenSans, sans-serif" font-size="16" letter-spacing="2" fill="#FFD83D">PASS ID · ${passId}</text>
    <text x="610" y="980" font-family="OpenSans, sans-serif" font-size="14" letter-spacing="2" fill="#F6E8C8">BUILDERS ONLY · GOA 2026</text>
    <rect x="590" y="1030" width="390" height="46" rx="6" fill="#f6e8c8" fill-opacity="0.14" />
    <rect x="610" y="1044" width="320" height="16" rx="2" fill="#37E6D5" fill-opacity="0.78" />
    <rect x="610" y="1068" width="280" height="4" rx="2" fill="#FF3D81" fill-opacity="0.7" />
    <rect x="930" y="1044" width="30" height="16" rx="2" fill="#FFD83D" fill-opacity="0.9" />
    <circle cx="1030" cy="1100" r="18" fill="none" stroke="#FFD83D" stroke-width="2" />
  </svg>`;

  const image = await sharp(Buffer.from(svg)).flatten({ background: '#063B2A' }).jpeg({ quality: 88 }).toBuffer();
  return { image, passId };
}
