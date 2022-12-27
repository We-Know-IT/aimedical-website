import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

const emailConfig = {
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "SÄTT IN DIN EMAIL",
    pass: "SÄTT IN DITT LÖSENORD",
  },
  secure: true,
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const transporter = createTransport(emailConfig);

  if (!isValidPostData(req)) {
    res.status(400).end();
  }

  const mailData = {
    from: "lovejansson.94@gmail.com",
    to: "lovejansson.94@gmail.com",
    subject: `Message From ${req.body.email}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  const response = await transporter.sendMail(mailData);

  if (response.accepted.includes(mailData.to)) {
    res.status(200).end();
  } else {
    console.log(response);
    res.status(500).end();
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
    typeof req.body.message === "string"
  );
};
