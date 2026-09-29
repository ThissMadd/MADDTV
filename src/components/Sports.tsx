"use client";

import { useEffect, useState } from "react";
import { Monitor, ShieldCheck, Zap } from "lucide-react";
import { Container, Heading } from "./ui";
import { Reveal } from "./Reveal";
import { LogoCard, Marquee } from "./Marquee";
import { PosterFan } from "./PosterFan";

function useCountdown() {
  const [t, setT] = useState<[string, string, string]>(["--", "--", "--"]);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      const s = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
      const p = (n: number) => String(n).padStart(2, "0");
      setT([p(Math.floor(s / 3600)), p(Math.floor((s % 3600) / 60)), p(s % 60)]);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function Countdown() {
  const [h, m, s] = useCountdown();
  return (
    <div className="text-center">
      <p className="text-muted text-[11px] font-extrabold tracking-[0.2em]">LA OFERTA TERMINA EN</p>
      <div className="mt-3 flex justify-center gap-2.5">
        {[[h, "HORAS"], [m, "MIN"], [s, "SEG"]].map(([v, l]) => (
          <div key={l} className="border-line w-[72px] rounded-2xl border bg-[#0e1015]/85 py-2.5 backdrop-blur">
            <div className="font-display text-3xl font-extrabold tabular-nums">{v}</div>
            <div className="text-muted mt-0.5 text-[10px] font-bold tracking-wider">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Pósters de la banda: archivos en public/sports/row/01.webp … 12.webp
const sportPosters = Array.from({ length: 12 }, (_, i) => `/sports/row/${String(i + 1).padStart(2, "0")}.webp`);

// Logos de competiciones: archivos en public/sports/logos/01.webp … 11.webp
const sportLogos = Array.from({ length: 11 }, (_, i) => `/sports/logos/${String(i + 1).padStart(2, "0")}.webp`);

function SportImageRow() {
  const list = [...sportPosters, ...sportPosters];
  return (
    <div className="mask-x overflow-hidden pt-4 pb-2">
      <div className="marquee-left flex w-max gap-3 sm:gap-4">
        {list.map((src, i) => (
          <div key={i} className="poster-card border-line h-[200px] w-[150px] shrink-0 overflow-hidden rounded-2xl border sm:h-[266px] sm:w-[178px]">
            <img src={src} alt="" loading="lazy" className="size-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Sports() {
  return (
    <section id="deporte" className="section-glow-left overflow-hidden py-12 sm:py-16">
      <Container>
        <Heading
          eyebrow="Deporte en directo"
          icon="trophy"
          title={<>Fútbol en directo: Champions,<br className="hidden sm:block" /> fútbol español y más</>}
          text="Partidos, competiciones europeas y eventos de fútbol con calidad adaptada a tu conexión y dispositivo."
        />
      </Container>

      <div className="mx-auto mt-12 max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <div className="border-line relative overflow-hidden rounded-[24px] border shadow-[0_30px_70px_-40px_rgb(225_29_72/0.45)]">
            <img src="/sports/champions-bg.webp" alt="" className="absolute inset-0 size-full object-cover object-[30%_center]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/92 via-[#08090c]/60 to-[#08090c]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090c]/70 via-transparent to-[#08090c]/30" />
            <div className="absolute inset-0 bg-[radial-gradient(38%_60%_at_80%_45%,rgb(225_29_72/0.16),transparent_70%)]" />
            <div className="relative grid items-center gap-10 p-6 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-extrabold tracking-wider sm:text-xs">
                  <span aria-hidden>⚽</span> Champions League · Fútbol español · MADDTV
                </span>
                <h3 className="font-display mt-5 text-3xl leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-5xl">
                  Champions League
                  <br />
                  <span className="text-accent">y fútbol español en directo</span>
                </h3>
                <p className="mt-4 max-w-lg text-white/80">
                  Grandes competiciones europeas, fútbol español y partidos destacados en tus dispositivos compatibles.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold sm:text-sm">
                    <span className="bg-brand-2 live-dot size-2.5 rounded-full" /> Partidos y replays
                  </span>
                  <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold sm:text-sm">
                    <Monitor className="text-brand size-3.5" /> Todos los dispositivos
                  </span>
                  <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold sm:text-sm">
                    <Zap className="text-brand size-3.5" /> Activación rápida
                  </span>
                </div>
                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href="#planes" className="btn-anim btn-gold rounded-xl px-9 py-4 text-center text-lg font-bold">
                    Comprar ahora
                  </a>
                  <span className="text-muted flex items-center justify-center gap-1.5 text-sm">
                    <ShieldCheck className="size-4" /> Soporte oficial · Pago seguro
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <PosterFan
                  srcs={["/sports/clasico.webp", "/sports/laliga.webp", "/sports/campeones.webp"]}
                  spread={70}
                  tilt={8}
                  className="h-52 w-72"
                  cardClass="h-48 w-32 rounded-2xl border-2 border-white/25"
                />
                <Countdown />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-8 space-y-3 sm:space-y-4">
        <SportImageRow />
        <Marquee dir="right">{sportLogos.map((src) => <LogoCard key={src} src={src} />)}</Marquee>
      </div>
    </section>
  );
}
