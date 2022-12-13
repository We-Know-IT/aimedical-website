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
      <div className="container flex w-full flex-col space-y-20 py-16 md:flex-row-reverse md:justify-between md:space-y-0">
        <section className="flex flex-col space-y-4 md:w-1/2">
          <h3 className="text-2xl font-bold text-color-on-blue">
            Send us a message
          </h3>
          <span className="h-1 w-32 rounded-full bg-background-primary" />
          <input
            type="email"
            id="email"
            name="email"
            onChange={onEmailChange}
            value={email}
            placeholder="Email"
            className="rounded-xl p-4"
          />
          <textarea
            id="message"
            name="message"
            onChange={onMessageChange}
            value={message}
            placeholder="Your message"
            className="h-40 resize-none rounded-xl p-4"
          />
          <Button onClick={onSubmit} isBlue={false} className="w-fit">
            Submit
          </Button>
        </section>
        <section className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-color-on-blue">Contacts</h3>
            <span className="h-1 w-16 rounded-full bg-background-primary" />
            <p className="text-lg font-bold text-color-on-blue">
              {contactInformation.phone}
            </p>
            <p className="text-lg text-color-on-blue">
              <b>{contactInformation.address.street}</b>
              <br />
              {contactInformation.address.city} {contactInformation.address.zip}
              , {contactInformation.address.country}
            </p>
            <p className="text-lg font-bold text-color-on-blue">
              {contactInformation.email}
            </p>
          </div>

          <div className="flex items-center justify-between md:flex-col md:items-start md:space-y-32">
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <LogoIcon w={69} h={69} />
              <h2 className="text-xl font-bold text-color-on-blue">
                AI Medical <br />
                Technology
              </h2>
            </div>
            <div>
              <p className="text-sm text-color-on-blue">
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
