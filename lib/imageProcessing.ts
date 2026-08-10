import sharp from 'sharp';
import heicConvert from 'heic-convert';

export async function processImage(file: File, maxWidth = 1200) {
  const bytes = Buffer.from(await file.arrayBuffer());
  let input = bytes;
  let format = file.type.includes('heic') || file.type.includes('heif') || file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif') ? 'jpeg' : undefined;

  if (file.type.includes('heic') || file.type.includes('heif') || file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif')) {
    const converted = await heicConvert({ buffer: bytes, format: 'JPEG' });
    input = Buffer.from(converted);
  }

  const image = sharp(input);
  const metadata = await image.metadata();

  const width = metadata.width ?? 1000;
  const height = metadata.height ?? 1000;
  const orientation = metadata.orientation ?? 1;
  const isPortrait = height > width;
  const targetWidth = Math.min(maxWidth, width);
  const targetHeight = Math.round((targetWidth / width) * height);

  const resized = await image
    .rotate()
    .resize({ width: targetWidth, height: targetHeight, fit: 'cover' })
    .jpeg({ quality: 88 })
    .toBuffer();

  return {
    buffer: resized,
    mime: 'image/jpeg',
    isPortrait,
    orientation,
  };
}
