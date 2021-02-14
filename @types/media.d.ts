declare module '*.svg' {
  export interface SvgProps {
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    xmlns?: string
  }

  export type SvgComponent = import('react').FC<SvgProps>

  const value: SvgComponent

  export default value
}

declare module '*.jpeg' {
  const value: string
  export = value
}

declare module '*.jpg' {
  const value: string
  export = value
}

declare module '*.png' {
  const value: string
  export = value
}

declare module '*.gif' {
  const value: string
  export = value
}

declare module '*.ico' {
  const value: string
  export = value
}

declare module '*.webp' {
  const value: string
  export = value
}

declare module '*.jp2' {
  const value: string
  export = value
}
