import CTAButton from './CTAButton';

const bullets = [
  'Earn from day one',
  'No experience needed',
  '1-1 coaching',
  'Personal daily support',
  'Completely anonymous & private',
  '24/7 account management',
];

export default function Section1() {
  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">01<br /></span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
        >
          <span style={{ fontSize: 'clamp(1.75rem, 8vw, 60px)' }}>Live The <br />Location Freedom Life</span>
          <br />
          <span style={{ color: '#e5e7eb' }}>We All Love</span>
        </h2>

        <p className="text-lg sm:text-xl text-white/70 font-light mb-2 max-w-2xl leading-relaxed">
          Work from home, in a hotel, on an exotic beach, or while travelling.
        </p>
        <p className="text-base sm:text-lg text-white/50 font-light mb-12">
          The choice is yours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {bullets.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 py-3 border-b border-white/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              <span className="text-sm sm:text-base text-white/80 font-bold">{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton label="Apply Now" variant="solid" href="#application" />
        </div>
      </div>
    </section>
  );
}
