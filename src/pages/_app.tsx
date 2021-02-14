import 'src/styles/global.css'

import React from 'react'
import App from 'next/app'

import { ThemeContextProvider } from 'src/modules/Common/contexts/Theme/ThemeContexts'
import Store from 'src/store'

class AppProvider extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    )
  }
}

export default Store.withRedux(AppProvider)
