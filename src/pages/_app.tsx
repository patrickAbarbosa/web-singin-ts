import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import appTheme from 'src/styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={appTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
