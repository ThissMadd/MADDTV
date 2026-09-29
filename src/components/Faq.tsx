"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";
import { Container, Heading } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-glow py-12 sm:py-16">
      <Container>
        <Heading
          eyebrow="Preguntas frecuentes"
          icon="sparkles"
          title={<>Preguntas frecuentes<br />sobre IPTV España y {site.name}</>}
          text="Respuestas rápidas sobre suscripción IPTV, pago único, activación, Smart TV, Fire TV, Android TV, canales, fútbol, películas, series y soporte oficial en España."
        />
        <div className="mx-auto mt-12 max-w-[860px] space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-open={isOpen} className="card faq-card rounded-2xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-display text-[15px] font-extrabold tracking-tight sm:text-lg">{f.q}</span>
                  <span className="border-brand/40 grid size-8 shrink-0 place-items-center rounded-lg border">
                    <ChevronDown className={`text-brand size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted px-5 pb-6 leading-relaxed sm:px-6">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
