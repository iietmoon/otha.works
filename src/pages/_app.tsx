import type { AppProps } from "next/app";
import "@/styles/core.scss";
import "bootstrap/scss/bootstrap.scss"
import "bootstrap-icons/font/bootstrap-icons.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
