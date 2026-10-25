import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-jet-black border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <Logo className="scale-75" />
        <p className="text-xs text-white/30 tracking-wider text-center max-w-md leading-relaxed">
          All models must be 18+. Privacy guaranteed. <br />No contracts. No lock-in.
          <br />
          Earnings are not guaranteed and depend on individual effort and commitment.
        </p>
        <p className="text-xs text-white/20">© 2026 mini cookies. All rights reserved.</p>
      </div>
    </footer>
  );
}
