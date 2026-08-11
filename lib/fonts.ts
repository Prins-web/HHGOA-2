import fs from 'fs';
import path from 'path';

const fontDir = path.join(process.cwd(), 'fonts');

function dataUri(file: string) {
  return `data:font/ttf;base64,${fs.readFileSync(path.join(fontDir, file)).toString('base64')}`;
}

export function getFontFaces() {
  return `
    @font-face { font-family: 'OpenSans'; font-weight: 400; src: url(${dataUri('OpenSans-Regular.ttf')}) format('truetype'); }
    @font-face { font-family: 'OpenSans'; font-weight: 600; src: url(${dataUri('OpenSans-SemiBold.ttf')}) format('truetype'); }
    @font-face { font-family: 'OpenSans'; font-weight: 700; src: url(${dataUri('OpenSans-Bold.ttf')}) format('truetype'); }
    @font-face { font-family: 'OpenSans'; font-weight: 800; src: url(${dataUri('OpenSans-ExtraBold.ttf')}) format('truetype'); }
  `;
}
