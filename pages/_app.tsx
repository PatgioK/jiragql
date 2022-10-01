import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Session } from "next-auth";
import { Layout } from '../components/layout'


function MyApp({ Component, pageProps, }: AppProps<{ session: Session; }>) {

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
