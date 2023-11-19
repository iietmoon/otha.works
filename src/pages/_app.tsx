import '@/styles/css/style.css'
import '@/styles/scss/custom.scss'
import Layout from '@/pages/layout'

export default function App({ Component, pageProps }: any) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
