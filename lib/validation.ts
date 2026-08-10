export function validateImage(file: File) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/heic', 'image/heif'];
  if (!allowedTypes.includes(file.type) && !file.name.toLowerCase().match(/\.(jpg|jpeg|png|heic|heif)$/)) {
    return 'Unsupported file type. Use JPG, PNG, or HEIC.';
  }
  if (file.size > 10 * 1024 * 1024) {
    return 'File is too large. Keep it under 10MB.';
  }
  return null;
}
