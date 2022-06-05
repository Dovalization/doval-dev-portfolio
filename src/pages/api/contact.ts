// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SendGridServices } from "@lib/services/sendgrid";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

interface SubcriptionFormFields {
  email: string;
  name: string;
  message: string;
  recaptcha: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, message, recaptcha }: SubcriptionFormFields = req.body;

  async function verifyRecaptcha(token: string) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
    const response = await axios.post(url);
    const data = response.data;
    if (!data.success) {
      throw new Error("Recaptcha failed");
    }
    return data.success;
  }

  const payload = {
    name,
    to: "me@doval.dev",
    from: email,
    text: message,
  };

  try {
    const captchaSuccess = await verifyRecaptcha(recaptcha);

    if (!captchaSuccess) {
      return res.status(400).json({
        message: "Recaptcha failed",
      });
    }

    const response = await SendGridServices.SendEmail(
      payload.to,
      payload.from,
      payload.text,
      payload.name
    );
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(JSON.stringify(err, null, 2));
  }
}
