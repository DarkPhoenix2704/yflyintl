import { Footer } from "@app/components/Footer";
import { Navbar } from "@app/components/Navbar";
import "@app/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>YFLY International Study Abroad</title>
      <div className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </div>
    </>
  );
}
