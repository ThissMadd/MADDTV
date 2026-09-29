import { ShieldCheck, Sparkles, Trophy, Zap } from "lucide-react";
import { site } from "@/lib/site";

// Pósters del hero: archivos en public/hero/1.webp … 12.webp
const heroPosters = Array.from({ length: 12 }, (_, i) => `/hero/${i + 1}.webp`);
import { Container, Icon, TrustpilotLogo, TrustpilotStars } from "./ui";
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
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_45%,rgb(225_29_72/0.14),transparent)]" />
      <div className="mask-y relative grid h-full grid-cols-3 gap-3 p-3 sm:gap-4 sm:p-6">
        <PosterColumn srcs={heroPosters.slice(0, 4)} dir="up" />
        <PosterColumn srcs={heroPosters.slice(4, 8)} dir="down" className="-mt-24" />
        <PosterColumn srcs={heroPosters.slice(8, 12)} dir="up" className="-mt-10" />
      </div>
      <span className="absolute top-[18%] right-3 rounded-2xl border border-gold/40 bg-[#0e1015]/90 px-4 py-3 text-[11px] font-extrabold tracking-[0.15em] text-gold shadow-xl backdrop-blur-md sm:right-6 sm:px-6 sm:py-4 sm:text-sm">
        4K · 8K ULTRA HD
      </span>
      <span className="absolute bottom-[16%] left-3 flex items-center gap-2 rounded-2xl border border-brand/50 bg-[#0e1015]/90 px-4 py-3 text-[11px] font-extrabold tracking-[0.15em] shadow-xl backdrop-blur-md sm:left-0 sm:px-6 sm:py-4 sm:text-sm">
        <span className="bg-brand-2 live-dot size-2.5 rounded-full" /> EN DIRECTO AHORA
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-10 sm:pt-16 lg:pb-14">
      <div className="absolute inset-0 -z-20 bg-[#08090c]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(38%_50%_at_76%_42%,rgb(225_29_72/0.16),transparent_70%),radial-gradient(22%_30%_at_96%_85%,rgb(190_18_60/0.12),transparent_70%),radial-gradient(30%_35%_at_0%_15%,rgb(225_29_72/0.05),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(180deg,#000,transparent_80%)]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-extrabold tracking-[0.18em] sm:text-xs">
                <span className="bg-brand live-dot size-2 rounded-full" /> IPTV PREMIUM · ACTIVACIÓN EN MINUTOS
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display mt-6 text-[clamp(32px,10.6vw,44px)] leading-[1.02] font-extrabold tracking-[-0.04em] sm:text-7xl lg:text-[62px] xl:text-[74px]">
                Todo tu entretenimiento.
                <br />
                <span className="text-accent">En un solo lugar.</span>
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
              <a href="#planes" className="btn-gold btn-anim inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl px-10 py-4 text-lg font-bold">
                <Sparkles className="size-4" /> Ver Planes
              </a>
              <a href="#deporte" className="pill btn-anim inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold">
                <Trophy className="size-4" /> Ver deportes
              </a>
            </Reveal>

            {site.rating && (
              <Reveal delay={0.2} className="mt-6">
                <div className="inline-flex max-w-full flex-wrap items-center gap-x-8 gap-y-2 rounded-2xl border border-line bg-card px-5 py-4 sm:px-6">
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
                <ShieldCheck className="text-brand size-4" /> {site.guaranteeDays} días de garantía
              </span>
              <span className="pill inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold">
                <Zap className="text-brand size-4" /> Activación en minutos
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <PosterWall />
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-[#10131a] lg:grid-cols-4 [&>div]:transition-colors [&>div:hover]:bg-white/[0.02]">
            {site.heroStats.map((s, i) => (
              <div
                key={s.l}
                className={`border-line px-4 py-7 text-center sm:py-9 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}
              >
                <Icon name={s.i} className="text-brand mx-auto mb-3 size-6" />
                <div className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-[40px]">{s.v}</div>
                <div className="text-muted mt-1 text-xs font-semibold sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
