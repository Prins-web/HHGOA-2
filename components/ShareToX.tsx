'use client';

export default function ShareToX({ text }: { text: string }) {
  const share = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button onClick={share} className="rounded-[24px] border border-[#37E6D5]/40 bg-[#05261d] px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#37E6D5]">
      Share to X
    </button>
  );
}
