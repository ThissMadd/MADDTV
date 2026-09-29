import { Icon } from "./ui";

export type Item = { t: string; i: string };

export function WhiteCard({ item }: { item: Item }) {
  return (
    <div className="flex h-[76px] w-[150px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-white to-[#e9e4fb] px-4 shadow-lg shadow-black/30 sm:h-[92px] sm:w-[176px]">
      <Icon name={item.i} className="text-brand size-5 shrink-0" />
      <span className="font-display text-[15px] font-extrabold tracking-tight text-[#1c1340] sm:text-base">{item.t}</span>
    </div>
  );
}

export function LogoCard({ src }: { src: string }) {
  return (
    <div className="logo-card flex h-[76px] w-[150px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#e9e4fb] px-5 py-3.5 shadow-lg shadow-black/30 sm:h-[92px] sm:w-[176px] sm:py-4">
      <img src={src} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
    </div>
  );
}

export function Marquee({ children, dir }: { children: React.ReactNode[]; dir: "left" | "right" }) {
  // Se repite 4 veces para que la banda nunca quede vacía en pantallas anchas
  const list = [...children, ...children, ...children, ...children];
  return (
    <div className="mask-x overflow-hidden pt-4 pb-2">
      <div className={`flex w-max gap-3 sm:gap-4 ${dir === "left" ? "marquee-left" : "marquee-right"}`}>
        {list.map((c, i) => <div key={i} className="shrink-0">{c}</div>)}
      </div>
    </div>
  );
}

export function MarqueeRow({ items, dir }: { items: Item[]; dir: "left" | "right" }) {
  return <Marquee dir={dir}>{items.map((it) => <WhiteCard key={it.t} item={it} />)}</Marquee>;
}
