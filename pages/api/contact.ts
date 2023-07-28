import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { name, email, message, subject } = req.body;
    if (!name || !email || !message || !subject) {
      return res.status(422).json({ error: "Invalid input" });
    }
    const newMessage = { name, email, message, subject };
    await resend.emails.send({
      from: "web@mails.yflyinternational.com",
      to: "info@yflyinternational.com",
      subject: "New message from " + name,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSubject: ${subject}`,
    });
    console.log(newMessage);
    return res.status(201).json({ message: "Successfully stored message!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};

export default handler;
