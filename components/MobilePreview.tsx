'use client';

export default function MobilePreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[320px] justify-center rounded-[40px] border border-[#f6e8c8]/15 bg-[#02140f] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      <div className="w-full overflow-hidden rounded-[32px] border border-[#f6e8c8]/10 bg-[#03130d] p-3">
        {children}
      </div>
    </div>
  );
}
