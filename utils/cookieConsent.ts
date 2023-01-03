import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const CONSENT_COOKIE_KEY = "cookie_consent";
const CONSENT_COOKIE_EXPIRE_DATE = 365;

export const useCookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const checkCookieConsent = () => {
      console.log("useCookieConsent useEffect");
      if (Cookies.get(CONSENT_COOKIE_KEY) === undefined) {
        setCookieConsent(undefined);
        return;
      }
      const hasConsented = Cookies.get(CONSENT_COOKIE_KEY) === "true";
      setCookieConsent(hasConsented);
    };
    checkCookieConsent();
  }, []);

  const setConsent = (consent: boolean) => {
    setCookieConsent(consent);
    Cookies.set(CONSENT_COOKIE_KEY, consent.toString(), {
      expires: CONSENT_COOKIE_EXPIRE_DATE,
    });
  };

  return { cookieConsent, setConsent };
};
