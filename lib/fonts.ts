import path from 'path';

const fontDir = path.join(process.cwd(), 'fonts');

export function getFontFiles() {
  return [
    path.join(fontDir, 'OpenSans-Regular.ttf'),
    path.join(fontDir, 'OpenSans-SemiBold.ttf'),
    path.join(fontDir, 'OpenSans-Bold.ttf'),
    path.join(fontDir, 'OpenSans-ExtraBold.ttf'),
  ];
}
