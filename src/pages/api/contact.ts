// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SendGridServices } from "@lib/services/sendgrid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, message } = req.body;

  const payload = {
    name,
    to: "me@doval.dev",
    from: email,
    text: message,
  };

  try {
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
