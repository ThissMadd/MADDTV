// Piezas compartidas (sin "use client": se pueden usar en servidor y cliente)
import {
  Bike, Clapperboard, Clock, Crown, Flag, Globe, Grid2x2, Hand, Headset, Lock, MonitorPlay, Music2,
  Radio, RefreshCw, ShieldCheck, Smile, Sparkles, Star, Trophy, Tv, Volleyball, Zap, type LucideIcon,
} from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export const icons: Record<string, LucideIcon> = {
  ball: Volleyball, bike: Bike, clapper: Clapperboard, clock: Clock, crown: Crown, dribbble: Volleyball, flag: Flag,
  globe: Globe, grid: Grid2x2, hand: Hand, headset: Headset, lock: Lock, monitor: MonitorPlay,
  music: Music2, radio: Radio, refresh: RefreshCw, shield: ShieldCheck, smile: Smile, sparkles: Sparkles,
  star: Star, trophy: Trophy, tv: Tv, zap: Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = icons[name] ?? Sparkles;
  return <C className={className} />;
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98 1-3.63-.24-.37a9.82 9.82 0 0 1-1.5-5.24c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.03 6.96 2.88a9.78 9.78 0 0 1 2.88 6.96c0 5.42-4.41 9.83-9.85 9.83zm8.37-18.2A11.76 11.76 0 0 0 12.04.13C5.5.13.17 5.46.17 12c0 2.09.55 4.13 1.59 5.93L.07 24l6.22-1.63a11.84 11.84 0 0 0 5.75 1.46h.01c6.54 0 11.87-5.33 11.87-11.87 0-3.17-1.23-6.15-3.47-8.39z" />
    </svg>
  );
}

// Enlace normal (no Link de Next): al hacer clic recarga la web completa
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" aria-label={site.name} className={`logo-link flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="size-9" aria-hidden>
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fb315b" />
            <stop offset="1" stopColor="#be123c" />
          </linearGradient>
        </defs>
        <path d="M4 12c6-7 14-7 20 0" stroke="url(#lg)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M14 14v20l18-10z" fill="none" stroke="url(#lg)" strokeWidth="3.5" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight">
        MADD<span className="text-brand">TV</span>
      </span>
    </a>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ icon, children }: { icon?: string; children: React.ReactNode }) {
  return (
    <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-white/90 uppercase sm:text-xs">
      {icon ? <Icon name={icon} className="text-brand size-3.5" /> : <span className="bg-brand live-dot size-1.5 rounded-full" />}
      {children}
    </span>
  );
}

export function Heading({
  eyebrow, icon, title, text,
}: { eyebrow: string; icon?: string; title: React.ReactNode; text?: React.ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2 className="font-display mt-4 text-[32px] leading-[1.08] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl">
        {title}
      </h2>
      {text && <p className="text-muted mx-auto mt-4 max-w-2xl text-base text-pretty sm:text-lg">{text}</p>}
    </Reveal>
  );
}

export function Stars({ className = "size-6" }: { className?: string }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`grid place-items-center rounded-[3px] bg-[#00b67a] ${className}`}>
          <Star className="size-[70%] fill-white text-white" />
        </span>
      ))}
    </span>
  );
}

// Estrella de Trustpilot (logo) y fila de estrellas verdes
export function TrustpilotLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-1 font-sans font-semibold tracking-tight ${className}`}>
      <svg viewBox="0 0 24 24" className="size-[1.3em] fill-[#00b67a]" aria-hidden>
        <path d="M12 1.5l2.9 7.6 8.1.2-6.4 5 2.3 7.8L12 17.6l-6.9 4.5 2.3-7.8-6.4-5 8.1-.2z" />
      </svg>
      Trustpilot
    </span>
  );
}

export function TrustpilotStars({ className = "size-7" }: { className?: string }) {
  return (
    <span className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`grid place-items-center bg-[#00b67a] ${className}`}>
          <Star className="size-[72%] fill-white text-white" strokeWidth={0} />
        </span>
      ))}
    </span>
  );
}
