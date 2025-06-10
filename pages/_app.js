// pages/_app.js
import '../styles/globals.css'
import Head from 'next/head' // این خط باید تنها یک بار وجود داشته باشد

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Google Fonts import for Vazirmatn */}
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp