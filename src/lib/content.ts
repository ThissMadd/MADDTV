// Textos del sitio. Edita libremente.

// Imágenes (Unsplash) usadas como pósters genéricos
export const posters = [
  "1536440136628-849c177e76a1", "1478720568477-152d9b164e26", "1485846234645-a62644f84728",
  "1440404653325-ab127d49abc1", "1517604931442-7e0c8ed2963c", "1594909122845-11baa439b7bf",
  "1518676590629-3dcbd9c5a5c9", "1505686994434-e3cc5abf1330", "1524985069026-dd778a71c7b4",
  "1503454537195-1dcabb73ffb9", "1546182990-dffeafbe841d", "1451187580459-43490279c0fa",
  "1535016120720-40c646be5580", "1598899134739-24c46f58b8c0", "1574267432553-4b4628081c31",
];

export const sportImgs = [
  "1574629810360-7efbbe195018", "1522778119026-d647f0596c20", "1431324155629-1a6deb1dec8d",
  "1579952363873-27f3bade9f55", "1551958219-acbc608c6377", "1459865264687-595d652de67e",
  "1517466787929-bc90951d0974", "1560272564-c83b66b1ad12", "1606925797300-0b35e9d1794e",
  "1504450758481-7338eba7524a",
];

// Fila 1 y 2 del carrusel "Contenido incluido"
export const contentRow1 = [
  { t: "Cine 4K", i: "clapper" }, { t: "Series", i: "tv" }, { t: "Deportes", i: "trophy" },
  { t: "Canales España", i: "flag" }, { t: "Estrenos", i: "sparkles" }, { t: "Documentales", i: "globe" },
  { t: "Infantil", i: "smile" }, { t: "Noticias 24h", i: "radio" },
];
export const contentRow2 = [
  { t: "Fútbol", i: "ball" }, { t: "Anime", i: "sparkles" }, { t: "Música", i: "music" },
  { t: "Internacional", i: "globe" }, { t: "Motor", i: "flag" }, { t: "Reality", i: "tv" },
  { t: "Clásicos", i: "clapper" }, { t: "Latino", i: "radio" },
];

export const sportsRow = [
  "Fútbol", "Fútbol europeo", "Copas nacionales", "Motor", "Baloncesto", "Tenis",
  "Combate", "Ciclismo", "Golf", "Rugby",
];

export const catalog = [
  { i: "ball", t: "Fútbol", d: "Fútbol español, ligas europeas y más competiciones." },
  { i: "flag", t: "Fórmula 1", d: "Entrenamientos, clasificación y grandes premios." },
  { i: "bike", t: "MotoGP", d: "Toda la temporada de motor y grandes carreras." },
  { i: "hand", t: "UFC y boxeo", d: "Grandes noches de combate y eventos destacados." },
  { i: "dribbble", t: "NBA", d: "Temporada regular, playoffs y finales." },
  { i: "clapper", t: "Películas", d: "Estrenos, clásicos y cine reciente." },
  { i: "tv", t: "Series", d: "Series organizadas y contenido añadido regularmente." },
  { i: "smile", t: "Infantil", d: "Dibujos y contenido familiar." },
  { i: "sparkles", t: "Anime", d: "Títulos populares y novedades." },
  { i: "music", t: "Entretenimiento", d: "Documentales, música y programas." },
];

export const why = [
  { i: "shield", t: "Garantía de soporte", d: "Si tienes un problema técnico, el soporte revisa configuración, app, dispositivo y conexión." },
  { i: "grid", t: "Catálogo amplio", d: "Canales, deportes, películas, series y contenido internacional en una sola experiencia." },
  { i: "zap", t: "Inicio rápido", d: "Calidad y estabilidad optimizadas para tu conexión, dispositivo y aplicación elegida." },
  { i: "refresh", t: "Instalación guiada", d: "Recibes instrucciones y ayuda para configurar tu dispositivo compatible." },
  { i: "headset", t: "Soporte por WhatsApp", d: "Preguntas, instalación y soporte desde el canal oficial de MADDTV." },
  { i: "monitor", t: "Hasta HD/4K y replay", d: "SD, HD, Full HD y 4K según la fuente, con guía de programas y replay cuando esté disponible." },
];

