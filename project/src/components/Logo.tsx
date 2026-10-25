type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span
        className="font-extrabold tracking-tight leading-none"
        style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
      >
        mini<span className="font-light italic">cookies</span>
      </span>
      <span className="mt-2 text-[0.6rem] sm:text-xs tracking-[0.4em] uppercase font-medium text-white/50">
        Webcam Agency
      </span>
    </div>
  );
}
