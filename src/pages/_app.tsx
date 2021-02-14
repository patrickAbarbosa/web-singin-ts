import 'src/styles/global.css'

import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import { ThemeContextProvider } from 'src/modules/Common/contexts/Theme/ThemeContexts'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default App
