// Eventos estándar de Meta Pixel (se ignoran si el píxel aún no ha cargado)

type FbqParams = Record<string, string | number>;

declare global {
  interface Window {
    fbq?: (cmd: "track" | "init", event: string, params?: FbqParams) => void;
  }
}

export function trackPixel(event: "PageView" | "ViewContent" | "InitiateCheckout", params?: FbqParams) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", event, params);
}
