'use client';

import { motion } from 'framer-motion';
import { getBuilderTitle } from '@/lib/builderTitles';

type BuilderCardPreviewProps = {
  name: string;
  role: string;
  stack: string;
  location: string;
  xHandle: string;
  github: string;
  imageUrl?: string | null;
};

export default function BuilderCardPreview({ name, role, stack, location, xHandle, github, imageUrl }: BuilderCardPreviewProps) {
  const title = getBuilderTitle(name || 'Builder');
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[36px] border border-[#f6e8c8]/15 bg-[#041b13] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-[#ffd83d]/20 bg-[#063b2a] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,230,213,0.17),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(255,61,129,0.14),_transparent_34%)]" />
        <div className="relative flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="rounded-2xl border border-[#f6e8c8]/15 bg-[#04251c] px-3 py-2">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#ffd83d]">HH</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#f6e8c8]">GOA 2026</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#f6e8c8]/70">Hacker House</p>
              <p className="text-[14px] font-semibold uppercase tracking-[0.3em] text-[#ffd83d]">Goa</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[24px] border border-[#f6e8c8]/15 bg-[#05261d] p-3">
              {imageUrl ? (
                <img src={imageUrl} alt="Preview" className="h-[260px] w-full rounded-[18px] object-cover" />
              ) : (
                <div className="flex h-[260px] items-center justify-center rounded-[18px] border border-dashed border-[#f6e8c8]/20 bg-[#072e22] text-center text-sm uppercase tracking-[0.3em] text-[#f6e8c8]/70">
                  Upload photo
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#ffd83d]">Builder Pass</p>
                <h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-[0.2em] text-[#f6e8c8]">{(name || 'BUILDER').toUpperCase()}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#37E6D5]">{title}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#f6e8c8]">{(role || 'BUILDING THE FUTURE').toUpperCase()}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#f6e8c8]/80">{(stack || 'FULL STACK · AI · WEB3').toUpperCase()}</p>
              </div>
              <div className="rounded-[20px] border border-[#f6e8c8]/10 bg-[#05261d]/90 p-4 text-[11px] uppercase tracking-[0.24em] text-[#f6e8c8]/80">
                <p>{location || 'GOA, INDIA'}</p>
                {xHandle ? <p className="mt-2">{xHandle}</p> : null}
                {github ? <p className="mt-2">{github}</p> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
