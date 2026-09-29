import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Header } from "./Header";
import { FloatingWhatsApp, Footer } from "./Footer";
import { Container } from "./ui";

// Plantilla para páginas informativas (reembolso, privacidad, términos…)
export function LegalLayout({
  title, subtitle, crumb, children,
}: { title: React.ReactNode; subtitle: string; crumb: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <section className="border-line relative overflow-hidden border-b bg-[radial-gradient(45%_90%_at_85%_0%,rgb(225_29_72/0.14),transparent_70%),#0e1015] py-12 sm:py-16">
          <Container>
            <div className="mx-auto max-w-[720px]">
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm">
                <Link href="/" className="text-muted-2 transition-colors hover:text-white">Inicio</Link>
                <ChevronRight className="text-muted-2 size-3.5" />
                <span className="font-semibold text-white">{crumb}</span>
              </nav>
              <span className="pill mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase">
                <span className="bg-brand size-1.5 rounded-full" /> Información oficial
              </span>
              <h1 className="font-display mt-4 text-[clamp(30px,8vw,48px)] leading-[1.08] font-extrabold tracking-[-0.035em]">
                {title}
              </h1>
              <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">{subtitle}</p>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-12 sm:py-20">
          <Container>
            <article className="legal-prose max-w-[720px]">{children}</article>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
