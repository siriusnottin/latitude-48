/// <reference types="vite/client" />

// Vite imagetools declarations
declare module '*?w=*&webp&img' {
  const src: string
  export default src
}

declare module '*.jpg?w=*&webp&img' {
  const src: string
  export default src
}

declare module '*.png?w=*&webp&img' {
  const src: string
  export default src
}

declare module '*.jpeg?w=*&webp&img' {
  const src: string
  export default src
}
