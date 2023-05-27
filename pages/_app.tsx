import "@app/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>YFly International Study Abroad</title>
      <Component {...pageProps} />
    </>
  );
}
