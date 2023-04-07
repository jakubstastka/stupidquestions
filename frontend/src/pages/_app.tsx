import Layout from '@/components/Layout';
import '../styles/tailwind.css';
import type { AppProps } from 'next/app'
import HeaderHero from '@/components/HeaderHero';
import NavBar from '@/components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <HeaderHero />
        <NavBar />
        <Component {...pageProps} />
      </Layout>
  )
}
