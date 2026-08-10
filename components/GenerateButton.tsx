'use client';

import { motion } from 'framer-motion';

type GenerateButtonProps = {
  onClick: () => void;
  loading: boolean;
};

export default function GenerateButton({ onClick, loading }: GenerateButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      disabled={loading}
      className="w-full rounded-[24px] bg-[#ffd83d] px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#04251c] transition disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? 'Building your pass...' : 'Generate builder pass'}
    </motion.button>
  );
}
