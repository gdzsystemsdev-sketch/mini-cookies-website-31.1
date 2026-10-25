import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import CTAButton from './CTAButton';

/**
 * Customer feedback screenshots.
 * Add as many image URLs as you like — the marquee handles any count.
 */
const screenshots: string[] = [
  '/images/real-feedback/Screenshot_2026-09-04_174518.png',
  '/images/real-feedback/Screenshot_2026-09-04_174542.png',
  '/images/real-feedback/Screenshot_2026-09-04_174601.png',
  '/images/real-feedback/Screenshot_2026-09-04_174617.png',
  '/images/real-feedback/Screenshot_2026-09-04_174648.png',
  '/images/real-feedback/Screenshot_2026-09-04_174658.png',
  '/images/real-feedback/Screenshot_2026-09-04_174725.png',
  '/images/real-feedback/Screenshot_2026-09-04_174736.png',
  '/images/real-feedback/Screenshot_2026-09-04_174802.png',
  '/images/real-feedback/Screenshot_2026-09-04_174829.png',
  '/images/real-feedback/Screenshot_2026-09-04_174853.png',
  '/images/real-feedback/Screenshot_2026-09-04_174907.png',
  '/images/real-feedback/Screenshot_2026-09-04_174920.png',
];

export default function Section2() {
  const [paused, setPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + screenshots.length) % screenshots.length));
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % screenshots.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section className="py-10 sm:py-32 px-0 bg-jet-black border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">02</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col items-center justify-center mb-16 gap-4">
          <h2
            className="text-center font-extrabold tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            <span style={{ fontStyle: 'italic' }}>Earnings &amp; Feedback</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Edge gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-jet-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-jet-black to-transparent" />

        {/* Track — duplicated for seamless infinite loop */}
        <div
          className="flex gap-5 w-max"
          style={{
            animation: 'marquee 60s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {[...screenshots, ...screenshots].map((src, i) => {
            const realIndex = i % screenshots.length;
            return (
              <button
                key={i}
                onClick={() => setLightboxIndex(realIndex)}
                className="group relative shrink-0 overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
                style={{ width: '220px', height: '440px' }}
                aria-label={`Open feedback screenshot ${realIndex + 1}`}
              >
                <img
                  src={src}
                  alt={`Feedback screenshot ${realIndex + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 flex justify-center">
        <CTAButton label="Apply Now" variant="solid" color="pink" href="#application" />
      </div>

      {/* Full-screen lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-3 sm:left-6 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-3 sm:right-6 z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            aria-label="Next"
          >
            ›
          </button>

          {/* Image */}
          <img
            src={screenshots[lightboxIndex]}
            alt={`Feedback screenshot ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[90vw] sm:max-w-[480px] object-contain rounded-lg shadow-2xl"
          />

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/50 uppercase">
            {lightboxIndex + 1} / {screenshots.length}
          </div>
        </div>
      )}
    </section>
  );
}
