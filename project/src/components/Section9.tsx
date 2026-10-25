import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = {
  q: string;
  a: string;
};

type Category = {
  name: string;
  faqs: FAQ[];
};

const categories: Category[] = [
  {
    name: 'Privacy & Safety',
    faqs: [
      {
        q: 'What about my privacy - will my family or any of my relatives find out?',
        a: 'Your privacy is our top priority. We will set up a fake name, and a fake location. On the websites you can block any country you don\u2019t want to be shown to. The platforms we\u2019re working on are completely separated from the mainstream social media and not well known among the general population.',
      },
      {
        q: 'Can I block my country?',
        a: 'Yes you can block as many countries as you like. All platforms have geo-blocking systems. We can help you block specific regions and countries, so your profile will not be shown.',
      },
      {
        q: 'How do you handle my personal data?',
        a: 'We only collect what\u2019s required for verification and what is necessary for the onboarding. All data is stored securely with encryption. We do not sell, rent or share data with third parties. You can request to delete your data at any time.',
      },
      {
        q: 'What if I decide to quit - Is there a contract or lock-in period?',
        a: 'No. We believe that the results are the reason why we should work together. We actually recommend to everyone to try a few days at first - then if they decide it\u2019s not for them or it\u2019s not what they thought it is - we will delete all personal data and the profiles immediately.',
      },
      {
        q: 'Do I need to do crazy sexual things?',
        a: 'Absolutely not. There is a huge misconception when it comes to WebCam. During livestream, models sit in a bikini, lingerie, or even elegant clothing or dress. They talk to the fans that come to watch, and do teasing body or face expressions for tips. The nude stuff mainly happens in the private shows and you set your own boundaries. During private shows nobody can see you, only the fan that has requested and paid for the show. You will never be asked to perform something you don\u2019t want to, and we highly suggest - never accept to do or perform something you don\u2019t enjoy yourself.',
      },
      {
        q: 'How do I know this is not a scam?',
        a: 'Our success is entirely tied to yours. If you don\u2019t earn, we don\u2019t earn. Single, one-off payments don\u2019t interest us - we focus on building strong, long-term partnerships that generate high income for both of us, consistently. We highly prefer to get paid consistently rather than once. We\u2019re in this with you for the long run.',
      },
    ],
  },
  {
    name: 'Earnings',
    faqs: [
      {
        q: 'How quickly can I start earning?',
        a: 'The verification and setup process usually takes 24h. Once you go live, you will have daily support and guidance from your dedicated manager to hit the ground running. Most models start earning from the first day, some even within the first hour.',
      },
      {
        q: 'How much can I realistically earn?',
        a: 'The earning potential relies on two things: time spent online, and commitment. This is not a \u201cget rich quick scheme\u201d. The more you put in - the more you get out. Models doing this full-time (30 hours+/week) typically earn $5,000-$20,000/month.',
      },
      {
        q: 'How many income streams models have?',
        a: 'You can begin with one platform in the beginning in the first few days. Once you get more experience and become more confident, we will start adding up one more platform at a time. You can multi-stream on 5 streams at the same time: Stripchat, Chaturbate, Myfreecams, AdultWorks and LiveJasmin. Apart from the WebCam platforms, if you decide you can also start your OnlyFans career, and gain your audience quickly and anonymously by leveraging your existing fans from the WebCam platform, and also additional off-platform income from the apps such as WhatsApp, Telegram, SnapChat, Skype etc\u2026',
      },
      {
        q: 'Off-platform earnings?',
        a: 'WebCam platforms that you will be streaming on, allow you to sell a phone number. We will provide you with a real e-sim number that will be used specifically for creating accounts on apps such as WhatsApp, Telegram, SnapChat, Skype, etc\u2026 Loyal fans are willing to pay for this as it gains trust and builds real connection. You will get a daily report on the chats with each fan. The chatting on all apps is handled by us, so you will earn while you\u2019re offline, enjoying your life, or while you sleep.',
      },
      {
        q: 'How does your agency earn?',
        a: 'The split is equal 50/50. All earnings that are predicted & mentioned on our website are after the split and are completely yours.',
      },
      {
        q: 'Can I start working part-time?',
        a: 'Absolutely. Many of our creators begin part-time alongside work or university to explore the potential before committing to a full-time schedule.',
      },
      {
        q: 'When do I get paid?',
        a: 'Weekly, bi-weekly or monthly, aligned with each platform payout schedule. You track all incoming earnings. For the off-platform earnings you are getting daily updates at real time, and transactions are made the same day.',
      },
    ],
  },
  {
    name: 'Requirements & Setup',
    faqs: [
      {
        q: 'Do I need experience?',
        a: 'Absolutely not. In fact, many of our top-performing models started with zero background in the adult industry. What truly drives success is your vibe, energy and consistency. You will have daily coaching and live support at all times - so you don\u2019t have to figure anything alone.',
      },
      {
        q: 'What ID do I need to get started?',
        a: 'Valid Government-issued ID, Driving licence or Passport.',
      },
      {
        q: 'What equipment do I need to get started?',
        a: 'Any iPhone or Android smartphone device or tablet with a decent camera, laptop or PC with decent built-in web camera. Stable Internet connection is very important.',
      },
      {
        q: 'Can I work from home or while travelling?',
        a: 'Absolutely. This is the best thing about WebCam, it\u2019s completely remote and gives you the location freedom. You can work from your own home, in a hotel, or the beach in an exotic location. You control your own working hours and working environment.',
      },
      {
        q: 'Does it cost to join?',
        a: 'No upfront cost. We simply take % from the earnings, so we have direct interest in your success - because the more you earn, we do as well.',
      },
      {
        q: 'Why work with an Agency?',
        a: 'Navigating this industry alone can feel overwhelming. That\u2019s why we built an all-in-one management agency designed to launch everyday creators into top-earning models. We provide complete training before your first live stream, register your profile under our studio account for priority traffic, and boost your page to the front line for maximum visibility. Best of all, you get dedicated live support in every stream to manage your chat, negotiate private shows, handle demanding viewers, and support you in real time, also handling all off-platform income streams to take your earnings as much as possible, while you\u2019re not working.',
      },
      {
        q: 'What do I actually do during the live stream?',
        a: 'Think of it like a live TikTok or YouTube stream. Fans can join and chat in your public room chat and send tips during your stream, with the option to unlock 1-on-1 private nude/non-nude video calls that are paid per minute. You maintain total creative freedom over your broadcasts. We help you build a custom show strategy that matches what you genuinely enjoy - whether that\u2019s dancing, chatting for hours, or sharing your daily routine. You set the boundaries; we optimize the stream.',
      },
    ],
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className={`text-sm sm:text-base font-medium transition-colors ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className="pb-6 text-sm text-white/50 font-light leading-relaxed pr-8">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function Section9() {
  const [openCategory, setOpenCategory] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<string | null>('0-0');

  return (
    <section className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">08</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2
          className="font-extrabold tracking-tight leading-[1.1] mb-16 text-center"
          style={{ fontSize: 'clamp(2rem, 5vw, 38px)', fontStyle: 'italic' }}
        >
          Your Questions<br />Answered
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setOpenCategory(i)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 ${
                openCategory === i
                  ? 'bg-white text-black border-white'
                  : 'border-white/20 text-white/60 hover:border-white/40 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="mb-16">
          {categories[openCategory].faqs.map((faq, i) => {
            const key = `${openCategory}-${i}`;
            return (
              <FAQItem
                key={key}
                faq={faq}
                isOpen={openFAQ === key}
                onToggle={() => setOpenFAQ(openFAQ === key ? null : key)}
              />
            );
          })}
        </div>

        {/* Contact box */}
        <div className="border border-white/10 rounded-2xl p-10 sm:p-14 text-center bg-white/[0.01]">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Have more questions?
          </h3>
          <p className="text-white/50 font-light mb-8 max-w-md mx-auto">
            Please reach out to us via WhatsApp. We are available 7 days a week.
          </p>
          <a href="https://wa.me/message/CCNVZVWNKGFPA1" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 text-xs sm:text-sm font-semibold tracking-wide uppercase whitespace-nowrap transition-all duration-300 rounded-full bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]">
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
