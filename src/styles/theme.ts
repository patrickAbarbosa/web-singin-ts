import { ChakraTheme, ColorHues, theme } from '@chakra-ui/react'

type AppTheme = ChakraTheme & {
  colors: {
    neutral: Partial<ColorHues>
    primary: Partial<ColorHues>
    error: string
  }
}

const appTheme: AppTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  components: {
    ...theme.components,
    Heading: {
      ...theme.components.Heading,
      baseStyle: {
        ...theme.components.Heading.baseStyle,
        fontWeight: '400',
      },
    },
  },
  colors: {
    ...theme.colors,
    neutral: {
      50: '#E5E5E5',
      100: '#9FABBC',
      200: '#5d65af',
      300: '#989FDB',
      400: '#45468b',
      500: '#3e407e',
      600: '#383E71',
    },
    primary: {
      50: '#ab28c0',
      100: '#ab28c0',
      200: '#ab28c0',
      300: '#9D25B0',
      400: '#45468b',
      500: '#3e407e',
      600: '#383e71',
    },
    error: '#FF377F',
  },
}

export default appTheme
