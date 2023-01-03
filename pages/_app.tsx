import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/layout";
import { CookieConsentProvider } from "../context/cookieConsent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookieConsentProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookieConsentProvider>
  );
}
