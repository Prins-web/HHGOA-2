declare module 'heic-convert' {
  interface HeicConvertOptions {
    buffer: Buffer;
    format: 'JPEG' | 'PNG' | 'WEBP';
  }

  function heicConvert(options: HeicConvertOptions): Promise<Buffer | Uint8Array>;

  export default heicConvert;
}
