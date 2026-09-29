"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, Check, Lock, Monitor, MonitorSmartphone, ShieldCheck, ShoppingCart } from "lucide-react";
import { type Mode, allPlans, eur, paymentLogo, periodLabel, site, waLink } from "@/lib/site";
import { devices } from "@/lib/content";
import { Logo, WhatsAppIcon } from "@/components/ui";

const input =
  "w-full rounded-xl border border-line bg-[#0e0a24] px-4 py-3.5 outline-none placeholder:text-white/30 focus:border-brand-2 focus:ring-2 focus:ring-brand/30";

export function Checkout() {
  const params = useSearchParams();
  const [planId, setPlanId] = useState(() => allPlans.find((p) => p.id === params.get("plan"))?.id ?? "estandar");
  const [mode, setMode] = useState<Mode>(() => (params.get("mode") === "multi" ? "multi" : "single"));
  const [method, setMethod] = useState(site.payments[0]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", device: devices[0] });

  const plan = allPlans.find((p) => p.id === planId)!;
  const effectiveMode: Mode = plan.months === null ? "single" : mode;
  const total = plan.price[effectiveMode];
  const screens = effectiveMode === "multi" ? site.multiScreens : 1;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      `Hola ${site.name} 👋 Quiero activar mi suscripción:`,
      "",
      `📦 Plan: *${plan.name}* (${periodLabel(plan)})`,
      `📺 Pantallas: ${screens}`,
      `💶 Total: *${eur(total)}*`,
      `💳 Pago: ${method}`,
      "",
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.phone}`,
      `Dispositivo: ${form.device}`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <div className="section-glow min-h-screen">
      <header className="border-line border-b bg-[#0c0822]">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <Logo />
          <span className="text-muted flex items-center gap-1.5 text-sm font-semibold">
            <Lock className="text-wa size-4" /> Pago seguro
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
        <Link href="/#planes" className="text-muted inline-flex items-center gap-1.5 text-sm font-semibold hover:text-white">
          <ArrowLeft className="size-4" /> Volver a los planes
        </Link>
        <h1 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">Finaliza tu pedido</h1>
        <p className="text-muted mt-2">Activación en minutos tras confirmar el pago.</p>

        <form onSubmit={submit} className="mt-10 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-8">
          <div className="min-w-0 space-y-6">
            <section className="card rounded-3xl p-5 sm:p-8">
              <h2 className="font-display text-lg font-extrabold">1. Elige tu plan</h2>
              <div className="pill mt-5 inline-flex rounded-2xl p-1">
                {([["single", "1 dispositivo", Monitor], ["multi", "Multi dispositivos", MonitorSmartphone]] as const).map(([id, label, I]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMode(id)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition sm:px-5 ${mode === id ? "btn-gold" : "text-white/80"}`}
                  >
                    <I className="size-4" /> {label}
                  </button>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {allPlans.map((p) => {
                  const m: Mode = p.months === null ? "single" : mode;
                  return (
                    <label
                      key={p.id}
                      className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border p-4 transition ${
                        planId === p.id ? "border-brand-2 bg-brand/15" : "border-line hover:border-[#4c3a9a]"
                      }`}
                    >
                      <input type="radio" name="plan" className="sr-only" checked={planId === p.id} onChange={() => setPlanId(p.id)} />
                      <div>
                        <div className="font-bold">{p.name}</div>
                        <div className="text-muted text-sm">{periodLabel(p)}</div>
                      </div>
                      <div className="font-display text-num text-2xl font-extrabold">{eur(p.price[m])}</div>
                    </label>
                  );
                })}
              </div>
            </section>

            <section className="card rounded-3xl p-5 sm:p-8">
              <h2 className="font-display text-lg font-extrabold">2. Tus datos</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <input required placeholder="Nombre" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input required type="email" placeholder="Email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input required type="tel" placeholder="WhatsApp (+34…)" className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <select className={input} value={form.device} onChange={(e) => setForm({ ...form, device: e.target.value })}>
                  {devices.map((d) => <option key={d} className="bg-[#0e0a24]">{d}</option>)}
                </select>
              </div>
            </section>

            <section className="card rounded-3xl p-5 sm:p-8">
              <h2 className="font-display text-lg font-extrabold">3. Método de pago</h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {site.payments.map((m) => (
                  <label
                    key={m}
                    className={`flex cursor-pointer items-center justify-center rounded-2xl border p-2.5 text-center font-bold transition ${
                      method === m ? "border-brand-2 bg-brand/15" : "border-line hover:border-[#4c3a9a]"
                    }`}
                  >
                    <input type="radio" name="method" className="sr-only" checked={method === m} onChange={() => setMethod(m)} />
                    <span className="flex h-11 w-full items-center justify-center rounded-lg bg-white px-3 py-2.5">
                      <img src={paymentLogo(m)} alt={m} className="max-h-full max-w-full object-contain" />
                    </span>
                  </label>
                ))}
              </div>
              <p className="text-muted mt-4 text-sm">
                Al confirmar, te enviamos por WhatsApp el enlace o los datos de pago. Tras recibirlo, activamos tu cuenta al momento.
              </p>
            </section>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="card rounded-3xl p-6 sm:p-8">
              <h2 className="font-display text-lg font-extrabold">Resumen del pedido</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-muted">Plan</dt><dd className="font-bold">{plan.name}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Duración</dt><dd className="font-bold">{periodLabel(plan)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Pantallas</dt><dd className="font-bold">{screens}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Pago</dt><dd className="font-bold">{method}</dd></div>
              </dl>
              <div className="border-line mt-6 flex items-end justify-between border-t pt-6">
                <span className="text-muted">Total</span>
                <motion.span key={total} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="font-display text-num text-4xl font-extrabold">
                  {eur(total)}
                </motion.span>
              </div>
              <button type="submit" className="btn-anim btn-brand mt-6 flex w-full items-center justify-center gap-2 rounded-full py-4 text-lg font-bold transition hover:brightness-110">
                <ShoppingCart className="size-5" /> Confirmar pedido
              </button>
              <p className="text-muted mt-3 flex items-center justify-center gap-1.5 text-xs">
                <WhatsAppIcon className="size-3.5" /> Se abrirá WhatsApp con tu pedido
              </p>
              <ul className="border-line mt-6 space-y-2.5 border-t pt-6 text-sm text-white/80">
                {["Asistencia de instalación incluida", "Sin renovación automática", "Soporte por WhatsApp"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check className="text-brand-light size-4" /> {t}</li>
                ))}
                <li className="flex items-center gap-2"><ShieldCheck className="text-brand-light size-4" /> {site.guaranteeDays} días de garantía de devolución</li>
              </ul>
            </div>
          </aside>
        </form>
      </main>
    </div>
  );
}
