// Abanico de 3 pósters: al pasar el ratón se abren, y el póster señalado sube al frente
export function PosterFan({
  srcs, spread, tilt, className, cardClass,
}: { srcs: string[]; spread: number; tilt: number; className: string; cardClass: string }) {
  return (
    <div className={`fan group relative ${className}`}>
      {srcs.map((src, i) => {
        const pos = i - 1;
        return (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            className={`fan-card absolute top-1/2 left-1/2 object-cover shadow-2xl ${cardClass}`}
            style={
              {
                "--x": `${pos * spread}px`,
                "--r": `${pos * tilt}deg`,
                "--x-open": `${pos * spread * 1.45}px`,
                "--r-open": `${pos * tilt * 1.6}deg`,
                "--y-open": pos === 0 ? "-10px" : "6px",
                "--s-open": pos === 0 ? "1.08" : "1",
                zIndex: pos === 0 ? 2 : 1,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
