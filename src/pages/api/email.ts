import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import * as dotenv from "dotenv";
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email: string = req.body.email;
  const subject: string = req.body.subject;
  const message: string = req.body.message;

  const emailToSend = {
    to: "support@starkbyteapps.com",
    from: "cstark@starkbyteapps.com",
    subject: subject,
    text: message + " " + "Sender email: " + email,
  };

  try {
    const emailSent = await sgMail.send(emailToSend);
    if (emailSent) {
      return res
        .status(200)
        .send({ status: 201, message: "Email sent successfully" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Email failed to send" });
  }
  console.log(req.body);
}
