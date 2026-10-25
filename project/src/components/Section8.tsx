import CTAButton from './CTAButton';

export default function Section8() {
  return (
    <section className="py-10 sm:py-40 px-6 bg-jet-black border-t border-white/5 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-white/20" />
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">07</span>
          <div className="h-px w-12 bg-white/20" />
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
          Beginning of your journey
        </p>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-8"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          <span style={{ fontStyle: 'italic', fontSize: '33px' }}>One Message Can Change Everything</span>
        </h2>

        <p className="text-lg text-white/60 font-light leading-relaxed mb-12 max-w-xl mx-auto">
          No commitments yet - just a chill conversation to see whether this fits your life and your
          goals. If it does - your journey to success begins.
        </p>

        <div className="flex justify-center">
          <CTAButton label="Apply Now" variant="solid" href="#application" />
        </div>
      </div>
    </section>
  );
}
