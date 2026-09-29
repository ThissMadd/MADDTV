"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  BarChart3, CalendarRange, Clock, Crown, Gift, Infinity as InfinityIcon, Layers, Monitor, MonitorSmartphone,
  PlayCircle, RefreshCw, ShieldCheck, ShoppingCart, Star, Trophy, Tv, Zap,
} from "lucide-react";
import { type Mode, type Plan, lifetime, paymentLogo, periodLabel, plans, site } from "@/lib/site";
import { Heading } from "./ui";
import { PosterFan } from "./PosterFan";
import { Reveal } from "./Reveal";

const planIcons = { zap: Zap, star: Star, crown: Crown };

function Price({ value, period, size = "lg" }: { value: number; period?: string; size?: "lg" | "xl" }) {
  return (
    <div className="flex items-end gap-2">
      <div className="flex items-start">
        <span className={`font-display mt-1 font-bold ${size === "xl" ? "text-2xl" : "text-xl"}`}>€</span>
        <span className={`font-display text-num leading-none font-extrabold tracking-tight ${size === "xl" ? "text-6xl" : "text-5xl"}`}>
          {value}
        </span>
        <span className={`font-display mt-0.5 font-bold ${size === "xl" ? "text-xl" : "text-lg"}`}>,00</span>
      </div>
      {period && <span className="text-muted mb-0.5 ml-2 text-sm font-semibold">/ {period}</span>}
    </div>
  );
}

function features(mode: Mode) {
  return [
    { i: Monitor, t: mode === "single" ? "1 pantalla activa" : `${site.multiScreens} pantallas simultáneas` },
    { i: Trophy, t: "Fútbol europeo, fútbol español y F1" },
    { i: BarChart3, t: "Canales, películas y series incluidos" },
    { i: PlayCircle, t: "Entretenimiento, cine, series y deporte" },
    { i: CalendarRange, t: "Películas y series a la carta" },
    { i: Tv, t: "Calidad SD, HD, Full HD y 4K según fuente" },
    { i: RefreshCw, t: "EPG, actualizaciones y soporte" },
    { i: ShieldCheck, t: `${site.guaranteeDays} días de garantía de devolución` },
  ];
}

function PlanCard({ plan, mode, i }: { plan: Plan; mode: Mode; i: number }) {
  const PlanIcon = planIcons[plan.icon];
  const featured = plan.badge?.tone === "brand";
  return (
    <Reveal delay={i * 0.08} className="h-full">
      <div className={`card plan-card relative flex h-full flex-col rounded-[28px] p-6 sm:px-8 sm:py-8 ${featured ? "ring-brand/60 ring-1" : ""}`}>
        {plan.badge && (
          <span
            className={`absolute top-4 right-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${
              plan.badge.tone === "gold" ? "bg-gold text-[#1a1305]" : "btn-brand"
            }`}
          >
            {plan.badge.tone === "gold" ? <Crown className="size-3.5" /> : <Star className="size-3.5 fill-current" />}
            {plan.badge.text}
          </span>
        )}
        <span className={`grid size-12 place-items-center rounded-xl ${featured ? "btn-brand" : "bg-[#ece8fb] text-[#1c1340]"}`}>
          <PlanIcon className="size-5" />
        </span>
        <h3 className="font-display mt-5 text-[22px] font-extrabold tracking-tight">{plan.name}</h3>
        <div className="mt-1.5 h-[58px]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div key={mode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <Price value={plan.price[mode]} period={periodLabel(plan)} />
            </motion.div>
          </AnimatePresence>
        </div>
        {plan.highlight && (
          <span className="pill mt-2 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold uppercase">
            <Clock className="size-3.5" /> {plan.highlight}
          </span>
        )}
        <p className="mt-3 flex items-center gap-2 text-sm font-bold">
          <Gift className="size-4" /> Asistencia de instalación incluida
        </p>
        <ul className="mt-5 flex-1 space-y-3">
          {features(mode).map((f) => (
            <li key={f.t} className="flex items-center gap-2.5 text-[13px] whitespace-nowrap text-white/85 min-[400px]:text-sm sm:text-[14.5px]">
              <f.i className="text-brand-2 size-4 shrink-0" /> {f.t}
            </li>
          ))}
        </ul>
        <Link
          href={`/checkout?plan=${plan.id}&mode=${mode}`}
          className="btn-anim btn-brand mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-base font-bold transition hover:brightness-110"
        >
          <ShoppingCart className="size-[18px]" /> Ordenar ahora
        </Link>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold">
          <ShieldCheck className="text-brand-light size-3.5" /> Pago seguro
        </p>
      </div>
    </Reveal>
  );
}

