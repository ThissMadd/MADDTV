import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Fija la raíz del proyecto: evita que Turbopack elija otra carpeta si el servidor tiene otro lockfile más arriba
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
