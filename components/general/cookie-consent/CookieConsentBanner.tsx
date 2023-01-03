import { useCookieConsent } from "../../../context/cookieConsent";

export default function CookieConsent() {
  const { cookieConsent, setConsent } = useCookieConsent();

  let showBanner = true;
  if (cookieConsent === true || cookieConsent === false) {
    showBanner = false;
  }

  if (!showBanner) {
    return null;
  }

  const onAccept = () => {
    setConsent(true);
  };

  const onDecline = () => {
    setConsent(false);
  };

  return (
    <div className="fixed bottom-0 left-0 z-20 w-full bg-background-primary p-4 shadow-xl">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <p className="text-md text-primary">
          We use third-party cookies to improve your experience on our website.
          By browsing this website, you agree to our use of cookies.
        </p>
        <div className="mt-4 flex flex-row gap-4 md:mt-0">
          <button
            className="rounded-md bg-primary py-2 px-4 text-sm text-background-primary hover:bg-primary-hover active:bg-primary-active"
            onClick={onAccept}>
            Accept
          </button>
          <button
            className="rounded-md bg-background-secondary py-2 px-4 text-sm text-primary hover:bg-background-secondary-dark"
            onClick={onDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
