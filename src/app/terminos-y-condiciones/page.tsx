import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones generales de los servicios IPTV de ${site.name}: uso, pagos, responsabilidad y soporte.`,
  alternates: { canonical: "/terminos-y-condiciones" },
};

// ⚠️ Revisa estas condiciones con tu asesor legal antes de publicar.
export default function TermsPage() {
  return (
    <LegalLayout
      crumb="Términos y condiciones"
      title={<>Términos y <span className="text-accent">Condiciones Generales</span></>}
      subtitle={`Vigente para los servicios IPTV de ${site.name}. Al acceder a nuestro sitio web o utilizar nuestros servicios, acepta estar sujeto a estos términos y condiciones.`}
    >
      <h2>Términos y Condiciones Generales</h2>
      <p>
        Bienvenido a {site.name}. Al acceder a nuestro sitio web o utilizar nuestros servicios IPTV, acepta estar sujeto a
        los siguientes términos y condiciones. Por favor, léalos cuidadosamente.
      </p>

      <h3>1. Aceptación de los términos</h3>
      <p>
        Al utilizar el sitio web de {site.name} y sus servicios IPTV, reconoce que ha leído, comprendido y aceptado estos
        Términos y Condiciones Generales. Si no está de acuerdo con alguna parte de estos términos, le rogamos que deje de
        utilizar nuestros servicios.
      </p>

      <h3>2. Servicios IPTV</h3>
      <p>
        {site.name} proporciona servicios de suscripción IPTV que otorgan a los usuarios acceso a una amplia variedad de
        canales de TV en directo, películas y series. Nuestro objetivo es ofrecer una experiencia de entretenimiento fluida y
        de alta calidad.
      </p>
      <ul>
        <li>Los datos de activación y las instrucciones de instalación se entregan tras confirmar el pago.</li>
        <li>
          Solo tratamos los datos necesarios para gestionar su pedido y darle soporte, tal como se describe en nuestra{" "}
          <Link href="/politica-de-privacidad">Política de privacidad</Link>.
        </li>
      </ul>

      <h3>3. Compromiso de privacidad</h3>
      <p>
        En {site.name}, su privacidad es una prioridad. No vendemos ni cedemos sus datos a terceros con fines comerciales y
        aplicamos medidas técnicas para protegerlos. Puede consultar qué datos tratamos y cómo ejercer sus derechos en la{" "}
        <Link href="/politica-de-privacidad">Política de privacidad</Link>.
      </p>

      <h3>4. Pagos</h3>
      <p>
        Todos los pagos se procesan a través de plataformas seguras de terceros. {site.name} no almacena datos de tarjeta en
        este sitio web. Por favor, siga las instrucciones de pago proporcionadas para garantizar una transacción segura.
      </p>

      <h3>5. Uso permitido</h3>
      <p>
        Nuestros servicios IPTV están destinados estrictamente al uso personal y no comercial. Los usuarios no pueden
        compartir, revender ni redistribuir los datos de acceso ni el contenido accedido a través de nuestra plataforma.
        Cualquier mal uso o violación de estos términos puede llevar a la suspensión inmediata o a la terminación de la
        suscripción sin reembolso.
      </p>

      <h3>6. Disponibilidad del servicio y responsabilidad</h3>
      <p>
        Si bien {site.name} se esfuerza por mantener un servicio fiable y de alta calidad, no podemos garantizar un acceso
        ininterrumpido debido a factores externos como interrupciones de Internet o problemas técnicos. {site.name} no es
        responsable de ninguna interrupción del servicio que ocurra fuera de nuestro control.
      </p>

      <h3>7. Derechos de propiedad intelectual</h3>
      <p>
        Todo el contenido accedido a través de {site.name}, incluidos canales en directo, películas y series, está sujeto a
        las leyes de derechos de autor y propiedad intelectual. Los usuarios tienen estrictamente prohibido grabar,
        reproducir o distribuir este contenido en cualquier forma.
      </p>

      <h3>8. Modificaciones de los términos</h3>
      <p>
        {site.name} se reserva el derecho de actualizar o modificar estos términos en cualquier momento. Cualquier cambio se
        publicará en nuestro sitio web. El uso continuado de nuestros servicios después de dichas actualizaciones constituye
        la aceptación de los términos revisados.
      </p>

      <h3>9. Conducta del cliente, restricción de cuenta y reembolsos</h3>
      <p>
        {site.name} se reserva el derecho de restringir, suspender o cancelar cualquier cuenta si el usuario muestra
        comportamientos irrespetuosos, abusivos, amenazantes o insultantes hacia el equipo de soporte. Los reembolsos se
        rigen por nuestra <Link href="/politica-de-reembolso">Política de reembolso</Link>, y podrán denegarse si la
        conducta del usuario infringe estas normas de respeto y profesionalidad.
      </p>

      <h3>10. Contáctenos</h3>
      <p>Para preguntas, comentarios o información adicional sobre estos Términos y Condiciones, contáctenos:</p>
      <p>
        <strong>Correo:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        <strong>WhatsApp:</strong>{" "}
        <a href={waLink(`Hola ${site.name}, tengo una consulta sobre los términos y condiciones`)} target="_blank" rel="noopener">
          {site.whatsappDisplay}
        </a>
      </p>
      <p>
        Gracias por elegir {site.name}. Nos dedicamos a ofrecerle una experiencia IPTV premium mientras respetamos su
        privacidad y aseguramos su satisfacción.
      </p>
    </LegalLayout>
  );
}
