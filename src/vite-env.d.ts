/// <reference types="vite/client" />

// Vite imagetools declarations
declare module '*?width=*' {
  const src: string
  export default src
}

declare module '*.jpg?width=*' {
  const src: string
  export default src
}

declare module '*.png?width=*' {
  const src: string
  export default src
}

declare module '*.jpeg?width=*' {
  const src: string
  export default src
}

declare module '*.webp?width=*' {
  const src: string
  export default src
}

// Image imports with query parameters
declare module '*.webp?width=800' {
  const src: string;
  export default src;
}
