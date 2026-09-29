import { Quote } from "lucide-react";
import { guideCards, reviews, trust } from "@/lib/content";
import { site } from "@/lib/site";
import { Container, Heading, Icon, Stars, TrustpilotLogo, TrustpilotStars } from "./ui";
import { Reveal } from "./Reveal";

export function Reviews() {
  const list = [...reviews, ...reviews];
  return (
    <section id="opiniones" className="section-glow overflow-hidden py-12 sm:py-16">
      <Container>
        {site.rating && (
          <Reveal className="mb-6 flex justify-center">
            <div className="pill inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full px-5 py-2.5 text-sm font-bold">
              <TrustpilotLogo />
              <span>Excelente</span>
              <TrustpilotStars className="size-5" />
              <span>{site.rating.score}/5</span>
            </div>
          </Reveal>
        )}
        <Heading
          eyebrow="Opiniones de clientes"
          icon="star"
          title={<>Lo que dicen los<br />clientes sobre <span className="text-accent">{site.name}</span></>}
          text="Opiniones de usuarios en España sobre instalación rápida, soporte en español, estabilidad y uso diario en Smart TV, Android TV, Fire TV y móvil."
        />
      </Container>

      <div className="mask-x mx-auto mt-8 max-w-[1320px] overflow-hidden pt-4 pb-4">
        <div className="marquee-left flex w-max gap-4 [animation-duration:60s] sm:gap-5">
          {list.map((r, i) => (
            <figure
              key={i}
              className="review-card card relative w-[300px] shrink-0 rounded-[20px] p-6 sm:w-[358px] sm:p-7"
            >
              <Quote className="text-brand/80 absolute top-6 right-6 size-7 fill-current" strokeWidth={0} />
              <Stars className="size-5 sm:size-6" />
              <blockquote className="mt-4 min-h-[72px] leading-relaxed font-medium text-white">{r.t}</blockquote>
              <div className="border-line bg-card-2 mt-4 rounded-2xl border p-2">
                <img src={r.img} alt="" loading="lazy" className="aspect-video w-full rounded-xl object-cover" />
              </div>
              <figcaption className="border-line mt-6 border-t pt-5">
                <div className="font-display text-lg font-extrabold">{r.n}</div>
                <div className="text-muted text-sm">{r.c} · Opinión verificada</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Container className="mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {trust.map((t, i) => (
            <Reveal key={t.t} delay={i * 0.06} className="h-full">
              <div className="card plan-card h-full rounded-3xl p-6 sm:p-7">
                <span className="border-line bg-card-2 grid size-12 place-items-center rounded-xl border">
                  <Icon name={t.i} className="text-brand size-5" />
                </span>
                <h3 className="font-display mt-4 text-lg font-extrabold tracking-tight">{t.t}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Guides() {
  return (
    <section id="guias" className="section-glow-left py-12 sm:py-16">
      <Container>
        <Heading
          eyebrow="Guías y enlaces"
          title={`Guías ${site.name}`}
          text="Enlaces internos para instalación, dispositivos, deportes y soporte."
        />

        <Reveal className="mt-12">
          <div className="border-line grid gap-10 rounded-[24px] border bg-[radial-gradient(55%_60%_at_0%_100%,rgb(225_29_72/0.07),transparent),#14161d] p-6 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div>
              <span className="pill inline-block rounded-full px-3 py-1.5 text-xs font-bold">IPTV ESPAÑA</span>
              <h3 className="font-display mt-5 text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-[52px]">
                La suscripción IPTV completa para España
              </h3>
              <p className="mt-5 font-bold">{site.name} es un servicio IPTV premium para España.</p>
              <p className="text-muted mt-1 text-lg leading-[1.8]">
                Con una sola <b className="text-white">suscripción IPTV</b>, puedes disfrutar de más de {site.stats.channels.replace("+", "")} canales de TV
                en directo, los mejores deportes y más de {site.stats.vod.replace("+", "")} películas y series en calidad de hasta 4K — en tu Smart
                TV, móvil, tablet, Firestick, Apple TV o PC. Tanto si buscas <b className="text-white">IPTV España</b>, una{" "}
                <b className="text-white">suscripción IPTV</b> fiable o simplemente el <b className="text-white">mejor IPTV</b> para toda la
                familia, con <b className="text-white">{site.name}</b> lo tienes todo en un solo lugar.
              </p>
              <a href="#planes" className="btn-anim btn-brand mt-7 inline-block rounded-xl px-8 py-4 font-bold">
                Ver suscripciones
              </a>
            </div>

            <div className="grid content-center gap-4 sm:grid-cols-2">
              {guideCards.map((g) => (
                <div key={g.t} className="plan-card border-line bg-card-2 rounded-2xl border p-6">
                  <span className="border-brand/30 bg-brand/10 text-brand grid size-12 place-items-center rounded-xl border">
                    <Icon name={g.i} className="size-5" />
                  </span>
                  <h4 className="font-display mt-5 text-lg leading-tight font-extrabold tracking-tight">{g.t}</h4>
                  <p className="text-muted mt-3 text-[15px] leading-relaxed">{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
