import Cabecalho from '@/components/Cabecalho/Cabecalho'
import GlobalStyles from '@/styles/globalStyles'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'
import {toast, ToastContainer} from 'react-toastify'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Cabecalho />
        <ToastContainer />
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>

    </>
  )
}
