import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from "../components/app-layout";

import 'antd/dist/antd.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <AppLayout><Component {...pageProps} /></AppLayout>
}

export default MyApp
