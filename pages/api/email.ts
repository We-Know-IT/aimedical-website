import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import { isValidEmail, isValidMessage } from "../../utils/validation";

const emailConfig = {
  host: process.env.EMAIL_HOST,
  port: 587, // Use port 587 for TLS instead of 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_PASS,
  },
};

/**
     * The structure of response from the veirfy API is
     * {
     *  "success": true|false,
     *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
     *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
     *  "error-codes": [...]        // optional
      }
*/
type reCaptchaResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  "error-codes": string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if email environment variables are set
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_NAME || !process.env.EMAIL_PASS) {
    console.error('Missing email environment variables:', {
      EMAIL_HOST: !!process.env.EMAIL_HOST,
      EMAIL_NAME: !!process.env.EMAIL_NAME,
      EMAIL_PASS: !!process.env.EMAIL_PASS
    });
    return res.status(500).json({ message: "Email configuration missing" });
  }

  const transporter = createTransport(emailConfig);
  if (!isValidPostData(req)) {
    res.status(400).end();
    return;
  }
  const { name, jobTitle, company, email, message, captcha } = req.body;
  try {
    // Bypass reCAPTCHA for testing (REMOVE IN PROD!!!!!!)
    if (captcha === 'bypass-for-testing') {
      console.log('⚠️  Bypassing reCAPTCHA for testing purposes');
    } 
    // REMOVE IN PROD!!!!!!
    else {
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
      const captchaValidation: reCaptchaResponse = await response.json();

      if (!captchaValidation.success) {
        return res.status(422).json({
          message: "Unproccesable request, Invalid captcha code",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }

  const mailData = {
    from: email,
    to: process.env.EMAIL_NAME || "",
    subject: `New Demo Request from ${name} - ${company}`,
    text: `New Demo Request Received

Contact Information:
==================
Name: ${name}
Job Title: ${jobTitle}
Company: ${company}
Email: ${email}

Message:
========
${message}

---
This is a lead from the website contact form.
Timestamp: ${new Date().toLocaleString()}`,
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
    req.body.name &&
    req.body.jobTitle &&
    req.body.company &&
    req.body.email &&
    req.body.message &&
    typeof req.body.name === "string" &&
    typeof req.body.jobTitle === "string" &&
    typeof req.body.company === "string" &&
    typeof req.body.email === "string" &&
    isValidEmail(req.body.email) &&
    typeof req.body.message === "string" &&
    isValidMessage(req.body.message) &&
    req.body.captcha
  );
};
