import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Session } from "next-auth";
import { Layout } from '../components/layout'
import { ApolloProvider } from '@apollo/client';
import  apolloClient from '../lib/apollo'


function MyApp({ Component, pageProps, }: AppProps<{ session: Session; }>) {

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ApolloProvider>
    </SessionProvider>
  )
}

export default MyApp
