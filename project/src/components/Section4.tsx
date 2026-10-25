import CTAButton from './CTAButton';

const requirements = [
  {
    title: 'Adult age 18+',
    description: 'Passport, ID card or Driving licence to verify you\u2019re 18+',
  },
  {
    title: 'Smart device, Laptop, or PC',
    description:
      'Any recent iPhone or Android device with decent camera will work just fine in the beginning',
  },
  {
    title: 'Fast Internet Connection',
    description: 'Stable WiFi or 5G mobile data to keep your stream in good quality',
  },
  {
    title: 'Working Environment',
    description:
      'In the beginning we suggest starting in a room that gives you complete privacy, and nobody can distract you for at least 3-4 hours. Once you gain experience and become more confident you can do it from wherever you like',
  },
];

export default function Section4() {
  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">03</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic' }}
        >
          What Do I Need To Get Started?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {requirements.map((req, i) => (
            <div
              key={i}
              className="bg-jet-black p-8 sm:p-10 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl font-extrabold text-white/10 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold tracking-tight">{req.title}</h3>
              </div>
              <p className="text-sm text-white/50 font-light leading-relaxed pl-16">
                {req.description}
              </p>
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
