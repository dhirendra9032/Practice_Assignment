import '../styles/globals.css'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return(
  <>
      <Head>
        <title>Todo App Next Js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="data:image/png;base64,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" />
      </Head>

     <Component {...pageProps} />

  </>
  )}

export default MyApp