import { ArrowRight, Check, Mail } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { Container, Logo, WhatsAppIcon } from "./ui";
import { Reveal } from "./Reveal";
import { PaymentChips } from "./Pricing";

export function FinalCTA() {
  return (
    <section className="section-glow-left px-4 py-12 sm:py-16">
      <Reveal className="mx-auto max-w-[1200px]">
        <div className="border-line-hi relative overflow-hidden rounded-[28px] border bg-[radial-gradient(55%_75%_at_50%_0%,rgb(225_29_72/0.22),transparent_70%),linear-gradient(135deg,#101015_0%,#170a10_55%,#24070f_100%)] px-6 py-14 text-center shadow-[0_30px_80px_-45px_rgb(225_29_72/0.6)] sm:px-12 sm:py-20">
          <h2 className="font-display text-[32px] leading-tight font-extrabold tracking-[-0.035em] text-balance sm:text-5xl">
            ¿Listo para empezar con <span className="text-accent">{site.name}</span>?
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-lg sm:text-lg">
            Elige tu plan, contacta por WhatsApp y recibe ayuda para configurarlo en tu dispositivo.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#planes" className="btn-anim btn-gold inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl px-9 py-4 text-lg font-bold">
              Ver planes <ArrowRight className="size-4" />
            </a>
            <a
              href={waLink("Hola MADDTV, tengo una pregunta:")}
              target="_blank"
              rel="noopener"
              className="btn-anim inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-9 py-4 text-lg font-bold hover:border-white/40 hover:bg-white/5"
            >
              <WhatsAppIcon className="text-wa size-5" /> Hacer una pregunta
            </a>
          </div>
          <ul className="text-muted mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-x-5 gap-y-2">
            {["Pago por periodo", "Sin renovación automática", "Soporte oficial"].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Check className="text-brand size-4" /> {t}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

const cols = [
  {
    t: "Navegación",
    l: [["Contenido", "/#contenido"], ["Deporte", "/#deporte"], ["Beneficios", "/#beneficios"], ["Planes", "/#planes"], ["Dispositivos", "/#dispositivos"], ["FAQ", "/#faq"]],
  },
  {
    t: "Guías",
    l: [[`Guías ${site.name}`, "/#guias"], ["Mejor IPTV España", "/#guias"], ["Guía de instalación", "/#guias"], ["Fútbol en directo", "/#deporte"], [`${site.name} España`, "/"], ["Dispositivos compatibles", "/#dispositivos"]],
  },
  {
    t: "Información",
    l: [["Política de reembolso", "/politica-de-reembolso"], ["Política de privacidad", "/politica-de-privacidad"], ["Términos y condiciones", "/terminos-y-condiciones"], ["Copyright y DMCA", "/copyright-y-dmca"]],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050608] pt-16 pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="text-muted mt-5 max-w-sm leading-relaxed">
              Ofrecemos los mejores servicios de IPTV. Nuestro servicio es sencillo, rápido y fiable. Disfruta de tus canales
              favoritos en cualquier dispositivo, estés donde estés.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <h4 className="text-sm font-extrabold tracking-wider uppercase">{c.t}</h4>
              <ul className="mt-5 space-y-3">
                {c.l.map(([label, href]) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="bg-brand size-1.5 rounded-full" />
                    <a href={href} className="text-muted transition-colors duration-200 hover:text-brand-2">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-sm">
          <h4 className="text-sm font-extrabold tracking-wider uppercase">Contacto</h4>
          <a
            href={waLink("Hola MADDTV 👋")}
            target="_blank"
            rel="noopener"
            className="btn-anim border-line bg-card mt-4 flex items-center gap-3 rounded-xl border p-3 font-bold hover:border-line-hi"
          >
            <span className="bg-wa grid size-8 place-items-center rounded-lg"><WhatsAppIcon className="size-4" /></span>
            {site.whatsappDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="border-line bg-card mt-3 flex items-center gap-3 rounded-xl border p-3 font-semibold text-white/85 transition-colors duration-200 hover:border-line-hi hover:text-white">
            <span className="bg-brand/12 text-brand grid size-8 place-items-center rounded-lg"><Mail className="size-4" /></span>
            {site.email}
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/[0.06] pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm">© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <PaymentChips small />
        </div>
      </Container>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hola MADDTV 👋 Quiero información")}
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
      className="bg-wa fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full shadow-xl shadow-green-900/40 transition hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <span className="bg-wa absolute inset-0 -z-10 animate-ping rounded-full opacity-30" />
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
