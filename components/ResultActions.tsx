'use client';

type ResultActionsProps = {
  onDownload: () => void;
  onShare: () => void;
  onReset: () => void;
};

export default function ResultActions({ onDownload, onShare, onReset }: ResultActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button onClick={onDownload} className="flex-1 rounded-[24px] bg-[#ffd83d] px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#04251c]">Download PNG</button>
      <button onClick={onShare} className="flex-1 rounded-[24px] border border-[#37E6D5]/40 bg-[#05261d] px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#37E6D5]">Share to X</button>
      <button onClick={onReset} className="flex-1 rounded-[24px] border border-[#f6e8c8]/20 bg-transparent px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#f6e8c8]">Create another</button>
    </div>
  );
}
