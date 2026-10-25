import { useState, type FormEvent } from 'react';
import { Check, Loader as Loader2 } from 'lucide-react';
import CTAButton from './CTAButton';

type ContactMethod = '' | 'WhatsApp' | 'Telegram' | 'Other';

type FormState = {
  full_name: string;
  age: string;
  email: string;
  country: string;
  primary_goal: string;
  contact_method: ContactMethod;
  dial_code: string;
  contact_details: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type DialCode = {
  code: string;
  country: string;
};

const initialForm: FormState = {
  full_name: '',
  age: '',
  email: '',
  country: '',
  primary_goal: '__placeholder__',
  contact_method: '',
  dial_code: '+1',
  contact_details: '',
};

const dialCodes: DialCode[] = [
  { code: '+1', country: 'United States' },
  { code: '+1', country: 'Canada' },
  { code: '+7', country: 'Russia' },
  { code: '+7', country: 'Kazakhstan' },
  { code: '+20', country: 'Egypt' },
  { code: '+27', country: 'South Africa' },
  { code: '+30', country: 'Greece' },
  { code: '+31', country: 'Netherlands' },
  { code: '+32', country: 'Belgium' },
  { code: '+33', country: 'France' },
  { code: '+34', country: 'Spain' },
  { code: '+36', country: 'Hungary' },
  { code: '+39', country: 'Italy' },
  { code: '+40', country: 'Romania' },
  { code: '+41', country: 'Switzerland' },
  { code: '+43', country: 'Austria' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+45', country: 'Denmark' },
  { code: '+46', country: 'Sweden' },
  { code: '+47', country: 'Norway' },
  { code: '+48', country: 'Poland' },
  { code: '+49', country: 'Germany' },
  { code: '+51', country: 'Peru' },
  { code: '+52', country: 'Mexico' },
  { code: '+53', country: 'Cuba' },
  { code: '+54', country: 'Argentina' },
  { code: '+55', country: 'Brazil' },
  { code: '+56', country: 'Chile' },
  { code: '+57', country: 'Colombia' },
  { code: '+58', country: 'Venezuela' },
  { code: '+60', country: 'Malaysia' },
  { code: '+61', country: 'Australia' },
  { code: '+62', country: 'Indonesia' },
  { code: '+63', country: 'Philippines' },
  { code: '+64', country: 'New Zealand' },
  { code: '+65', country: 'Singapore' },
  { code: '+66', country: 'Thailand' },
  { code: '+81', country: 'Japan' },
  { code: '+82', country: 'South Korea' },
  { code: '+84', country: 'Vietnam' },
  { code: '+86', country: 'China' },
  { code: '+90', country: 'Turkey' },
  { code: '+91', country: 'India' },
  { code: '+92', country: 'Pakistan' },
  { code: '+93', country: 'Afghanistan' },
  { code: '+94', country: 'Sri Lanka' },
  { code: '+95', country: 'Myanmar' },
  { code: '+98', country: 'Iran' },
  { code: '+212', country: 'Morocco' },
  { code: '+213', country: 'Algeria' },
  { code: '+216', country: 'Tunisia' },
  { code: '+218', country: 'Libya' },
  { code: '+220', country: 'Gambia' },
  { code: '+221', country: 'Senegal' },
  { code: '+222', country: 'Mauritania' },
  { code: '+223', country: 'Mali' },
  { code: '+224', country: 'Guinea' },
  { code: '+225', country: 'Ivory Coast' },
  { code: '+226', country: 'Burkina Faso' },
  { code: '+227', country: 'Niger' },
  { code: '+228', country: 'Togo' },
  { code: '+229', country: 'Benin' },
  { code: '+230', country: 'Mauritius' },
  { code: '+231', country: 'Liberia' },
  { code: '+232', country: 'Sierra Leone' },
  { code: '+233', country: 'Ghana' },
  { code: '+234', country: 'Nigeria' },
  { code: '+235', country: 'Chad' },
  { code: '+236', country: 'Central African Republic' },
  { code: '+237', country: 'Cameroon' },
  { code: '+238', country: 'Cape Verde' },
  { code: '+239', country: 'Sao Tome and Principe' },
  { code: '+240', country: 'Equatorial Guinea' },
  { code: '+241', country: 'Gabon' },
  { code: '+242', country: 'Republic of the Congo' },
  { code: '+243', country: 'Democratic Republic of the Congo' },
  { code: '+244', country: 'Angola' },
  { code: '+245', country: 'Guinea-Bissau' },
  { code: '+248', country: 'Seychelles' },
  { code: '+249', country: 'Sudan' },
  { code: '+250', country: 'Rwanda' },
  { code: '+251', country: 'Ethiopia' },
  { code: '+252', country: 'Somalia' },
  { code: '+253', country: 'Djibouti' },
  { code: '+254', country: 'Kenya' },
  { code: '+255', country: 'Tanzania' },
  { code: '+256', country: 'Uganda' },
  { code: '+257', country: 'Burundi' },
  { code: '+258', country: 'Mozambique' },
  { code: '+260', country: 'Zambia' },
  { code: '+261', country: 'Madagascar' },
  { code: '+263', country: 'Zimbabwe' },
  { code: '+264', country: 'Namibia' },
  { code: '+265', country: 'Malawi' },
  { code: '+266', country: 'Lesotho' },
  { code: '+267', country: 'Botswana' },
  { code: '+268', country: 'Eswatini' },
  { code: '+269', country: 'Comoros' },
  { code: '+351', country: 'Portugal' },
  { code: '+352', country: 'Luxembourg' },
  { code: '+353', country: 'Ireland' },
  { code: '+354', country: 'Iceland' },
  { code: '+355', country: 'Albania' },
  { code: '+356', country: 'Malta' },
  { code: '+357', country: 'Cyprus' },
  { code: '+358', country: 'Finland' },
  { code: '+359', country: 'Bulgaria' },
  { code: '+370', country: 'Lithuania' },
  { code: '+371', country: 'Latvia' },
  { code: '+372', country: 'Estonia' },
  { code: '+373', country: 'Moldova' },
  { code: '+374', country: 'Armenia' },
  { code: '+375', country: 'Belarus' },
  { code: '+376', country: 'Andorra' },
  { code: '+377', country: 'Monaco' },
  { code: '+378', country: 'San Marino' },
  { code: '+380', country: 'Ukraine' },
  { code: '+381', country: 'Serbia' },
  { code: '+382', country: 'Montenegro' },
  { code: '+385', country: 'Croatia' },
  { code: '+386', country: 'Slovenia' },
  { code: '+389', country: 'North Macedonia' },
  { code: '+420', country: 'Czech Republic' },
  { code: '+421', country: 'Slovakia' },
  { code: '+423', country: 'Liechtenstein' },
  { code: '+971', country: 'United Arab Emirates' },
  { code: '+972', country: 'Israel' },
  { code: '+973', country: 'Bahrain' },
  { code: '+974', country: 'Qatar' },
  { code: '+975', country: 'Bhutan' },
  { code: '+976', country: 'Mongolia' },
  { code: '+977', country: 'Nepal' },
  { code: '+992', country: 'Tajikistan' },
  { code: '+993', country: 'Turkmenistan' },
  { code: '+994', country: 'Azerbaijan' },
  { code: '+995', country: 'Georgia' },
  { code: '+996', country: 'Kyrgyzstan' },
  { code: '+998', country: 'Uzbekistan' },
];

const selectClasses = 'bg-neutral-900 text-white border-neutral-800';

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [success, setSuccess] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setSubmissionError('');
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    const age = Number(form.age);

    if (!form.full_name.trim()) nextErrors.full_name = 'Please enter your full name.';
    if (!form.age) nextErrors.age = 'Please enter your age.';
    else if (!Number.isInteger(age) || age < 18) nextErrors.age = 'You must be 18 or older.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!form.country.trim()) nextErrors.country = 'Please enter your country.';
    if (!form.primary_goal || form.primary_goal === '__placeholder__') nextErrors.primary_goal = 'Please select your primary goal.';
    if (!form.contact_details.trim()) nextErrors.contact_details = 'Please enter your contact details.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildContactDetails = (): string => {
    if (form.contact_method === 'WhatsApp') return `'${form.dial_code} ${form.contact_details.trim()}`;
    if (form.contact_method === 'Telegram') return `@${form.contact_details.trim().replace(/^@/, '')}`;
    return form.contact_details.trim();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmissionError('');

    try {
      const response = await fetch('https://sheetdb.io/api/v1/0jk4gjrknstw4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            full_name: form.full_name.trim(),
            age: form.age,
            country: form.country.trim(),
            email: form.email.trim(),
            contact_method: form.contact_method,
            contact_details: buildContactDetails(),
            primary_goal: form.primary_goal,
          },
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      setSuccess(true);
    } catch {
      setSubmissionError('We could not send your application. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase = 'w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 transition-all duration-200 outline-none focus:border-white/40 focus:bg-white/[0.05]';
  const inputBorder = (field: keyof FormState) => errors[field] ? 'border-red-400/60' : 'border-white/10';
  const labelBase = 'block text-xs font-medium tracking-wide uppercase text-white/50 mb-2';
  const selectProps = { style: { colorScheme: 'dark' as const } };

  if (success) {
    return (
      <section id="application" className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-16 px-6 border border-white/10 rounded-2xl bg-white/[0.01] animate-fade-in">
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-8">
              <Check className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Application Received</h3>
            <p className="text-white/50 font-light max-w-md leading-relaxed">
              Thank you for applying. Our team will review your application and reach out to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application" className="py-10 sm:py-32 px-6 bg-jet-black border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">09</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="font-extrabold tracking-tight leading-[1.05] mb-4 text-center" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic' }}>
          Apply Now
        </h2>
        <p className="text-center text-white/50 font-light mb-6 max-w-md mx-auto">
          You are one step away from your success.<br />Fill out the form below or reach out to us via WhatsApp.
        </p>
        <div className="flex justify-center mb-12">
          <CTAButton
            label="Apply on WhatsApp"
            href="https://wa.me/message/CCNVZVWNKGFPA1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs"
          />
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label className={labelBase} htmlFor="full_name">Full Name</label>
            <input id="full_name" type="text" value={form.full_name} onChange={(event) => update('full_name', event.target.value)} placeholder="e.g. Jane Doe" className={`${inputBase} ${inputBorder('full_name')}`} />
            {errors.full_name && <p className="mt-1.5 text-xs text-red-400">{errors.full_name}</p>}
          </div>

          <div>
            <label className={labelBase} htmlFor="age">Age <span className="text-white/30 normal-case font-normal">(Must be 18+)</span></label>
            <input id="age" type="number" min={18} value={form.age} onChange={(event) => update('age', event.target.value)} placeholder="e.g. 21" className={`${inputBase} ${inputBorder('age')}`} />
            {errors.age && <p className="mt-1.5 text-xs text-red-400">{errors.age}</p>}
          </div>

          <div>
            <label className={labelBase} htmlFor="email">Email</label>
            <input id="email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="youremail@example.com" className={`${inputBase} ${inputBorder('email')}`} />
            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label className={labelBase} htmlFor="country">Country</label>
            <input id="country" type="text" value={form.country} onChange={(event) => update('country', event.target.value)} placeholder="e.g. United States" className={`${inputBase} ${inputBorder('country')}`} />
            {errors.country && <p className="mt-1.5 text-xs text-red-400">{errors.country}</p>}
          </div>

          <div>
            <label className={labelBase} htmlFor="primary_goal">Primary Goal</label>
            <select id="primary_goal" value={form.primary_goal} onChange={(event) => update('primary_goal', event.target.value)} className={`${inputBase} ${selectClasses} ${inputBorder('primary_goal')} appearance-none cursor-pointer`} {...selectProps}>
              <option className={selectClasses} value="__placeholder__" disabled hidden>Select</option>
              <option className={selectClasses} value="Looking for something short-term">Looking for something short-term</option>
              <option className={selectClasses} value="Build serious income in the long-run">Build serious income in the long-run</option>
              <option className={selectClasses} value="I'm a creator ready to scale">I'm a creator ready to scale</option>
            </select>
            {errors.primary_goal && <p className="mt-1.5 text-xs text-red-400">{errors.primary_goal}</p>}
          </div>

          <div>
            <label className={labelBase} htmlFor="contact_method">Contact details</label>
            <select id="contact_method" value={form.contact_method} onChange={(event) => update('contact_method', event.target.value as ContactMethod)} className={`${inputBase} ${selectClasses} appearance-none cursor-pointer`} {...selectProps}>
              <option className={selectClasses} value="" disabled hidden>Select</option>
              <option className={selectClasses} value="WhatsApp">WhatsApp</option>
              <option className={selectClasses} value="Telegram">Telegram</option>
              <option className={selectClasses} value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className={labelBase} htmlFor="contact_details">
              {form.contact_method === 'WhatsApp' ? 'WhatsApp Number (Please select the country code before the number +)' : form.contact_method === 'Telegram' ? 'Telegram Username' : <br />}
            </label>
            {form.contact_method === 'WhatsApp' && (
              <div className="flex gap-3">
                <select value={form.dial_code} onChange={(event) => update('dial_code', event.target.value)} className={`${inputBase} ${selectClasses} appearance-none cursor-pointer !w-[112px] !min-w-0 shrink-0 overflow-hidden`} style={{ ...selectProps.style, width: '112px', minWidth: '112px', maxWidth: '112px', flex: '0 0 112px', textOverflow: 'clip' }} aria-label="WhatsApp country code">
                  {dialCodes.map(({ code, country }) => <option className={selectClasses} key={`${code}-${country}`} value={code}>{code} ({country === 'United States' ? 'USA' : country.includes(' ') ? country.split(/\s+/).map((word) => word[0]).join('').slice(0, 3).toUpperCase() : country.slice(0, 2).toUpperCase()})</option>)}
                </select>
                <input id="contact_details" type="tel" value={form.contact_details} onChange={(event) => update('contact_details', event.target.value)} placeholder="Type your number" className={`${inputBase} ${inputBorder('contact_details')}`} />
              </div>
            )}
            {form.contact_method === 'Telegram' && (
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">@</span>
                <input id="contact_details" type="text" value={form.contact_details} onChange={(event) => update('contact_details', event.target.value)} placeholder="username" className={`${inputBase} ${inputBorder('contact_details')} pl-8`} />
              </div>
            )}
            {form.contact_method === 'Other' && <input id="contact_details" type="text" value={form.contact_details} onChange={(event) => update('contact_details', event.target.value)} placeholder="e.g. Instagram: @username, email, etc..." className={`${inputBase} ${inputBorder('contact_details')}`} />}
            {errors.contact_details && <p className="mt-1.5 text-xs text-red-400">{errors.contact_details}</p>}
          </div>

          {submissionError && <p className="text-sm text-red-400 text-center" role="alert">{submissionError}</p>}

          <div className="pt-4">
            <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full bg-white text-black hover:bg-white/90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100">
              {submitting ? <><Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} /> Submitting...</> : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
