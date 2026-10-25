import CTAButton from './CTAButton';

export default function Section7() {
  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">06</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-16 text-center max-w-4xl mx-auto"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
        >
          <span style={{ fontStyle: 'italic' }}>12 Months From Now</span><br /><span style={{ fontStyle: 'italic' }}>&nbsp;One Of Two Things Is 100% True</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - Without a Team */}
          <div className="border border-white/10 p-10 sm:p-12 flex flex-col">
            <div className="mb-6">
              <span className="text-xs tracking-[0.2em] uppercase text-white/30">Without a Team</span>
            </div>
            <ul className="space-y-5 flex-1">
              <li className="flex items-start gap-3">
                <span className="text-white/30 mt-1 shrink-0 text-xs">✕</span>
                <span className="text-base text-white/50 font-light leading-relaxed">
                  Another year you considered it and didn{"\u2019"}t apply.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/30 mt-1 shrink-0 text-xs">✕</span>
                <span className="text-base text-white/50 font-light leading-relaxed">
                  Watching anonymous creators cash in 6 figures while chilling in their bedroom.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/30 mt-1 shrink-0 text-xs">✕</span>
                <span className="text-base text-white/50 font-light leading-relaxed">
                  Telling yourself you{"\u2019"}ll do it next month, again.
                </span>
              </li>
            </ul>
          </div>

          {/* Right - After becoming mini cookie */}
          <div className="border border-white/20 p-10 sm:p-12 flex flex-col bg-white/[0.02]">
            <div className="mb-6">
              <span className="text-xs tracking-[0.2em] uppercase text-white/60">After becoming a mini cookie</span>
            </div>
            <ul className="space-y-5 flex-1">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1 shrink-0 text-xs">✓</span>
                <span className="text-base text-white/90 font-light leading-relaxed">
                  Already reached your yearly goal.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1 shrink-0 text-xs">✓</span>
                <span className="text-base text-white/90 font-light leading-relaxed">
                  Other creators are left behind.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1 shrink-0 text-xs">✓</span>
                <span className="text-base text-white/90 font-light leading-relaxed">
                  Next month you will be at your dream destination.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton label="Apply Now" variant="solid" href="#application" />
        </div>
      </div>
    </section>
  );
}
