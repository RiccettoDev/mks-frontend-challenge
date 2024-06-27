import Head from "next/head";

import HomePage from "./homePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Company Code Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
