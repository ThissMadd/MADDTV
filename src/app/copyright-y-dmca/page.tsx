import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Copyright y DMCA",
  description: `Política de copyright y retirada de contenido de ${site.name}: cómo enviar un aviso de copyright o DMCA.`,
  alternates: { canonical: "/copyright-y-dmca" },
};

export default function CopyrightPage() {
  return (
    <LegalLayout
      crumb="Copyright y DMCA"
      title={<>Política de copyright y <span className="text-accent">retirada de contenido</span></>}
      subtitle={`${site.name} respeta los derechos de autor y ofrece un canal oficial para revisar avisos de copyright, DMCA y solicitudes de retirada de contenido.`}
    >
      <h2>Compromiso de {site.name}</h2>
      <p>
        {site.name} respeta los derechos de propiedad intelectual de terceros. Si considera que algún contenido, enlace,
        imagen, marca o material publicado en este sitio infringe sus derechos, puede enviar una solicitud de revisión a
        nuestro contacto oficial.
      </p>

      <h3>Cómo enviar una solicitud</h3>
      <p>Para que podamos revisar correctamente un aviso de copyright o DMCA, incluya la siguiente información:</p>
      <ul>
        <li>Nombre completo de la persona o entidad titular de los derechos.</li>
        <li>Datos de contacto válidos para responder a la solicitud.</li>
        <li>URL exacta del contenido que desea reportar.</li>
        <li>Descripción clara de la obra protegida o del material afectado.</li>
        <li>
          Declaración de buena fe indicando que el uso reportado no está autorizado por el titular, su representante o la
          ley aplicable.
        </li>
        <li>
          Declaración de que la información enviada es exacta y de que usted está autorizado para actuar en nombre del
          titular de los derechos.
        </li>
      </ul>

      <h3>Contacto oficial para copyright</h3>
      <p>
        Envíe las solicitudes a <a href={`mailto:${site.email}`}>{site.email}</a>. También puede contactar con soporte por
        WhatsApp si necesita confirmar que está usando el sitio oficial de {site.name}.
      </p>
      <p>
        <strong>WhatsApp:</strong>{" "}
        <a href={waLink(`Hola ${site.name}, quiero enviar un aviso de copyright`)} target="_blank" rel="noopener">
          {site.whatsappDisplay}
        </a>
      </p>

      <h3>Revisión y retirada</h3>
      <p>
        {site.name} revisará las solicitudes recibidas y podrá retirar, modificar o bloquear el acceso al material señalado
        cuando corresponda. Las solicitudes incompletas pueden requerir información adicional antes de poder ser procesadas.
      </p>

      <h3>Uso indebido de solicitudes</h3>
      <p>
        Las notificaciones falsas, abusivas o enviadas sin autorización pueden ser rechazadas. Esta página no sustituye el
        asesoramiento legal independiente y se ofrece como canal operativo para gestionar avisos relacionados con derechos
        de autor.
      </p>
    </LegalLayout>
  );
}
