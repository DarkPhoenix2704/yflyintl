import { Footer } from "@app/components/Footer";
import { Navbar } from "@app/components/Navbar";
import "@app/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
import { DefaultSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="YFLY International Study Abroad"
        description="Let's Elevate Your Higher Education Journey Together, Unlock New Heights with Our Expert Consultations!"
        openGraph={{
          type: "website",
          siteName: "YFLY International Study Abroad",
          locale: "en_IE",
          url: "https://yflyinternational.com/",
          images: [
            {
              url: "https://yflyinternational.com/seo-og.svg",
              width: 800,
              height: 600,
              alt: "YFLY International Study Abroad",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://yflyinternational.com/favicon.png",
          },
        ]}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "YFLY International Study Abroad, YFly, YFLY, Study Abroad, Study, Germany",
          },
        ]}
      />

      <div className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </div>
    </>
  );
}
