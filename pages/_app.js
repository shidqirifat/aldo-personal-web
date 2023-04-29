import Head from 'next/head';
import 'styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Raffialdo Bayu - Personal Website</title>
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/favicon.svg"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