export function PaymentChips({ small = false }: { small?: boolean }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {site.payments.map((p) => (
        <span
          key={p}
          title={p}
          className={`flex items-center justify-center bg-white shadow ${
            small ? "h-8 w-14 rounded-lg px-2 py-1.5" : "h-10 w-[72px] rounded-full px-3.5 py-2.5 sm:h-12 sm:w-[92px] sm:px-5 sm:py-3"
          }`}
        >
          <img src={paymentLogo(p)} alt={p} className="max-h-full max-w-full object-contain" />
        </span>
      ))}
    </div>
  );
}

function LifetimeOffer() {
  const chips = [
    { i: Layers, t: "1 pantalla simultánea" },
    { i: Star, t: "Acceso completo premium" },
    { i: InfinityIcon, t: "Sin renovación automática" },
    { i: RefreshCw, t: "Actualizaciones incluidas" },
    { i: ShieldCheck, t: "30 días de revisión" },
  ];
  return (
    <Reveal className="mx-auto mt-10 max-w-xl lg:max-w-none">
      <div className="card grid items-center gap-6 overflow-hidden rounded-3xl bg-[radial-gradient(50%_80%_at_70%_50%,#4c1d9544,transparent)] p-5 sm:p-7 lg:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <span className="pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase">
            <Crown className="size-3.5" /> Oferta destacada
          </span>
          <h3 className="font-display mt-3 text-xl font-extrabold tracking-tight sm:text-[26px]">Suscripción suprema de por vida</h3>
          <p className="text-muted mt-2 max-w-md text-sm">
            Pago único para usuarios que quieren una opción larga, con soporte y actualizaciones incluidas.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c.t} className="pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold">
                <c.i className="size-3.5" /> {c.t}
              </span>
            ))}
          </div>
        </div>

        <PosterFan
          srcs={["/hero/7.webp", "/hero/8.webp", "/hero/9.webp"]}
          spread={58}
          tilt={9}
          className="mx-auto hidden h-44 w-60 sm:block"
          cardClass="h-40 w-28 rounded-xl border-2 border-white/20"
        />

        <div className="card plan-card rounded-2xl p-5 text-center sm:p-6">
          <div className="flex justify-center"><Price value={lifetime.price.single} size="xl" /></div>
          <p className="text-muted mt-3 text-sm sm:text-base">pago único — sin renovación automática</p>
          <Link
            href="/checkout?plan=vida&mode=single"
            className="btn-anim btn-brand mt-4 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition hover:brightness-110"
          >
            <ShoppingCart className="size-5" /> Pedir acceso de por vida
          </Link>
          <p className="text-muted mt-4 flex items-center justify-center gap-1.5 text-sm font-semibold">
            <ShieldCheck className="size-4" /> Pago seguro
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function Pricing() {
  const [mode, setMode] = useState<Mode>("single");
  const tabs = [
    { id: "single" as const, label: "1 dispositivo", icon: Monitor },
    { id: "multi" as const, label: "Multi dispositivos", icon: MonitorSmartphone },
  ];

  return (
    <section id="planes" className="section-glow py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1248px] px-4 sm:px-6">
        <Heading
          eyebrow="Planes"
          icon="grid"
          title="Planes claros y activación rápida."
          text="Elige la duración y el número de pantallas. Te ayudamos con la instalación por WhatsApp."
        />

        <Reveal className="mt-10 flex justify-center">
          <div className="pill inline-flex rounded-2xl p-1.5 shadow-[0_0_40px_-10px_#facc1566]">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setMode(t.id)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors sm:px-8 sm:text-base ${
                  mode === t.id ? "text-[#1a1305]" : "text-white/85 hover:text-white"
                }`}
              >
                {mode === t.id && (
                  <motion.span layoutId="mode-pill" className="btn-gold absolute inset-0 rounded-xl" transition={{ type: "spring", bounce: 0.2, duration: 0.45 }} />
                )}
                <t.icon className="relative size-4" />
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-xl gap-6 lg:max-w-none lg:grid-cols-3">
          {plans.map((p, i) => <PlanCard key={p.id} plan={p} mode={mode} i={i} />)}
        </div>

        <Reveal className="mt-10">
          <PaymentChips />
        </Reveal>

        <LifetimeOffer />
      </div>
    </section>
  );
}
