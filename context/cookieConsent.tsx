import { createContext, useContext } from "react";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const CONSENT_COOKIE_KEY = "cookie_consent";

// Interpreted as days, can be a date object or a number of days from now
const CONSENT_COOKIE_EXPIRE_DATE = 365;

interface CookieConsentType {
  cookieConsent: boolean | undefined;
  setConsent: (consent: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentType>(
  {} as CookieConsentType
);

type Props = {
  children: React.ReactNode;
};

export function CookieConsentProvider({ children }: Props) {
  const [cookieConsent, setCookieConsent] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    if (Cookies.get(CONSENT_COOKIE_KEY) === undefined) {
      setCookieConsent(undefined);
      return;
    }
    const hasConsented = Cookies.get(CONSENT_COOKIE_KEY) === "true";
    setCookieConsent(hasConsented);
  }, []);

  const setConsent = (consent: boolean) => {
    setCookieConsent(consent);
    Cookies.set(CONSENT_COOKIE_KEY, consent.toString(), {
      expires: CONSENT_COOKIE_EXPIRE_DATE,
    });
  };

  return (
    <CookieConsentContext.Provider value={{ cookieConsent, setConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
}
