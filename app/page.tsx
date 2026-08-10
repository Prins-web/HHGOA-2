'use client';

import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import BuilderCardPreview from '@/components/BuilderCardPreview';
import BuilderForm from '@/components/BuilderForm';
import GenerateButton from '@/components/GenerateButton';
import MobilePreview from '@/components/MobilePreview';
import PhotoPreview from '@/components/PhotoPreview';
import ResultActions from '@/components/ResultActions';
import UploadZone from '@/components/UploadZone';
import { validateImage } from '@/lib/validation';

export default function Home() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: 'PRINCE SINGH',
    role: 'FULL STACK DEVELOPER',
    stack: 'REACT · NEXT.JS · NODE',
    location: 'GOA, INDIA',
    xHandle: '@prince',
    github: 'github.com/prince',
  });
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState<string | null>(null);
  const [passId, setPassId] = useState('HH26-GOA-7F3K92');
  const [message, setMessage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    const error = validateImage(file);
    if (error) {
      setMessage(error);
      return;
    }
    setMessage(null);
    const url = URL.createObjectURL(file);
    setPhoto(file);
    setPhotoUrl(url);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.heic', '.heif'] },
    maxFiles: 1,
    multiple: false,
  });

  const onGenerate = async () => {
    if (!photo) {
      setMessage('Please upload a photo first.');
      return;
    }
    setLoading(true);
    setMessage('PHOTO CAPTURED');
    try {
      const formData = new FormData();
      formData.append('photo', photo);
      formData.append('name', values.name);
      formData.append('role', values.role);
      formData.append('stack', values.stack);
      formData.append('location', values.location);
      formData.append('xHandle', values.xHandle);
      formData.append('github', values.github);

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Generation failed');
      setGenerated(data.imageUrl);
      setPassId(data.passId);
      setMessage('BUILDER ID READY');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Generation failed');
    } finally {
      setLoading(false);
    }
  };

  const onDownload = () => {
    if (!generated) return;
    const link = document.createElement('a');
    link.href = generated;
    link.download = `frame-in-goa-pass-${passId}.png`;
    link.click();
  };

  const onShare = () => {
    const text = `Just got my Hacker House Goa 2026 Builder Pass 🌴⚡\n\nReady to build, ship and meet the builders in Goa.\n\n#FrameInGoa`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const onReset = () => {
    setGenerated(null);
    setPhoto(null);
    setPhotoUrl(null);
    setPassId('HH26-GOA-7F3K92');
    setMessage(null);
  };

  const heroSubtitle = useMemo(() => 'Turn your builder identity into a Goa 2026 pass.', []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(55,230,213,0.12),_transparent_36%)] px-4 py-6 text-[#f6e8c8] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-[40px] border border-[#f6e8c8]/10 bg-[#03140f]/95 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[#ffd83d]">Frame in Goa</p>
              <h1 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[0.22em] text-[#f6e8c8] sm:text-5xl lg:text-6xl">Official builder pass</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f6e8c8]/80">{heroSubtitle}</p>
              <p className="mt-5 max-w-xl text-sm uppercase tracking-[0.3em] text-[#37E6D5]">Upload your photo · choose your stack · get your builder pass</p>
            </div>
            <div className="flex items-center justify-center">
              <MobilePreview>
                <BuilderCardPreview name={values.name} role={values.role} stack={values.stack} location={values.location} xHandle={values.xHandle} github={values.github} imageUrl={photoUrl} />
              </MobilePreview>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div {...getRootProps()} className="cursor-pointer">
              <UploadZone isDragActive={isDragActive} onClick={() => {}} selectedName={photo?.name} />
              <input {...getInputProps()} />
            </div>
            <PhotoPreview imageUrl={photoUrl} name={values.name} />
          </div>
          <div className="space-y-6">
            <BuilderForm values={values} onChange={(field, value) => setValues((prev) => ({ ...prev, [field]: value }))} />
            <div className="rounded-[30px] border border-[#f6e8c8]/10 bg-[#041b13]/90 p-6">
              {message ? <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#ffd83d]">{message}</p> : null}
              <GenerateButton onClick={onGenerate} loading={loading} />
            </div>
          </div>
        </section>

        <AnimatePresence mode="wait">
          {generated ? (
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="rounded-[40px] border border-[#ffd83d]/20 bg-[#03110d]/95 p-6">
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#ffd83d]">Your builder pass is ready</p>
                  <h2 className="mt-2 text-2xl font-semibold uppercase tracking-[0.2em] text-[#f6e8c8]">Download & share</h2>
                </div>
                <div className="rounded-full border border-[#37E6D5]/30 bg-[#05261d] px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#37E6D5]">PASS ID · {passId}</div>
              </div>
              <div className="flex justify-center">
                <img src={generated} alt="Generated Builder Pass" className="w-full max-w-[420px] rounded-[28px] border border-[#f6e8c8]/15" />
              </div>
              <div className="mt-6">
                <ResultActions onDownload={onDownload} onShare={onShare} onReset={onReset} />
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  );
}
