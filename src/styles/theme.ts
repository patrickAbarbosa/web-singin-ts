import { theme } from '@chakra-ui/react'

const appTheme = {
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
        fontWeight: 400,
      },
    },
  },
  colors: {
    ...theme.colors,
    neutral: {
      50: '#E5E5E5',
      100: '#9FABBC',
      300: '#989FDB',
      600: '#383E71',
    },
  },
  ...theme.sizes,
  7: '1.75rem',
  9: '2.25rem',
  11: '2.75rem',
  13: '3.25rem',
  18: '4.5rem',
  27: '6.75rem',
  35: '8.75rem',
  container: '1140px',
}

export default appTheme