export const steps = [
  { t: "Elige tu plan", d: "Selecciona la duración que mejor se adapte a ti." },
  { t: "Confirma de forma segura", d: "Consulta disponibilidad y método de pago con soporte oficial." },
  { t: "Empieza a mirar", d: "Recibe instrucciones, configura tu app y empieza a usar MADDTV." },
];

export const comparison = [
  { c: "Coste anual", us: "Desde 59 €", them: "Normalmente mensual", bad: false },
  { c: "Compromiso", us: "Pago por periodo", them: "Contrato frecuente", bad: false },
  { c: "Contenido disponible", us: "Amplio catálogo", them: "Paquetes limitados", bad: false },
  { c: "Películas y series", us: "Incluidas según plan", them: "Paquetes separados", bad: false },
  { c: "Equipo necesario", us: "App compatible", them: "Decodificador o técnico", bad: true },
  { c: "Activación", us: "Rápida con soporte", them: "Puede tardar días", bad: false },
  { c: "Soporte postventa", us: "Incluido", them: "Variable", bad: true },
];

// Estilo tipográfico para imitar cada marca sin usar sus logos
export const deviceBrands: { t: string; cls: string }[] = [
  { t: "Apple TV", cls: "font-semibold" },
  { t: "Windows", cls: "font-semibold" },
  { t: "SAMSUNG", cls: "font-bold tracking-[0.18em]" },
  { t: "LG", cls: "font-bold text-lg sm:text-3xl" },
  { t: "SONY", cls: "font-serif font-bold tracking-[0.2em]" },
  { t: "androidtv", cls: "font-semibold lowercase" },
  { t: "fire tv", cls: "font-light text-base sm:text-2xl" },
  { t: "Roku", cls: "font-black text-base sm:text-2xl" },
  { t: "Chromecast", cls: "font-medium" },
  { t: "Hisense", cls: "font-bold italic" },
  { t: "TCL", cls: "font-black text-lg sm:text-3xl tracking-wide" },
  { t: "PHILIPS", cls: "font-bold tracking-[0.12em]" },
  { t: "TOSHIBA", cls: "font-bold tracking-[0.1em]" },
  { t: "Xiaomi", cls: "font-light sm:text-xl" },
  { t: "HUAWEI", cls: "font-semibold tracking-[0.15em]" },
  { t: "Lenovo", cls: "font-semibold sm:text-xl" },
  { t: "VIZIO", cls: "font-light tracking-[0.25em] sm:text-xl" },
  { t: "FORMULER", cls: "font-bold italic tracking-[0.2em] text-[10px] sm:text-sm" },
  { t: "SHARP", cls: "font-black tracking-wider" },
  { t: "MAG Box", cls: "font-bold" },
  { t: "Android", cls: "font-medium" },
];

export const devices = ["Smart TV", "Android TV", "Fire TV", "Apple TV", "iPhone / iPad", "Android", "MAG", "PC / Mac", "Otro"];

// ⚠️ Sustituye por opiniones reales de tus clientes antes de publicar.
export const reviews = [
  { n: "Mario G.", c: "Madrid", t: "Vi la Champions en la Smart TV del salón sin un solo corte. La imagen se ve increíble.", img: "/reviews/1.webp" },
  { n: "Lucía P.", c: "Sevilla", t: "Muchísimas películas y series, y todo actualizado. Me lo instalaron por WhatsApp en 10 minutos.", img: "/reviews/2.webp" },
  { n: "Elena V.", c: "Murcia", t: "Los partidos europeos se ven fluidos y nítidos. Respuesta rápida cuando tuve una duda.", img: "/reviews/3.webp" },
  { n: "Sergio L.", c: "Zaragoza", t: "La Fórmula 1 en directo va fluida y en muy buena calidad. Justo lo que buscaba.", img: "/reviews/4.webp" },
  { n: "Andrea S.", c: "Alicante", t: "La lista de canales y la guía de programas están muy bien organizadas. Todo funciona perfecto.", img: "/reviews/5.webp" },
  { n: "Javier R.", c: "Valencia", t: "Los partidos del fin de semana se ven estables y con buena calidad. Muy recomendable.", img: "/reviews/6.webp" },
];

