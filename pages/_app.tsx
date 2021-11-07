import React from 'react'
import { StyleReset, ThemeProvider } from 'atomize';
import { Provider as StyletronProvider } from 'styletron-react'
import { Theme } from '../theme';
import { styletron } from './../styletron';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client'

const theme = Theme

function MyApp({ Component, pageProps }: AppProps) {
  let children = (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )

  return (
    <StyletronProvider value={styletron}>
      <StyleReset />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider >
    </StyletronProvider>
  )
}

export default MyApp
