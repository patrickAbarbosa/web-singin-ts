import React from 'react'
import { ColorModeProvider, CSSReset, ThemeProvider as ChakraThemeProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'

import theme from 'src/styles/theme'

export const ThemeContextProvider: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: 'light' }}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </ThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}
