import { useState } from "react";
import LogoIcon from "../../icons/common/logo";
import Button from "../button";

const contactInformation = {
  email: "support@aimedtech.org",
  phone: "+46 721748339",
  address: {
    street: "Universitetsvägen 8",
    city: "Stockholms County",
    zip: "114 18",
    country: "SE",
  },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = () => {
    // TODO: Send email
    console.log(email, message);
  };

  return (
    <footer className="bg-gradient-to-r from-blue-85 to-blue-50">
      <div className="flex flex-col py-16 w-full space-y-20 md:flex-row-reverse md:justify-between md:space-y-0 container">
        <section className="flex flex-col space-y-4 md:w-1/2">
          <h3 className="text-2xl text-color-on-blue font-bold">
            Send us a message
          </h3>
          <span className="bg-background-primary w-32 h-1 rounded-full" />
          <input
            type="email"
            id="email"
            name="email"
            onChange={onEmailChange}
            value={email}
            placeholder="Email"
            className="p-4 rounded-xl"
          />
          <textarea
            id="message"
            name="message"
            onChange={onMessageChange}
            value={message}
            placeholder="Your message"
            className="p-4 rounded-xl h-40 resize-none"
          />
          <Button onClick={onSubmit} isBlue={false} className="w-fit">
            Submit
          </Button>
        </section>
        <section className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl text-color-on-blue font-bold">Contacts</h3>
            <span className="bg-background-primary w-16 h-1 rounded-full" />
            <p className="text-lg text-color-on-blue font-bold">
              {contactInformation.phone}
            </p>
            <p className="text-lg text-color-on-blue">
              <b>{contactInformation.address.street}</b>
              <br />
              {contactInformation.address.city} {contactInformation.address.zip}
              , {contactInformation.address.country}
            </p>
            <p className="text-lg text-color-on-blue font-bold">
              {contactInformation.email}
            </p>
          </div>

          <div className="flex justify-between items-center md:flex-col md:space-y-32 md:items-start">
            <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <LogoIcon w={69} h={69} />
              <h2 className="text-xl text-color-on-blue font-bold">
                AI Medical <br />
                Technology
              </h2>
            </div>
            <div>
              <p className="text-color-on-blue text-sm">
                Website Privacy policy <br />
                Stockholm, Sweden <br /> © 2022 All rights reserved
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
