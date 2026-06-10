// Decorative Indian-heritage SVG ornaments used across the site
export function MotifDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <svg width="42" height="22" viewBox="0 0 42 22" fill="none" className="text-gold">
        <path d="M21 1 L24 9 L33 9 L26 14 L29 22 L21 17 L13 22 L16 14 L9 9 L18 9 Z" fill="currentColor" opacity="0.85" />
        <circle cx="3" cy="11" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="39" cy="11" r="2" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}

export function MotifMandala({ className = "", size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.8">
      <circle cx="50" cy="50" r="46" />
      <circle cx="50" cy="50" r="34" />
      <circle cx="50" cy="50" r="22" />
      <circle cx="50" cy="50" r="10" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 50 + Math.cos(a) * 10;
        const y1 = 50 + Math.sin(a) * 10;
        const x2 = 50 + Math.cos(a) * 46;
        const y2 = 50 + Math.sin(a) * 46;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4 + Math.PI / 8;
        const cx = 50 + Math.cos(a) * 28;
        const cy = 50 + Math.sin(a) * 28;
        return <circle key={i} cx={cx} cy={cy} r="3" />;
      })}
    </svg>
  );
}

export function MotifArch({ className = "" }) {
  return (
    <svg viewBox="0 0 120 160" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 158 L10 60 Q10 10 60 10 Q110 10 110 60 L110 158" />
      <path d="M20 158 L20 64 Q20 22 60 22 Q100 22 100 64 L100 158" opacity="0.6" />
      <circle cx="60" cy="60" r="4" />
    </svg>
  );
}
