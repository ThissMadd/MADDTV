import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Aviso legal y privacidad" };

// ⚠️ Texto orientativo: revísalo con un asesor legal y completa tus datos reales.
export default function LegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-muted text-sm hover:text-white">← Volver</Link>
      <h1 className="font-display mt-6 text-4xl font-bold">Aviso legal y privacidad</h1>
      <div className="text-muted mt-8 space-y-8 leading-relaxed [&_h2]:font-display [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white">
        <section>
          <h2>Titular</h2>
          <p>{site.name} · Contacto: {site.email}. [Completa aquí razón social, NIF y domicilio.]</p>
        </section>
        <section id="privacidad">
          <h2>Protección de datos</h2>
          <p>
            Los datos que nos facilitas (nombre, email, teléfono) se usan únicamente para gestionar tu pedido y darte
            soporte, conforme al RGPD y la LOPDGDD. Puedes ejercer tus derechos de acceso, rectificación y supresión
            escribiendo a {site.email}.
          </p>
        </section>
        <section>
          <h2>Cookies</h2>
          <p>Este sitio solo utiliza cookies técnicas necesarias para su funcionamiento y para recordar tus preferencias.</p>
        </section>
        <section id="terminos">
          <h2>Condiciones del servicio</h2>
          <p>Las suscripciones son de pago único por el periodo elegido y no se renuevan automáticamente.</p>
        </section>
        <section id="reembolso">
          <h2>Política de reembolso</h2>
          <p>
            Dispones de una garantía de devolución de {site.guaranteeDays} días si el servicio no funciona correctamente en
            tu dispositivo y nuestro soporte no puede solucionarlo.
          </p>
        </section>
      </div>
    </main>
  );
}
