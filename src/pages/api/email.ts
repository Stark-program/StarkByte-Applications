import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import * as dotenv from "dotenv";
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email: string;
    subject: string;
    message: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const email: string = req.body.email;
  const subject: string = req.body.subject;
  const message: string = req.body.message;
  console.log(req.body);

  const emailToSend = {
    to: "support@starkbyteapps.com",
    from: "cstark@starkbyteapps.com",
    subject: subject,
    text: message + " " + "Sender email: " + email,
  };

  try {
    // const emailSent = await sgMail.send(emailToSend);
    const emailSent = true;
    console.log("this is emailsent", emailSent);
    if (emailSent) {
      return res.status(200).json({ message: "Email sent successfully" });
    }
    return res.status(500).json({ message: "Email failed to send" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email failed to send" });
  }
}
