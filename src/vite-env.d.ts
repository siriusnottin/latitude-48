/// <reference types="vite/client" />

// Vite imagetools declarations - allowed widths: 600, 800, 1920
declare module '*.webp?width=600' {
  const src: string;
  export default src;
}

declare module '*.webp?width=800' {
  const src: string;
  export default src;
}

declare module '*.webp?width=1920' {
  const src: string;
  export default src;
}
