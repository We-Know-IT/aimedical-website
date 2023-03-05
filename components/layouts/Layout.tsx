import CookieConsent from "../general/cookie-consent/CookieConsentBanner";
import Footer from "../general/footer";
import Navbar from "../general/navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <CookieConsent />
    </>
  );
}
