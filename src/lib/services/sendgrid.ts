import sendgrid from "@sendgrid/mail";

const getClient = () => {
  if (process.env.SENDGRID_API_KEY) {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    console.log("SendGrid API Key set");
  }
  return sendgrid;
};

const client = getClient();

export const sendEmail = async (
  to: string,
  from: string,
  text: string,
  sender: string
) => {
  const msg = {
    to,
    from: "me@doval.dev",
    subject: `New message from ${from} on doval.dev`,
    text: `Sent from ${sender} - ${from} on doval.dev\n\n${text}`,
  };

  try {
    const response = await client.send(msg);
    return response;
  } catch (err) {
    console.error(JSON.stringify(err, null, 2));
    return new Error("Error sending email");
  }
};

export namespace SendGridServices {
  export const SendEmail = sendEmail;
  export const GetClient = getClient;
}
