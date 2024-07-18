import Head from "next/head";
import HomePage from "../components/HomePage/homePage";
import { CartProvider } from "@/context/CartContext/CartContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Company Code Challenge" />
        <link rel="icon" href="/MKS.svg" />
      </Head>
      <main>
        <CartProvider>
          <HomePage />
        </CartProvider>
      </main>
    </>
  );
}
