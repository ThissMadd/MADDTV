import { PlayCircle, ShieldCheck, Sparkles, Trophy, Zap } from "lucide-react";
import { site } from "@/lib/site";

// Pósters del hero: archivos en public/hero/1.webp … 12.webp
const heroPosters = Array.from({ length: 12 }, (_, i) => `/hero/${i + 1}.webp`);
import { Container, TrustpilotLogo, TrustpilotStars } from "./ui";
import { Reveal } from "./Reveal";

function PosterColumn({ srcs, dir, className = "" }: { srcs: string[]; dir: "up" | "down"; className?: string }) {
  const list = [...srcs, ...srcs];
  return (
    <div className={`flex flex-col gap-4 ${dir === "up" ? "scroll-up" : "scroll-down"} ${className}`}>
      {list.map((src, i) => (
        <div key={i} className="aspect-[2/3] shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/40">
          <img src={src} alt="" loading={i < 4 ? "eager" : "lazy"} className="size-full object-cover" />
        </div>
      ))}
    </div>
  );
}

function PosterWall() {
  return (
    <div className="card relative h-[440px] overflow-hidden rounded-[32px] sm:h-[560px] lg:h-[700px]">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_40%,#5b21b655,transparent)]" />
      <div className="mask-y relative grid h-full grid-cols-3 gap-3 p-3 sm:gap-4 sm:p-6">
        <PosterColumn srcs={heroPosters.slice(0, 4)} dir="up" />
        <PosterColumn srcs={heroPosters.slice(4, 8)} dir="down" className="-mt-24" />
        <PosterColumn srcs={heroPosters.slice(8, 12)} dir="up" className="-mt-10" />
      </div>
      <span className="absolute top-[18%] right-3 rounded-2xl border border-white/10 bg-[#140e33]/90 px-4 py-3 text-[11px] font-extrabold tracking-[0.15em] shadow-xl backdrop-blur-md sm:right-6 sm:px-6 sm:py-4 sm:text-sm">
        4K · 8K ULTRA HD
      </span>
      <span className="absolute bottom-[16%] left-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#140e33]/90 px-4 py-3 text-[11px] font-extrabold tracking-[0.15em] shadow-xl backdrop-blur-md sm:left-0 sm:px-6 sm:py-4 sm:text-sm">
        <span className="bg-brand-2 size-2.5 animate-pulse rounded-full" /> EN DIRECTO AHORA
      </span>
    </div>
  );
}

const stats = [
  { v: site.stats.channels, l: "Canales globales" },
  { v: site.stats.vod, l: "Películas y series" },
  { v: "HD/4K", l: "Calidad compatible" },
  { v: "Soporte", l: "Ayuda por WhatsApp" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-10 sm:pt-16 lg:pb-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_0%_30%,#3a2a1044,transparent),radial-gradient(60%_70%_at_85%_40%,#4c1d9555,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(180deg,#000,transparent_80%)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-extrabold tracking-[0.18em] sm:text-xs">
                <Zap className="size-3.5" /> IPTV PREMIUM · ACTIVACIÓN EN MINUTOS
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display mt-6 text-[44px] leading-[0.98] font-extrabold tracking-[-0.04em] sm:text-7xl lg:text-[84px]">
                IPTV ESPAÑA:
                <br />
                la mejor suscripción de IPTV para <span className="text-brand-2">España</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-muted mt-7 max-w-[620px] text-lg leading-relaxed sm:text-[22px] sm:leading-[1.75]">
                {site.name} ofrece una <b className="text-white">suscripción IPTV España</b> con televisión online, deporte,
                fútbol, películas y series en un único servicio. <b className="text-white">+{site.stats.channels.replace("+", "")} canales</b> y{" "}
                <b className="text-white">+{site.stats.vod.replace("+", "")} películas y series</b> en calidad hasta 4K, sin antena,
                sin permanencia y sin cuotas mensuales.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#planes" className="btn-gold btn-anim inline-flex items-center justify-center gap-2 rounded-xl px-10 py-4 text-lg font-bold">
                <Sparkles className="size-4" /> Ver planes
              </a>
              <a href="#deporte" className="pill btn-anim inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold">
                <Trophy className="size-4" /> Ver deportes
              </a>
            </Reveal>

            {site.rating && (
              <Reveal delay={0.2} className="mt-6">
                <div className="inline-flex items-center gap-8 rounded-3xl border border-white/15 bg-[#0c0822]/80 px-6 py-4">
                  <div>
                    <TrustpilotLogo className="text-[22px]" />
                    <div className="mt-1.5"><TrustpilotStars /></div>
                    <div className="mt-1.5 text-xs text-white/80">
                      TrustScore {site.rating.score} <span className="text-white/40">|</span> {site.rating.count} reviews
                    </div>
                  </div>
                  <span className="font-display text-lg font-bold">Excelente</span>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.25} className="mt-6 flex flex-wrap gap-3">
              <span className="pill inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold">
                <ShieldCheck className="text-brand-light size-4" /> {site.guaranteeDays} días de garantía
              </span>
              <span className="pill inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold">
                <PlayCircle className="text-brand-light size-4" /> Prueba en 1 minuto
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <PosterWall />
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="card grid grid-cols-2 overflow-hidden rounded-3xl lg:grid-cols-4 [&>div]:transition-colors [&>div:hover]:bg-[#7c3aed1f]">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`border-line px-4 py-7 text-center sm:py-9 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}
              >
                <div className="font-display text-num text-3xl font-extrabold tracking-tight sm:text-[44px]">{s.v}</div>
                <div className="mt-1 text-xs font-semibold sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
