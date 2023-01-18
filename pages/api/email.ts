import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import { isValidEmail, isValidMessage } from "../../utils/validation";

const emailConfig = {
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = createTransport(emailConfig);
  if (!isValidPostData(req)) {
    res.status(400).end();
    return;
  }
  const { email, message, captcha } = req.body;
  try {
    // Ping the google recaptcha verify API to verify the captcha code you received
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_EMAIL_SECRECT_KEY}&response=${captcha}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );
    const captchaValidation = await response.json();
    /**
     * The structure of response from the veirfy API is
     * {
     *  "success": true|false,
     *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
     *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
     *  "error-codes": [...]        // optional
      }
     */
    if (!captchaValidation.success) {
      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }

  const mailData = {
    from: email,
    to: process.env.EMAIL_NAME || "",
    subject: `Message From ${email}`,
    text: `Message from: ${email} \n\nMessage: \n${message}`,
  };

  const response = await transporter.sendMail(mailData);

  if (response.accepted.includes(mailData.to)) {
    res.status(200).end();
    return;
  } else {
    console.log(response);
    res.status(500).end();
    return;
  }
}

/**
 *
 * Checks if "email" and "message" is present in the body of the request and if they are strings and if they are valid. Also checks if the captcha is present.
 *
 * @param req
 * @returns true/false if the conditions hold or not.
 */
const isValidPostData = (req: NextApiRequest) => {
  return (
    req.body.email &&
    req.body.message &&
    typeof req.body.email === "string" &&
    isValidEmail(req.body.email) &&
    typeof req.body.message === "string" &&
    isValidMessage(req.body.message) &&
    req.body.captcha
  );
};
