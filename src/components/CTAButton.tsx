import { MessageCircle } from 'lucide-react';

type CTAButtonProps = {
  label: string;
  variant?: 'solid' | 'outline';
  withWhatsApp?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  color?: 'white' | 'pink' | 'whatsapp';
};

const colorStyles: Record<NonNullable<CTAButtonProps['color']>, string> = {
  white: 'bg-white text-black hover:bg-white/90',
  pink: 'bg-[#ff1493] text-black hover:bg-[#ff1493]/90',
  whatsapp: 'bg-[#25d366] text-black hover:bg-[#25d366]/90',
};

export default function CTAButton({
  label,
  variant = 'solid',
  withWhatsApp = false,
  className = '',
  href,
  target,
  rel,
  color = 'white',
}: CTAButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full';
  const styles =
    variant === 'solid'
      ? `${colorStyles[color]} hover:scale-[1.02] active:scale-[0.98]`
      : 'border border-white/30 text-white hover:border-white hover:bg-white/5';

  const content = (
    <>
      {withWhatsApp && (
        <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
      )}
      {label}
    </>
  );

  if (href) {
    return <a href={href} target={target} rel={rel} className={`${base} ${styles} ${className}`}>{content}</a>;
  }

  return <button className={`${base} ${styles} ${className}`}>{content}</button>;
}
