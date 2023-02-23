import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined");
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}
interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email: string;
    subject: string;
    message: string;
    serviceType: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const email: string = req.body.email;
  const subject: string = req.body.subject;
  const message: string = req.body.message;
  const serviceType: string = req.body.serviceType;
  console.log(req.body);

  const emailToSend = {
    to: "support@starkbyteapps.com",
    from: "cstark@starkbyteapps.com",
    subject: subject,
    text:
      "Service-Type: " +
      serviceType +
      "\n" +
      "Sender email: " +
      email +
      "\n" +
      message,
  };

  try {
    await sgMail.send(emailToSend);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email failed to send" });
  }
}
