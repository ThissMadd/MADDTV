import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/politica-de-reembolso`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/politica-de-privacidad`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terminos-y-condiciones`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/copyright-y-dmca`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
