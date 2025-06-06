declare module '*.webp?width=1920' {
  const src: string;
  export default src;
}

declare module '*.webp?width=800' {
  const src: string;
  export default src;
}

declare module '*.webp?width=600' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
} 