export const trust = [
  { i: "shield", t: "Soporte postventa", d: "Revisión de incidencias según la política de soporte." },
  { i: "lock", t: "Pago seguro", d: "Compra clara y métodos de pago disponibles según confirmación." },
  { i: "headset", t: "Soporte oficial", d: "Atención por WhatsApp para instalación y dudas." },
  { i: "zap", t: "Activación rápida", d: "Instrucciones y activación rápida tras confirmar el pedido." },
];

export const guideCards = [
  { i: "monitor", t: "Canales españoles", d: "Canales nacionales y autonómicos, además de miles de canales internacionales." },
  { i: "trophy", t: "Todos los deportes en directo", d: "Fútbol, ligas europeas, Fórmula 1, MotoGP, tenis, baloncesto y mucho más." },
  { i: "zap", t: "Funciona en cualquier dispositivo", d: "Compatible con aplicaciones IPTV mediante Xtream Codes o M3U — en Smart TV, Firestick, móvil, tablet y PC." },
  { i: "shield", t: "Seguro y transparente", d: "Precio fijo, pago único, sin contrato y con garantía de devolución del dinero." },
];

export const faqs = [
  { q: "¿El precio es mensual? ¿Se me cobrará de nuevo?", a: "No. MADDTV funciona con pago único para el periodo elegido. No hay cuotas mensuales automáticas ni renovación sin confirmación: pagas una vez y obtienes acceso durante tu plan IPTV." },
  { q: "¿Cómo se suscribe uno a IPTV?", a: "Elige tu plan, pulsa «Ordenar ahora» y completa el pedido. Te enviamos los datos de acceso y una guía de instalación para tu dispositivo por WhatsApp o email." },
  { q: "¿Puedo pagar mi suscripción con tarjeta bancaria?", a: "Sí. Aceptamos tarjeta, Apple Pay, Google Pay, Bizum y PayPal. Te confirmamos el método disponible al procesar tu pedido." },
  { q: "¿Cómo recibo mi suscripción?", a: "Tras confirmar el pago recibes tus datos de acceso en pocos minutos por WhatsApp y email, junto con las instrucciones de instalación." },
  { q: "¿Puedo usar IPTV en varios dispositivos simultáneamente?", a: "Cada suscripción incluye 1 pantalla activa a la vez. Puedes instalar la aplicación en todos tus dispositivos, pero solo reproducir en uno al mismo tiempo." },
  { q: "¿Necesito una antena parabólica para usar IPTV?", a: "No. Solo necesitas conexión a internet (recomendamos 15 Mbps o más para 4K) y un dispositivo compatible." },
  { q: "¿Este servicio IPTV funciona en mi país?", a: "El servicio está optimizado para España, pero funciona en cualquier país con una conexión a internet estable." },
  { q: "¿MADDTV funciona en Smart TV, Fire TV y Android TV?", a: "Sí. Funciona en Smart TV (Samsung, LG, etc.), Fire TV, Android TV, Apple TV, móviles, tablets, PC y reproductores como MAG o Formuler." },
  { q: "¿Qué incluye una suscripción IPTV España de MADDTV?", a: "Canales en directo, deportes, películas y series bajo demanda, guía EPG, calidad hasta 4K, soporte por WhatsApp y garantía de devolución." },
];
