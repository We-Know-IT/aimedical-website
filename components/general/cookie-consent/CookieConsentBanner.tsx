import Link from "next/link";
import { useCookieConsent } from "../../../context/cookieConsent";

const cookiePolicyLink =
  "https://www.freeprivacypolicy.com/live/01bdc586-6bc3-418e-b261-a4e428c21427";

export default function CookieConsent() {
  const { cookieConsent, setConsent, fetchingConsent } = useCookieConsent();
  let showBanner = false;
  if (cookieConsent === undefined && !fetchingConsent) {
    showBanner = true;
  }

  if (!showBanner) {
    return null;
  }

  const onAllowAll = () => {
    setConsent(true);
  };

  const onAllowNecessary = () => {
    setConsent(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black/50">
      <div className="fixed bottom-0 left-0 z-20 w-full bg-background-primary p-4 shadow-xl">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-md text-primary">
            We use third-party cookies to improve your experience on our
            website. By browsing this website, you agree to our use of cookies.
            Read more about our{" "}
            <Link
              href={cookiePolicyLink}
              className="underline hover:text-primary-hover">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-row gap-4 md:mt-0">
            <button
              className="whitespace-nowrap rounded-md bg-primary py-2 px-4 text-sm text-background-primary hover:bg-primary-hover active:bg-primary-active"
              onClick={onAllowAll}>
              Allow All
            </button>
            <button
              className="whitespace-nowrap rounded-md bg-background-secondary py-2 px-4 text-sm text-primary hover:bg-background-secondary-dark"
              onClick={onAllowNecessary}>
              Allow Necessary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
