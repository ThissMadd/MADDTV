import fs from "node:fs";
import path from "node:path";
import { contentRow1, contentRow2 } from "@/lib/content";
import { Heading } from "./ui";
import { LogoCard, Marquee, MarqueeRow } from "./Marquee";

// Logos: pon las imágenes en public/logos (png, svg, webp, jpg).
// Se ordenan por nombre y se reparten en dos filas. Si la carpeta está vacía, se muestran las categorías.
function readLogos() {
  const dir = path.join(process.cwd(), "public", "logos");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(png|svg|webp|jpe?g|avif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/logos/${encodeURIComponent(f)}`);
  } catch {
    return [];
  }
}

export function ContentStrip() {
  const logos = readLogos();
  const half = Math.ceil(logos.length / 2);

  return (
    <section id="contenido" className="section-glow py-12 sm:py-16">
      <div className="px-4">
        <Heading
          eyebrow="Contenido incluido"
          icon="monitor"
          title="Todo tu entretenimiento reunido"
          text="Canales, deporte, películas, series y entretenimiento en una experiencia compatible con tus dispositivos."
        />
      </div>
      <div className="mt-12 space-y-3 sm:space-y-4">
        {logos.length > 0 ? (
          <>
            <Marquee dir="left">{logos.slice(0, half).map((src) => <LogoCard key={src} src={src} />)}</Marquee>
            <Marquee dir="right">{(logos.length > 1 ? logos.slice(half) : logos).map((src) => <LogoCard key={src} src={src} />)}</Marquee>
          </>
        ) : (
          <>
            <MarqueeRow items={contentRow1} dir="left" />
            <MarqueeRow items={contentRow2} dir="right" />
          </>
        )}
      </div>
    </section>
  );
}
