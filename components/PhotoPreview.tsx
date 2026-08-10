'use client';

type PhotoPreviewProps = {
  imageUrl?: string | null;
  name?: string;
};

export default function PhotoPreview({ imageUrl, name }: PhotoPreviewProps) {
  return (
    <div className="rounded-[30px] border border-[#f6e8c8]/15 bg-[#041b13] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
      <div className="overflow-hidden rounded-[24px] border border-[#ffd83d]/25 bg-[#06261d]">
        {imageUrl ? (
          <img src={imageUrl} alt={name ?? 'Builder preview'} className="h-[320px] w-full object-cover" />
        ) : (
          <div className="flex h-[320px] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,216,61,0.15),_transparent_50%)]">
            <p className="text-center text-sm uppercase tracking-[0.35em] text-[#f6e8c8]/70">Photo preview will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}
