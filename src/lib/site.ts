// ⚙️ Todo lo editable del sitio está aquí: marca, contacto, precios.

export const site = {
  name: "MADDTV",
  url: "https://maddtv.com",
  // Número de WhatsApp en formato internacional sin "+" ni espacios
  whatsapp: "34657428620",
  whatsappDisplay: "+34 657 428 620",
  email: "contacto@maddtv.com",
  // ID de Meta Pixel (Facebook / Instagram Ads). Déjalo vacío ("") para desactivarlo
  metaPixelId: "1737103708416251",
  // ⚠️ Pon aquí los datos REALES de tu perfil de Trustpilot, o deja rating en null para ocultarlo
  rating: {
    score: "4.8",
    count: 291,
  } as { score: string; count: number } | null,
  stats: {
    channels: "79.000+",
    vod: "249.000+",
  },
  // Barra de estadísticas del Hero (icono: tv, monitor, headset, clock…)
  heroStats: [
    { v: "79.000+", l: "Canales en vivo", i: "tv" },
    { v: "4K", l: "Ultra HD", i: "monitor" },
    { v: "24/7", l: "Soporte", i: "headset" },
    { v: "24H", l: "Prueba gratuita", i: "clock" },
  ],
  guaranteeDays: 15,
  payments: ["Visa", "Mastercard", "Apple Pay", "Google Pay", "Bizum", "PayPal"],
};

export type Plan = {
  id: string;
  name: string;
  months: number | null; // null = de por vida
  price: number;
  icon: "zap" | "star" | "crown";
  badge?: { text: string; tone: "brand" | "gold" };
  // Enlace de pago directo (Stripe…); si no hay, el botón abre WhatsApp
  payLink?: string;
  highlight?: string;
  extra?: string[];
};

export const plans: Plan[] = [
  {
    id: "basico", name: "Básico", months: 3, price: 39, icon: "zap",
    payLink: "https://buy.stripe.com/dRm6oA5zPap424G8JE24003?locale=es",
  },
  {
    id: "estandar", name: "Estándar", months: 12, price: 59, icon: "star",
    badge: { text: "Más popular", tone: "brand" }, highlight: "Año completo",
    payLink: "https://buy.stripe.com/7sYdR2d2hgNs8t42lg24002?locale=es",
  },
  {
    id: "premium", name: "Premium", months: 18, price: 69, icon: "crown",
    badge: { text: "6 meses gratis", tone: "gold" },
    payLink: "https://buy.stripe.com/eVqdR2bYdcxc5gScZU24004?locale=es",
  },
];

export const lifetime: Plan = {
  id: "vida", name: "Suprema de por vida", months: null, price: 199, icon: "crown",
};

export const allPlans = [...plans, lifetime];

export function periodLabel(p: Plan) {
  return p.months === null ? "de por vida" : `${p.months} meses`;
}

// Logo de cada método de pago (archivos en public/payments)
export const paymentLogo = (name: string) => `/payments/${name.toLowerCase().replace(/\s+/g, "")}.svg`;

export const eur = (n: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);

export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const img = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;
