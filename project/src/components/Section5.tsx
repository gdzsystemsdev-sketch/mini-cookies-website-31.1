import CTAButton from './CTAButton';

const onlyfansPoints = [
  'No income for months while \u201cbuilding your brand\u201d',
  'Relying on social media algorithms, hoping you go viral',
  'Competing with already established models with 2M+ following',
  'AI-models posting daily endless content, faster than you',
  'Risking your time, while hoping to not get banned',
  'Months until you find what content works',
  'Working hard everyday just to convert 2% to your OnlyFans page',
];

const webcamPoints = [
  'You earn from day one',
  'Platforms already have millions of active fans waiting for you',
  'You completely skip the hardest step - you\u2019re already VIRAL',
  'Platforms have 100% AI-shield that prevents AI from \u201cstealing\u201d what\u2019s yours',
  'Real people will always choose real-human connection',
  'Location freedom - work from home, a hotel, beach, or while travelling',
  'Show up and have fun for a few hours - the rest is done-for-you',
];

function AnimatedGraph() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
      {/* Grid */}
      {[0, 50, 100, 150, 200].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}

      {/* Animated inconsistent upward line */}
      <polyline
        points="0,160 40,150 80,165 120,130 160,140 200,100 240,115 280,70 320,85 360,40 400,30"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="animate-graph-draw"
        style={{ strokeDasharray: 1000 }}
      />

      {/* Area fill */}
      <polygon
        points="0,160 40,150 80,165 120,130 160,140 200,100 240,115 280,70 320,85 360,40 400,30 400,200 0,200"
        fill="rgba(255,255,255,0.05)"
      />

      {/* Dots */}
      {[
        [0, 160], [40, 150], [80, 165], [120, 130], [160, 140],
        [200, 100], [240, 115], [280, 70], [320, 85], [360, 40], [400, 30],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="white" opacity="0.5" />
      ))}
    </svg>
  );
}

export default function Section5() {
  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">04<br /></span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-6 max-w-4xl"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
        >
          <span style={{ fontSize: '35px', fontStyle: 'italic' }}>You{"\u2019"}ve probably heard about <span style={{ fontSize: '50px' }}>OnlyFans</span></span>
          <br />
          <span className="text-white/60" style={{ fontSize: '27px', fontStyle: 'italic' }}>The GAME has completely changed.</span>
          <br />
          <span className="text-white/40" style={{ fontSize: '18px', fontStyle: 'italic', backgroundColor: 'rgb(10, 10, 10)' }}>It{"\u2019"}s not as EASY as it used to be a few years ago.</span>
        </h2>

        <p className="text-base text-white/50 font-light max-w-2xl mb-16 leading-relaxed">
          The landscape has shifted. What worked in 2022 doesn{"\u2019"}t work anymore. Here{"\u2019"}s how the
          two paths compare today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* OnlyFans box */}
          <div className="border border-white/10 p-8 sm:p-10 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold tracking-tight">
                OnlyFans <span className="text-white/40 font-normal">in 2026</span>
              </h3>
              <span className="text-xs tracking-[0.2em] uppercase text-white/30">The old way</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {onlyfansPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 shrink-0 text-xs">✕</span>
                  <span className="text-sm text-white/50 font-light leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* WebCam box */}
          <div className="border border-white/20 p-8 sm:p-10 flex flex-col bg-white/[0.02]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold tracking-tight">
                WebCam <span className="text-white/40 font-normal">in 2026</span>
              </h3>
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">The new way</span>
            </div>

            <ul className="space-y-4 flex-1">
              {webcamPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-white mt-1 shrink-0 text-xs">✓</span>
                  <span className="text-sm text-white/80 font-light leading-relaxed">{p}</span>
                </li>
              ))}
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
