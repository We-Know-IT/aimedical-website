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

  const mailData = {
    from: req.body.email,
    to: process.env.EMAIL_NAME || "",
    subject: `Message From ${req.body.email}`,
    text: `Message from: ${req.body.email} \n\nMessage: \n${req.body.message}`,
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
 * Checks if "email" and "message" is present in the body of the request and if they are strings.
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
    isValidMessage(req.body.message)
  );
};
