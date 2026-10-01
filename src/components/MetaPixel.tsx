"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { site } from "@/lib/site";
import { trackPixel } from "@/lib/pixel";

// Última ruta contada: la primera PageView la envía el script base
let lastPath: string | null = null;

// Código base de Meta Pixel + PageView en cada cambio de página
export function MetaPixel() {
  const id = site.metaPixelId;
  const pathname = usePathname();

  useEffect(() => {
    if (lastPath === null) {
      lastPath = pathname;
      return;
    }
    if (lastPath === pathname) return; // evita duplicados (p. ej. doble efecto en desarrollo)
    lastPath = pathname;
    trackPixel("PageView");
  }, [pathname]);

  // Contact: cualquier clic en un enlace de WhatsApp para preguntar.
  // Los botones de pedido (data-order) ya envían Lead y se excluyen.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href*="wa.me/"]');
      if (!a || a.hasAttribute("data-order")) return;
      trackPixel("Contact");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!id) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${id}');
fbq('track','PageView');`}
      </Script>
      <noscript>
        <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`} />
      </noscript>
    </>
  );
}
