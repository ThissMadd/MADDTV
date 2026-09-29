"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { Logo, WhatsAppIcon } from "./ui";

const links = [
  { href: "/#contenido", label: "Contenido" },
  { href: "/#planes", label: "Planes" },
  { href: "/#deporte", label: "Deporte" },
  { href: "/#dispositivos", label: "Dispositivos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#guias", label: "Mejor IPTV España" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-[#3b0f8f] via-[#5b21b6] to-[#3b0f8f] px-4 py-2 text-center text-[11px] leading-snug font-medium sm:text-[13px]">
        {site.name}® es el sitio oficial de {site.name}. Compra y soporte solo desde la web oficial{" "}
        <a href="/" className="font-semibold underline underline-offset-2">
          {site.url.replace("https://", "")}
        </a>
        .
      </div>

      <nav className={`border-b transition-colors ${scrolled ? "border-line bg-[#0c0822]/95 backdrop-blur-xl" : "border-transparent bg-[#0c0822]"}`}>
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:h-[76px] sm:px-6">
          <Logo />

          <ul className="hidden items-center gap-6 xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold text-[15px] font-semibold text-white/90 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={waLink("Hola MADDTV 👋")}
              target="_blank"
              rel="noopener"
              className="btn-anim bg-wa hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold shadow-lg shadow-green-600/25 transition hover:brightness-110 md:flex"
            >
              <WhatsAppIcon className="size-4" /> {site.whatsappDisplay}
            </a>
            <a href="/#planes" className="btn-anim btn-brand rounded-xl px-4 py-2.5 text-sm font-bold transition hover:brightness-110 sm:px-6">
              Ver planes
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="border-line grid size-10 place-items-center rounded-xl border xl:hidden"
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-line overflow-hidden border-t bg-[#0c0822] xl:hidden"
            >
              <ul className="px-4 py-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-white/90 hover:bg-white/5">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 pb-4 md:hidden">
                <a
                  href={waLink("Hola MADDTV 👋")}
                  target="_blank"
                  rel="noopener"
                  className="btn-anim bg-wa flex items-center justify-center gap-2 rounded-xl py-3 font-bold"
                >
                  <WhatsAppIcon className="size-4" /> {site.whatsappDisplay}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
