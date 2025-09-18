import { Button } from "../Button";
import { useRef, useState } from "react";
import { isValidEmail, isValidMessage } from "../../../utils/validation";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import ErrorIcon from "../../icons/common/Error";
import Image from "next/image";
import Typography from "../../common/Typography";
import { BsArrowRightShort, BsTelephone } from "react-icons/bs";
import { FiMail, FiMapPin } from "react-icons/fi";

const contactInformation = {
  email: "support@aimedtech.com",
  phone: "(+46) 08 522 351 91",
  address: {
    street: "Universitetsvägen 8",
    city: "Stockholms County",
    zip: "114 18",
    country: "SE",
  },
};

const inputErrorClasses = "border-error-dark border-2";
const privacyPolicyErrorMessage = "You must accept the privacy policy";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <ErrorIcon h={24} w={24} />
      <p className="font-haasGrotDisplay font-semibold text-error-dark">{message}</p>
    </div>
  );
};

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [messageErrorMsg, setMessageErrorMsg] = useState("");
  const [sendingErrorMsg, setSendingErrorMsg] = useState("");
  const [privacyPolicyErrorMsg, setPrivacyPolicyErrorMsg] = useState("");
  const [captchaErrorMsg, setCaptchaErrorMsg] = useState("");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (nameErrorMsg) {
      validateName(e.target.value);
    }
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailErrorMsg) {
      validateEmail(e.target.value);
    }
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (messageErrorMsg) {
      validateMessage(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const captcha = await getCaptcha();

    let formIsValid = true;
    if (!isValidEmail(email)) {
      validateEmail(email);
      formIsValid = false;
    }

    if (!isValidMessage(message)) {
      validateMessage(message);
      formIsValid = false;
    }

    if (!privacyPolicy) {
      setPrivacyPolicyErrorMsg(privacyPolicyErrorMessage);
      formIsValid = false;
    }

    if (!captcha) {
      setCaptchaErrorMsg("Passing the captcha is required");
      formIsValid = false;
    }

    if (!formIsValid) return;

    if (isSending) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, email, captcha }),
      });

      if (response.status === 200) {
        setEmail("");
        setMessage("");
        setSendingErrorMsg("");
        setPrivacyPolicyErrorMsg("");
        setPrivacyPolicy(false);
        setIsSent(true);
        resetCaptcha();
      } else {
        setSendingErrorMsg("Failed to send message, try again later");
        setIsSent(false);
      }
    } catch (e) {
      console.error(e);
      setSendingErrorMsg("Failed to send message, try again later");
      setIsSent(false);
    }
    setIsSending(false);
  };

  const validateName = (name: string) => {
    if (!name.trim()) {
      setNameErrorMsg("Name is required");
      return;
    }
    setNameErrorMsg("");
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailErrorMsg("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailErrorMsg("Email is invalid");
      return;
    }
    setEmailErrorMsg("");
  };

  const validateMessage = (message: string) => {
    if (!message) {
      setMessageErrorMsg("Message is required");
      return;
    }

    if (!isValidMessage(message)) {
      setMessageErrorMsg("Message is invalid");
      return;
    }
    setMessageErrorMsg("");
  };

  const hasPassedValidation = () => {
    return (
      !nameErrorMsg &&
      !emailErrorMsg &&
      !messageErrorMsg &&
      !privacyPolicyErrorMsg &&
      !captchaErrorMsg
    );
  };

  const onPrivacyPolicyChange = () => {
    if (privacyPolicy) setPrivacyPolicyErrorMsg(privacyPolicyErrorMessage);
    else setPrivacyPolicyErrorMsg("");
    setPrivacyPolicy((prev) => !prev);
  };

  const getCaptcha = async () => {
    const token = await recaptchaRef.current?.executeAsync();
    return token;
  };

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
  };

  const getButtonContent = () => {
    if (isSending) {
      return (
        <>
          <svg
            className="mr-3 inline h-6 w-6 animate-spin fill-primary text-gray-100"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
          Sending...
        </>
      );
    }
    return (
      <span className="flex items-center justify-center">
        Send request
      </span>
    );
  };

  return (
    <footer
      className=""
      id="contact">
      <div className="container">
        {/* Book a demo section */}
        <div className="mb-8 flex flex-col bg-darkgray rounded-lg p-8 items-start justify-between lg:flex-row lg:space-x-12">
          {/* Left side - Text content */}
          <div className="mb-8 lg:mb-0 lg:w-1/2 flex flex-col items-start">
            <Typography variant="h3" className="lg:mb-20 sm:mb-12 font-haasGrotDisplay font-extralight text-sm text-darkgray-active">
              Book a demo
            </Typography>
            <Typography variant="p" className="text-on-primary font-haasGrotDisplay font-extralight text-lg">
            Discover how Dermalyser doctors in detecting melanoma quickly and accurately. Leave your details, and we’ll arrange a demo at a time that works for you.
            </Typography>
          </div>
          
          {/* Right side - Contact form */}
          <div className="w-full lg:w-1/2">
            <form
              className="flex flex-col space-y-4 font-haasGrotDisplay font-extralight"
              onSubmit={onSubmit}
              aria-label="Contact form">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex-1 space-y-1">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={name}
                      onChange={onNameChange}
                      onBlur={(e) => validateName(e.target.value)}
                      className={
                        "font-haasGrotDisplay font-extralight w-full rounded-3xl bg-white/5 p-3 px-4 text-white placeholder-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" +
                        (nameErrorMsg ? " border-red-500" : "")
                      }
                      placeholder="Full name *"
                      required
                    />
                  {nameErrorMsg && <ErrorMessage message={nameErrorMsg} />}
                </div>
                <div className="flex-1 space-y-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={onEmailChange}
                    onBlur={(e) => validateEmail(e.target.value)}
                    value={email}
                    placeholder="Email address *"
                    className={
                      "font-haasGrotDisplay font-extralight w-full rounded-3xl bg-white/5 p-3 px-4 text-white placeholder-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" +
                      (emailErrorMsg ? "border-red-500" : "")
                    }
                    aria-label="Enter your email"
                    required
                  />
                  {emailErrorMsg && <ErrorMessage message={emailErrorMsg} />}
                </div>
              </div>
              <div className="space-y-1">
                <textarea
                  id="message"
                  name="message"
                  onChange={onMessageChange}
                  onBlur={(e) => validateMessage(e.target.value)}
                  value={message}
                  placeholder="Message"
                  className={
                    "font-haasGrotDisplay font-extralight h-32 w-full resize-none rounded-3xl bg-white/5 p-3 px-4 text-white placeholder-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary " +
                    (messageErrorMsg ? "border-red-500" : "")
                  }
                  aria-label="Enter your message"
                  required
                />
                {messageErrorMsg && <ErrorMessage message={messageErrorMsg} />}
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <input
                    id="privacy-policy"
                    type="checkbox"
                    name="privacy-policy"
                    onChange={onPrivacyPolicyChange}
                    checked={privacyPolicy}
                    className={
                      "h-4 w-4 rounded border-gray-300 bg-white" +
                      (privacyPolicyErrorMsg ? "border-red-500" : "")
                    }
                    aria-label="Agree to Privacy Policy"
                    required
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-on-primary">
                    I agree to the{" "}
                    <Link href="/privacy-policy" legacyBehavior>
                      <a
                        className="text-on-primary underline hover:text-on-primary-hover"
                        target="_blank"
                        rel="noopener noreferrer">
                        Privacy Policy
                      </a>
                    </Link>
                  </label>
                </div>
                {privacyPolicyErrorMsg && (
                  <ErrorMessage message={privacyPolicyErrorMsg} />
                )}
              </div>
              {captchaErrorMsg && <ErrorMessage message={captchaErrorMsg} />}
              <div className="flex w-full flex-col space-y-4">
                <Button
                  intent="white"
                  className="sm:w-full lg:w-1/4 px-2 py-3"
                  disabled={!hasPassedValidation() || isSending}
                  type="submit">
                  {getButtonContent()}
                </Button>
                {isSent && (
                  <Typography
                    variant="p"
                    className="flex items-center justify-center font-bold text-on-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      className="mr-2 fill-white">
                      <path d="M10.575 17.15 18.2 9.525l-1.95-1.95-5.675 5.675-2.825-2.825-1.925 1.95ZM12 22.875q-2.25 0-4.237-.85-1.988-.85-3.463-2.325t-2.325-3.462q-.85-1.988-.85-4.238 0-2.275.85-4.263.85-1.987 2.325-3.462t3.463-2.313Q9.75 1.125 12 1.125q2.275 0 4.262.837 1.988.838 3.463 2.313t2.313 3.462q.837 1.988.837 4.263t-.837 4.25q-.838 1.975-2.313 3.45t-3.463 2.325q-1.987.85-4.262.85Z" />
                    </svg>
                    Message sent
                  </Typography>
                )}
                {sendingErrorMsg && <ErrorMessage message={sendingErrorMsg} />}
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={
                  process.env.NEXT_PUBLIC_RECAPTCHA_EMAIL_SITE_KEY || "site-key"
                }
                size="invisible"
                aria-label="reCAPTCHA to prevent spam"
              />
            </form>
          </div>
        </div>

        {/* Footer content */}
        <div className="bg-background-secondary mb-8 flex flex-col gap-8 p-12 rounded-lg">
          {/* First row - Contact */}
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 border-b border-gray-300 pb-8">
            <Typography variant="h3" className="text-darkblue-page-active font-haasGrotDisplay font-normal md:w-1/2">
              Contact
            </Typography>
             <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:w-1/2">
               <div className="space-y-0 md:w-1/2">
                 <Typography
                   variant="p"
                   className="flex items-center text-primary underline font-haasGrotDisplay font-extralight hover:text-darkblue">
                   <a href={`tel:${contactInformation.phone}`}>
                     {contactInformation.phone}
                   </a>
                 </Typography>
                 <Typography
                   variant="p"
                   className="flex items-center text-primary underline font-haasGrotDisplay font-extralight hover:text-darkblue">
                   <a href={`mailto:${contactInformation.email}`}>
                     {contactInformation.email}
                   </a>
                 </Typography>
               </div>
               <div className="flex items-start md:w-1/2">
                 <Typography variant="p" className="text-darkblue font-haasGrotDisplay font-extralight">
                   {contactInformation.address.street}<br />
                   {contactInformation.address.city} {contactInformation.address.zip}, {contactInformation.address.country}
                 </Typography>
               </div>
             </div>
          </div>

          {/* Second row - Navigation */}
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 border-b border-gray-300 pb-8">
            <Typography variant="h3" className="text-darkblue-page-active font-haasGrotDisplay font-normal md:w-1/2">
              Explore website
            </Typography>
            <nav className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:w-1/2">
              <div className="space-y-1 md:w-1/2">
                <Link href="/dermalyser" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  Product
                </Link>
                <Link href="/clinical-validation" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  Clinical Studies  
                </Link>
                <Link href="/about" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  About us
                </Link>
                <Link href="/pressroom" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  News
                </Link>
              </div>
              <div className="space-y-1 md:w-1/2">
                <Link href="/privacy-policy" className="block text-darkblue font-haasGrotDisplay font-extralight hover:text-primary">
                  Integritetspolicy
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/aimedicaltechnology/"}
                  className="text-darkblue font-haasGrotDisplay font-extralight inline-flex items-center hover:text-primary">
                  LinkedIn
                </Link>
              </div>
            </nav>
          </div>

          {/* Bottom row - Additional info */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0">
            <div className="space-y-3 md:w-1/2">
               <Typography variant="p" className="text-darkblue-page-active font-haasGrotDisplay font-normal">
              All rights reserved AI Medical Technology, 2025
              </Typography>

            </div>
            
            <div className="space-y-3 md:w-1/2">
            <Typography variant="p" className="text-darkblue font-haasGrotDisplay font-extralight">
            Trusted by doctors, built on clinical evidence.
            </Typography>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
