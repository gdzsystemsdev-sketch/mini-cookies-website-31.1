export default function ReferModel() {
  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">10</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
            Grow with us
          </p>

          <h2
            className="font-extrabold tracking-tight leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            <span style={{ fontStyle: 'italic' }}>Refer a Model</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/80 font-light max-w-xl mb-4 leading-relaxed">
            Earn up to <span className="font-semibold text-white">10%</span> each month from every successful referral.
          </p>

          <p className="text-base text-white/50 font-light max-w-2xl mb-12 leading-relaxed">
            Know someone who could be a great fit to become a WebCam model, or an established model
            who could be earning way more?
            <br /><br />
            Send them our way and collect your&nbsp;<span style={{ color: 'rgb(255, 255, 255)', fontSize: '18px', fontWeight: 600 }}>10%</span>&nbsp;each month.
            <br /><br />
            For more information about the referral scheme, reach out to us on WhatsApp.
          </p>

          <a
            href="https://wa.me/message/CCNVZVWNKGFPA1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide uppercase whitespace-nowrap transition-all duration-300 rounded-full bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
