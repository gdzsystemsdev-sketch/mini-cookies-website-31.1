import { type ReactNode } from 'react';
import CTAButton from './CTAButton';

type Row = {
  feature: string;
  solo: string;
  agency: string;
  mini: ReactNode;
};

const rows: Row[] = [
  {
    feature: 'Getting started',
    solo: 'Months of confusion, dealing with trial & error',
    agency: 'Takes weeks until you start',
    mini: 'Fully-guided complete setup, start immediately',
  },
  {
    feature: 'Privacy protection',
    solo: 'Manually dealing with content leaks',
    agency: 'Minimal, very slow',
    mini: 'Fake name, fake location, geo-blocking, DMCA monitoring',
  },
  {
    feature: 'Platforms',
    solo: 'Limited to 1-2 platforms',
    agency: 'Usually limited to 3 streaming platforms',
    mini: <>Multi-streaming&nbsp;across 5 platforms at once + up to <br />4 off-platform done-for-you income streams.</>,
  },
  {
    feature: 'Earnings',
    solo: '60-70% of revenue goes uncaptured',
    agency: 'Overworked VA manages 3 models at once',
    mini: 'Dedicated admin handles only your inbox each stream',
  },
  {
    feature: 'Accounts Management',
    solo: 'Doing everything alone, hard to catch up',
    agency: 'Handled by the same overworked VA',
    mini: '24/7 chatting covered for all income streams by the same admins',
  },
  {
    feature: 'Off-platform income',
    solo: 'Time consuming, missed opportunities, wasted energy',
    agency: 'Usually limited to OnlyFans only',
    mini: 'Up to 4 message apps increasing your income while you sleep',
  },
  {
    feature: 'Support',
    solo: 'Absolutely no one, zero feedback, zero improvement',
    agency: 'Big promises in advance, hours of silence after you sign in',
    mini: 'Dedicated manager available only for you',
  },
  {
    feature: 'Strategy',
    solo: 'Trial & error, usually most expensive way',
    agency: 'Same strategy applies for all models',
    mini: 'Strategy that fits only your persona',
  },
  {
    feature: 'Systems',
    solo: 'No proven systems, guess work',
    agency: '\u201cProven systems\u201d that simply doesn\u2019t work sometimes',
    mini: 'Personalized system built specifically for you',
  },
  {
    feature: 'Contracts',
    solo: 'None',
    agency: '1-year contracts, tied up with hidden exit fees',
    mini: 'Leave anytime, zero contracts, zero penalties, zero exit fees',
  },
];

export default function Section6() {
  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">04</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-16"
          style={{ fontSize: 'clamp(2.125rem, 5vw, 3.5rem)', fontStyle: 'italic' }}
        >
          <span style={{ color: '#ff1493' }}>Why</span> mini cookies?
        </h2>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-hidden border border-white/10 rounded-lg">
          {/* Header */}
          <div className="grid grid-cols-4 bg-white/[0.03]">
            <div className="p-5 text-xs tracking-[0.2em] uppercase text-white/40 font-medium border-r border-white/10">
              Features
            </div>
            <div className="p-5 text-sm font-bold text-center text-white/50 border-r border-white/10">
              Working Alone
            </div>
            <div className="p-5 text-sm font-bold text-center text-white/50 border-r border-white/10">
              Typical Agency
            </div>
            <div className="p-5 text-sm font-bold text-center text-white bg-white/[0.05]">
              mini cookies
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 border-t border-white/10 hover:bg-white/[0.01] transition-colors"
            >
              <div className="p-5 text-sm font-semibold text-white border-r border-white/10 flex items-center">
                {row.feature}
              </div>
              <div className="p-5 text-sm text-white/40 font-light border-r border-white/10 flex items-center leading-relaxed">
                {row.solo}
              </div>
              <div className="p-5 text-sm text-white/40 font-light border-r border-white/10 flex items-center leading-relaxed">
                {row.agency}
              </div>
              <div className="p-5 text-sm text-white font-light bg-white/[0.03] flex items-center leading-relaxed">
                {row.mini}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="border border-white/10 rounded-lg p-5">
              <h3 className="text-sm font-bold tracking-wide uppercase text-white mb-4 pb-3 border-b border-white/10">
                {row.feature}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs text-white/40 font-medium mt-0.5 shrink-0 w-20">Solo</span>
                  <span className="text-sm text-white/50 font-light">{row.solo}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs text-white/40 font-medium mt-0.5 shrink-0 w-20">Agency</span>
                  <span className="text-sm text-white/50 font-light">{row.agency}</span>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                  <span className="text-xs text-white font-medium mt-0.5 shrink-0 w-20">mini cookies</span>
                  <span className="text-sm text-white font-light">{row.mini}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton label="Apply Now" variant="solid" color="pink" href="#application" />
        </div>
      </div>
    </section>
  );
}
