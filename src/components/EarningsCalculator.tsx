import { useMemo, useState } from 'react';
import CTAButton from './CTAButton';

type Level = {
  id: 1 | 2 | 3;
  name: string;
  tokensPerHour: number;
  hourly: number;
  subtitle: string;
};

const TOKEN_VALUE = 0.038;
const WEEKS_PER_MONTH = 4.333;

const levels: Level[] = [
  {
    id: 1,
    name: 'Level 1',
    tokensPerHour: 2000,
    hourly: 2000 * TOKEN_VALUE,
    subtitle:
      'Even at the lowest level, 20 hours with us beats 40 hours on your own.',
  },
  {
    id: 2,
    name: 'Level 2',
    tokensPerHour: 3000,
    hourly: 3000 * TOKEN_VALUE,
    subtitle:
      'This is where creators who stick to their daily schedule land by month two or three.',
  },
  {
    id: 3,
    name: 'Level 3',
    tokensPerHour: 4000,
    hourly: 4000 * TOKEN_VALUE,
    subtitle:
      'Whales, exclusives, and account regulars get you here — not more hours. Nobody starts here.',
  },
];

const benchmarkHours = [10, 20, 30, 40];

function activeBracket(sliderHours: number): number {
  if (sliderHours <= 15) return 10;
  if (sliderHours <= 25) return 20;
  if (sliderHours <= 35) return 30;
  return 40;
}

function gbp(value: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(value);
}

function EarningsCalculator() {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3>(2);
  const [hours, setHours] = useState(20);

  const level = useMemo(
    () => levels.find((l) => l.id === activeLevel)!,
    [activeLevel]
  );

  const bracket = activeBracket(hours);

  const weekly = level.hourly * hours;
  const monthly = weekly * WEEKS_PER_MONTH;

  const benchmarks = benchmarkHours.map((h) => ({
    hours: h,
    weekly: level.hourly * h,
    monthly: level.hourly * h * WEEKS_PER_MONTH,
  }));

  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
            00
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic' }}
        >
          Your <span style={{ color: '#ff1493' }}>Earnings</span> Calculator
        </h2>
        <p className="text-base sm:text-lg text-white/50 font-light mb-12 max-w-2xl leading-relaxed">
          Pick your level, set your hours, and see exactly what lands in your
          pocket. All figures are take-home, after the 50/50 split.
        </p>

        {/* Level tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 ${
                activeLevel === lvl.id
                  ? 'bg-white text-black border-white'
                  : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
              }`}
            >
              {lvl.name}
              <span className="ml-2 text-xs opacity-60 normal-case font-normal">
                {lvl.tokensPerHour.toLocaleString()} tok/hr
              </span>
            </button>
          ))}
        </div>

        {/* Active level subtitle banner */}
        <div className="mb-12 border border-white/10 rounded-2xl bg-white/[0.02] p-6 sm:p-8">
          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed text-center">
            {level.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Hourly card */}
          <div className="border border-white/20 rounded-2xl p-8 sm:p-10 bg-white/[0.03] flex flex-col justify-center">
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
              Hourly Take-Home
            </span>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span
                className="font-extrabold tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#ff1493' }}
              >
                {gbp(level.hourly)}
              </span>
              <span className="text-base sm:text-lg text-white/50 font-light">
                an hour in your pocket
              </span>
            </div>
            <p className="mt-4 text-sm text-white/40 font-light leading-relaxed">
              Based on {level.tokensPerHour.toLocaleString()} tokens / hr at{' '}
              £{TOKEN_VALUE.toFixed(3)} per token.
            </p>
          </div>

          {/* Interactive slider card */}
          <div className="border border-white/10 rounded-2xl p-8 sm:p-10 bg-white/[0.01]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-white/40">
                Hours per week
              </span>
              <span className="text-2xl font-bold tabular-nums">
                {hours}
                <span className="text-sm font-normal text-white/40 ml-1">hrs</span>
              </span>
            </div>

            <input
              type="range"
              min={5}
              max={40}
              step={1}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              aria-label="Hours per week"
              className="w-full appearance-none h-1 rounded-full cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:transition-transform
                [&::-webkit-slider-thumb]:hover:scale-110
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-white
                [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ff1493 ${(hours - 5) / 35 * 100}%, rgba(255,255,255,0.15) ${(hours - 5) / 35 * 100}%)`,
              }}
            />

            <div className="flex justify-between mt-2 text-xs text-white/30 tabular-nums">
              <span>5 hrs</span>
              <span>40 hrs</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
                <span className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2">
                  Weekly
                </span>
                <span className="text-2xl sm:text-3xl font-bold tabular-nums">
                  {gbp(weekly)}
                </span>
              </div>
              <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
                <span className="block text-xs tracking-[0.2em] uppercase text-white/40 mb-2">
                  Monthly
                </span>
                <span className="text-2xl sm:text-3xl font-bold tabular-nums">
                  {gbp(monthly)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark table */}
        <div className="border border-white/10 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-white/[0.03]">
            <div className="p-5 text-xs tracking-[0.2em] uppercase text-white/40 font-medium border-r border-white/10">
              Hours / week
            </div>
            <div className="p-5 text-xs tracking-[0.2em] uppercase text-white/40 font-medium border-r border-white/10 text-center">
              Weekly take-home
            </div>
            <div className="p-5 text-xs tracking-[0.2em] uppercase text-white/40 font-medium text-center">
              Monthly take-home
            </div>
          </div>
          {benchmarks.map((b, i) => {
            const isActive = b.hours === bracket;
            return (
              <div
                key={b.hours}
                className={`grid grid-cols-3 border-t border-white/10 transition-colors ${
                  isActive ? 'bg-white/[0.05]' : 'hover:bg-white/[0.01]'
                }`}
              >
                <div className="p-5 text-sm font-semibold text-white border-r border-white/10 flex items-center">
                  {b.hours} hrs
                  {isActive && (
                    <span className="ml-2 text-[0.6rem] tracking-[0.2em] uppercase text-[#ff1493]">
                      you
                    </span>
                  )}
                </div>
                <div className="p-5 text-sm text-white/80 font-light border-r border-white/10 flex items-center justify-center tabular-nums">
                  {gbp(b.weekly)}
                </div>
                <div className="p-5 text-sm text-white font-light flex items-center justify-center tabular-nums">
                  {gbp(b.monthly)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile benchmark cards */}
        <div className="lg:hidden space-y-3 mt-6">
          {benchmarks.map((b) => {
            const isActive = b.hours === bracket;
            return (
              <div
                key={b.hours}
                className={`border rounded-lg p-4 ${
                  isActive ? 'border-white/30 bg-white/[0.05]' : 'border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">{b.hours} hrs/week</span>
                  {isActive && (
                    <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#ff1493]">
                      you
                    </span>
                  )}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50 font-light">{gbp(b.weekly)}/wk</span>
                  <span className="text-white font-light">{gbp(b.monthly)}/mo</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton label="Apply Now" variant="solid" color="pink" href="#application" />
        </div>
      </div>
    </section>
  );
}


export default EarningsCalculator;