type Person = {
  name: string;
  email: string;
};

type MailShape = {
  sender: Person;
  to: Person[];
  subject: string;
  htmlContent: string;
};

export const sendMail = async (data: MailShape) => {
  const apiKey = process.env.BREVO_KEY;
  if (!apiKey) {
    throw new Error("No API key provided");
  }
  const response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
    method: "POST",
    headers: [
      ["accept", "application/json"],
      ["api-key", apiKey],
      ["content-type", "application/json"],
    ],
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Error sending email", { cause: await response.text() });
  }
  return await response.json();
};
