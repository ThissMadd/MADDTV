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
  multiScreens: 3,
  payments: ["Visa", "Mastercard", "Apple Pay", "Google Pay", "Bizum", "PayPal"],
};

export type Mode = "single" | "multi";

export type Plan = {
  id: string;
  name: string;
  months: number | null; // null = de por vida
  price: Record<Mode, number>;
  icon: "zap" | "star" | "crown";
  badge?: { text: string; tone: "brand" | "gold" };
  highlight?: string;
  extra?: string[];
};

export const plans: Plan[] = [
  { id: "basico", name: "Básico", months: 3, price: { single: 39, multi: 49 }, icon: "zap" },
  {
    id: "estandar", name: "Estándar", months: 12, price: { single: 59, multi: 69 }, icon: "star",
    badge: { text: "Más popular", tone: "brand" }, highlight: "Año completo",
  },
  {
    id: "premium", name: "Premium", months: 18, price: { single: 69, multi: 89 }, icon: "crown",
    badge: { text: "6 meses gratis", tone: "gold" },
  },
];

export const lifetime: Plan = {
  id: "vida", name: "Suprema de por vida", months: null, price: { single: 199, multi: 199 }, icon: "crown",
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
