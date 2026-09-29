import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de reembolso",
  description: `Conozca la política de reembolso de ${site.name}: plazo de ${site.guaranteeDays} días, requisitos y cómo solicitarlo.`,
  alternates: { canonical: "/politica-de-reembolso" },
};

// ⚠️ Revisa estas condiciones con tu asesor antes de publicar.
export default function RefundPolicyPage() {
  const days = site.guaranteeDays;
  return (
    <LegalLayout
      crumb="Política de reembolso"
      title={<>Política de reembolso <span className="text-accent">{site.name}</span></>}
      subtitle={`Conozca nuestra política de reembolso y pautas de protección al cliente para los servicios IPTV de ${site.name} en España.`}
    >
      <h2>Política de reembolso</h2>
      <p>
        En {site.name}, su satisfacción es nuestra máxima prioridad. Nos comprometemos a proporcionar servicios IPTV de alta
        calidad y, en caso de que no esté completamente satisfecho, ofrecemos una política de reembolso clara y justa.
      </p>

      <h3>1. Derecho a solicitar un reembolso</h3>
      <p>
        Ofrecemos un periodo de reembolso de {days} días desde la fecha de su compra. Si no está satisfecho con nuestro
        servicio por cualquier motivo, puede solicitar un reembolso sin complicaciones.
      </p>

      <h3>2. Criterios de elegibilidad</h3>
      <p>Para optar a un reembolso, se deben cumplir las siguientes condiciones:</p>
      <ul>
        <li>La solicitud debe realizarse dentro de los {days} días posteriores a su compra.</li>
        <li>Debe proporcionar un comprobante válido de compra, como su número de pedido o el correo electrónico de confirmación.</li>
        <li>Los reembolsos no son aplicables si se ha utilizado más del 50% del periodo de suscripción.</li>
        <li>No se aceptarán solicitudes de reembolso más de 48 horas después de una promoción o evento importante.</li>
      </ul>

      <h3>3. Cómo solicitar un reembolso</h3>
      <p>Para solicitar un reembolso, siga estos pasos:</p>
      <ul>
        <li>Contacte con nuestro equipo de soporte por WhatsApp o correo electrónico.</li>
        <li>Proporcione su comprobante de compra y una breve explicación de su solicitud.</li>
        <li>Nuestro equipo revisará y procesará su solicitud rápidamente al recibirla.</li>
      </ul>

      <h3>4. Método de reembolso</h3>
      <p>
        Una vez aprobado, su reembolso se emitirá a través del mismo método de pago utilizado en el momento de la compra.
        Tenga en cuenta que los tiempos de procesamiento pueden variar según su proveedor de pagos.
      </p>

      <h3>5. ¿Necesita ayuda? Contáctenos</h3>
      <p>Si tiene alguna pregunta o necesita más ayuda con respecto a nuestra política de reembolso, no dude en contactarnos:</p>
      <p>
        <strong>Correo:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        <strong>WhatsApp:</strong>{" "}
        <a href={waLink(`Hola ${site.name}, tengo una consulta sobre un reembolso`)} target="_blank" rel="noopener">
          {site.whatsappDisplay}
        </a>
      </p>
      <p>En {site.name}, estamos aquí para asegurar que su experiencia sea fluida y agradable. ¡Gracias por elegirnos!</p>
    </LegalLayout>
  );
}
