import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo ${site.name} recopila, utiliza y protege su información personal, conforme al RGPD y la LOPDGDD.`,
  alternates: { canonical: "/politica-de-privacidad" },
};

// ⚠️ Revisa este texto con tu asesor legal y completa los datos del responsable antes de publicar.
export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      crumb="Política de privacidad"
      title={<>Política de privacidad <span className="text-accent">{site.name}</span></>}
      subtitle={`Conozca cómo recopilamos, utilizamos y protegemos su información personal dentro de los servicios IPTV de ${site.name}.`}
    >
      <h2>Política de privacidad</h2>
      <p>
        En {site.name}, valoramos y protegemos su privacidad. Esta política describe qué datos tratamos, para qué los
        utilizamos y cómo garantizamos una experiencia segura mientras utiliza nuestros servicios, conforme al Reglamento
        General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h3>1. Información que recopilamos</h3>
      <p>Solo recopilamos los datos mínimos necesarios para gestionar su pedido y darle soporte:</p>
      <ul>
        <li>Los datos que usted nos facilita al realizar un pedido: nombre, correo electrónico, número de WhatsApp y dispositivo.</li>
        <li>Los mensajes que nos envía por WhatsApp o correo electrónico para solicitar ayuda.</li>
      </ul>
      <p>No solicitamos ni almacenamos en esta web datos bancarios ni de tarjeta: los pagos se gestionan a través del proveedor de pago elegido.</p>

      <h3>2. Cómo usamos su información</h3>
      <p>Utilizamos sus datos únicamente para:</p>
      <ul>
        <li>Procesar y activar su suscripción.</li>
        <li>Enviarle sus datos de acceso e instrucciones de instalación.</li>
        <li>Prestarle soporte técnico y responder a sus consultas.</li>
      </ul>
      <p>No utilizamos su información para publicidad de terceros ni la vendemos a nadie.</p>

      <h3>3. Seguridad de los datos</h3>
      <p>Estamos comprometidos con mantener un entorno de navegación seguro:</p>
      <ul>
        <li>Utilizamos encriptación HTTPS para proteger todas las comunicaciones con nuestro sitio.</li>
        <li>El acceso a los datos de clientes está limitado a las personas que gestionan los pedidos y el soporte.</li>
        <li>Conservamos sus datos solo durante el tiempo necesario para prestar el servicio y cumplir las obligaciones legales.</li>
      </ul>

      <h3>4. Compartir información</h3>
      <ul>
        <li>No vendemos ni cedemos sus datos a terceros con fines comerciales.</li>
        <li>
          Sus mensajes se transmiten a través de WhatsApp y del proveedor de correo, que actúan conforme a sus propias
          políticas de privacidad.
        </li>
        <li>Esta web no utiliza cookies de publicidad ni de seguimiento; solo almacenamiento técnico necesario para su funcionamiento.</li>
      </ul>

      <h3>5. Sus derechos</h3>
      <p>En cualquier momento puede ejercer sus derechos sobre sus datos personales:</p>
      <ul>
        <li>Acceso, rectificación y supresión de sus datos.</li>
        <li>Limitación u oposición al tratamiento, y portabilidad de sus datos.</li>
        <li>
          Presentar una reclamación ante la Agencia Española de Protección de Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) si considera que sus derechos no se han respetado.
        </li>
      </ul>
      <p>Para ejercerlos, escríbanos indicando su solicitud y le responderemos en el plazo legal.</p>

      <h3>6. Contáctenos</h3>
      <p>Si tiene alguna pregunta sobre esta Política de privacidad o nuestros servicios, no dude en contactarnos:</p>
      <p>
        <strong>Correo:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        <strong>WhatsApp:</strong>{" "}
        <a href={waLink(`Hola ${site.name}, tengo una consulta sobre privacidad`)} target="_blank" rel="noopener">
          {site.whatsappDisplay}
        </a>
      </p>
      <p>
        Gracias por elegir {site.name}. Nos enorgullece ofrecer una experiencia IPTV de alta calidad que respeta su
        privacidad, seguridad y tranquilidad.
      </p>
    </LegalLayout>
  );
}
