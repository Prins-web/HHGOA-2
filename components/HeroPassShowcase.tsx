'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const float = (duration: number, delay: number) => ({
  animate: { y: [0, -14, 0] },
  transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' as const },
});

export default function HeroPassShowcase() {
  return (
    <div className="relative flex w-full max-w-[440px] items-center justify-center py-8">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,216,61,0.16),_transparent_55%)]" />
      <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-[#37E6D5]/15 blur-2xl" />
      <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[#FF3D81]/15 blur-2xl" />

      <motion.div {...fadeUp} className="relative">
        <motion.div
          {...float(6, 0)}
          className="relative w-[300px] overflow-hidden rounded-[36px] border border-[#ffd83d]/25 bg-[#04251c] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] sm:w-[320px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,230,213,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,61,129,0.12),_transparent_38%)]" />

          <div className="relative flex items-start justify-between">
            <div className="rounded-2xl border border-[#f6e8c8]/15 bg-[#05261d] px-3 py-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ffd83d]">HH</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#f6e8c8]/80">GOA 2026</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#f6e8c8]/70">Hacker House</p>
              <p className="text-[14px] font-semibold uppercase tracking-[0.3em] text-[#ffd83d]">Goa</p>
            </div>
          </div>

          <div className="relative mt-8 flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffd83d]/50 bg-[#063b2a] shadow-[0_0_40px_rgba(255,216,61,0.25)]">
              <p className="text-lg font-black uppercase tracking-[0.2em] text-[#f6e8c8]">HH</p>
            </div>
            <p className="mt-5 text-2xl font-black uppercase tracking-[0.3em] text-[#f6e8c8]">Hacker House</p>
            <p className="mt-2 text-lg font-semibold uppercase tracking-[0.5em] text-[#ffd83d]">Goa 2026</p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#f6e8c8]/25 to-transparent" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.4em] text-[#37E6D5]">Build · Ship · Meet</p>
          </div>

          <div className="relative mt-8 space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-[#f6e8c8]/10 bg-[#05261d]/90 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f6e8c8]/70">Pass Id</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#ffd83d]">HH26-GOA-7F3K92</p>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[#f6e8c8]/10 bg-[#05261d]/90 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#f6e8c8]/70">Dates</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#f6e8c8]">28 — 31 Oct 2026</p>
            </div>
          </div>

          <p className="relative mt-8 text-center text-[10px] uppercase tracking-[0.5em] text-[#f6e8c8]/50">#FrameInGoa</p>
        </motion.div>

        <motion.div
          {...float(5, 0.6)}
          className="absolute -right-6 top-10 rounded-2xl border border-[#37E6D5]/30 bg-[#05261d]/95 px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.4)] sm:-right-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#37E6D5]">Builder Pass</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#f6e8c8]/70">Ready in seconds</p>
        </motion.div>

        <motion.div
          {...float(5.5, 1.1)}
          className="absolute -left-6 bottom-24 rounded-2xl border border-[#ffd83d]/30 bg-[#05261d]/95 px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.4)] sm:-left-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ffd83d]">Open Invite</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#f6e8c8]/70">All builders welcome</p>
        </motion.div>

        <motion.div
          {...float(4.8, 0.3)}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#FF3D81]/40 bg-[#05261d]/95 px-5 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#FF3D81]">Your face goes here</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
