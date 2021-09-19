import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../global/styles/global';
import { DefaultTheme } from '../global/theme/Default'
import theme from '../global/styles/theme'

import { CartProvider } from '../context/cartContext';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
      <ThemeProvider theme={theme}>
        <DefaultTheme>
          <Component {...pageProps} />
        </DefaultTheme>
        <GlobalStyle />
      </ThemeProvider>
      </CartProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
