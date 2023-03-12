import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="" />
       <style>
	.office-banner img {
    width: 100%;
    height: auto;
}
body {
    background-color: #000 !important;
}
</style>
      </main>

      <Footer />
    </div>
  )
}
