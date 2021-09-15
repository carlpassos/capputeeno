import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../global/styles/global';

import { DefaultTheme } from '../global/theme/Default'
import theme from '../global/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultTheme>
        <Component {...pageProps} />
      </DefaultTheme>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
