import { Check, X } from "lucide-react";
import { catalog, comparison, steps, why } from "@/lib/content";
import { site } from "@/lib/site";
import { Container, Heading, Icon } from "./ui";
import { Reveal } from "./Reveal";

export function Catalog() {
  return (
    <section className="section-glow py-12 sm:py-16">
      <Container>
        <Heading
          eyebrow="Catálogo"
          icon="grid"
          title={<>Canales TV, deporte,<br />películas y series</>}
          text="De partidos en directo a cine, series y contenido familiar: todo organizado en una sola experiencia."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {catalog.map((c, i) => (
            <Reveal key={c.t} delay={(i % 5) * 0.05} className="h-full">
              <div className="card plan-card group h-full rounded-3xl p-5 sm:p-6">
                <span className="grid size-12 place-items-center rounded-xl border border-[#3b2d7a] bg-[#1c1447] transition group-hover:scale-110">
                  <Icon name={c.i} className="text-brand-2 size-5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-extrabold tracking-tight">{c.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/80">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Why() {
  return (
    <section id="beneficios" className="section-glow-left py-12 sm:py-16">
      <Container>
        <Heading
          eyebrow={`Por qué ${site.name}`}
          icon="star"
          title={`Por qué elegir ${site.name}`}
          text="Una experiencia pensada para instalar rápido, usar en varios dispositivos y recibir soporte cuando lo necesites."
        />
        <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.t} delay={(i % 3) * 0.07} className="h-full">
              <div className="card plan-card h-full rounded-3xl p-7 sm:p-8">
                <span className="btn-brand grid size-14 place-items-center rounded-2xl">
                  <Icon name={w.i} className="size-6" />
                </span>
                <h3 className="font-display mt-6 text-xl font-extrabold tracking-tight">{w.t}</h3>
                <p className="mt-3 leading-relaxed text-white/80">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Steps() {
  return (
    <section className="section-glow py-12 sm:py-16">
      <Container>
        <Heading
          eyebrow="En 3 pasos"
          icon="zap"
          title={`Cómo recibir y activar ${site.name}`}
          text="Sin equipos complicados: elige plan, recibe instrucciones e instala en tu dispositivo."
        />
        <div className="relative mt-12 grid gap-5 md:grid-cols-3 md:gap-7">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1} className="relative h-full">
              {i < steps.length - 1 && (
                <span className="absolute top-14 -right-7 hidden h-px w-7 bg-gradient-to-r from-white/60 to-transparent md:block" />
              )}
              <div className="card plan-card h-full rounded-3xl p-7 sm:p-8">
                <span className="btn-brand font-display grid size-12 place-items-center rounded-xl text-xl font-extrabold">{i + 1}</span>
                <h3 className="font-display mt-6 text-xl font-extrabold tracking-tight">{s.t}</h3>
                <p className="mt-3 leading-relaxed text-white/80">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Compare() {
  return (
    <section className="section-glow-left py-12 sm:py-16">
      <Container>
        <Heading
          eyebrow="Comparativa"
          icon="grid"
          title={`${site.name} frente a la TV tradicional`}
          text="Una experiencia flexible para ver contenido desde dispositivos compatibles."
        />
        <Reveal className="mt-12">
          <div className="border-line overflow-hidden rounded-3xl border">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#120d2a] text-xs font-bold tracking-wide uppercase sm:text-sm">
                    <th className="text-muted px-4 py-4 sm:px-5">Criterio</th>
                    <th className="text-brand-light px-4 py-4 sm:px-5">{site.name}</th>
                    <th className="text-muted px-4 py-4 sm:px-5">TV tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r) => (
                    <tr key={r.c} className="border-line border-t">
                      <td className="bg-[#07051a] px-4 py-4 font-semibold text-white/85 sm:px-5">{r.c}</td>
                      <td className="bg-[#120b33] px-4 py-4 font-bold sm:px-5">
                        <span className="flex items-center gap-2.5"><Check className="text-brand-light size-4 shrink-0" /> {r.us}</span>
                      </td>
                      <td className="text-muted bg-[#07051a] px-4 py-4 sm:px-5">
                        <span className="flex items-center gap-2.5">{r.bad && <X className="size-4 shrink-0 opacity-70" />} {r.them}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// Logos de dispositivos en blanco: public/devices/01.webp … 21.webp
const deviceLogos = Array.from({ length: 21 }, (_, i) => `/devices/${String(i + 1).padStart(2, "0")}.webp`);

export function Devices() {
  return (
    <section id="dispositivos" className="section-glow py-12 sm:py-16">
      <Container>
        <Heading
          eyebrow="Compatibilidad"
          icon="monitor"
          title="Compatible con tus pantallas"
          text="Smart TV, Android TV, Fire TV, móviles, tablets, ordenadores y reproductores compatibles."
        />
        <div className="mt-12 grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3.5 lg:grid-cols-7">
          {deviceLogos.map((src, i) => (
            <Reveal key={src} delay={(i % 7) * 0.03}>
              <div className="card logo-tile flex h-[72px] items-center justify-center rounded-2xl px-4 py-5 sm:h-[104px] sm:px-6 sm:py-7">
                <img src={src} alt="" loading="lazy" className="max-h-full max-w-full object-contain opacity-90" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
