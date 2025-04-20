import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kitman Yiu | Skills</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:site_name" content={"Kitman Yiu | Skills"} />
        <meta
          property="og:image"
          content={"https://skills.kitmanyiu.com/img/website.png"}
        />
        <meta property="og:url" content={"https://skills.kitmanyiu.com"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={"https://skills.kitmanyiu.com/img/website.png"}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
