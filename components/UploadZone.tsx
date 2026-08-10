'use client';

import { motion } from 'framer-motion';

type UploadZoneProps = {
  isDragActive: boolean;
  onClick: () => void;
  selectedName?: string;
};

export default function UploadZone({ isDragActive, onClick, selectedName }: UploadZoneProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`flex h-60 w-full flex-col items-center justify-center rounded-[28px] border border-dashed px-6 text-center transition ${
        isDragActive ? 'border-[#37E6D5] bg-[#0a2e24]' : 'border-[#f6e8c8]/30 bg-[#05261d]/80'
      }`}
    >
      <div className="mb-3 h-14 w-14 rounded-full border border-[#ffd83d]/50 bg-[#ffd83d]/10" />
      <p className="text-lg font-semibold uppercase tracking-[0.3em] text-[#f6e8c8]">Drop your photo here</p>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#f6e8c8]/70">or tap to choose</p>
      {selectedName ? <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#37E6D5]">{selectedName}</p> : null}
    </motion.button>
  );
}
