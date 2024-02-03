import { z } from "zod";
import { sendMail } from "@/services/sendMail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

export const metadata = {
  title: "Contact - Mateusz Wlekliński",
};
// ADD error boundary
export default function Contact() {
  return (
    <form
      action={async (formData) => {
        "use server";

        const emailForm = formData.get("email");
        const nameForm = formData.get("name");
        const subjectForm = formData.get("subject");
        const messageForm = formData.get("message");

        const schema = z.object({
          email: z.string(),
          name: z.string(),
          subject: z.string(),
          message: z.string(),
        });
        const { email, name, message, subject } = schema.parse({
          email: emailForm,
          name: nameForm,
          subject: subjectForm,
          message: messageForm,
        });
        if (!process.env.EMAIL_SEND || !process.env.EMAIL_NAME) {
          throw new Error("Email not set");
        }
        const admin = {
          name: process.env.EMAIL_NAME,
          email: process.env.EMAIL_SEND,
        };

        const promise1 = sendMail({
          sender: admin,
          to: [
            {
              name,
              email,
            },
          ],
          subject,
          htmlContent: `
              Thank you for contacting me! I will get back to you as soon as possible.
              `,
        });
        const promise2 = sendMail({
          sender: admin,
          to: [
            {
              name: admin.name,
              email: admin.email,
            },
          ],
          subject: "NEW MESSAGE FROM PORTFOLIO",
          htmlContent: `
              <h1>From: ${name}</h1>
              <h2>Email: ${email}</h2>
              <p>${message}</p>
              `,
        });
        await Promise.all([promise1, promise2]);
      }}
      className="flex flex-col gap-4"
    >
      <FormControl label="Name" id="name">
        <Input name="name" autoComplete="name" id="name" />
      </FormControl>

      <FormControl label="Email" id="email">
        <Input
          name="email"
          id="email"
          autoComplete="email"
          required
          type="email"
        />
      </FormControl>

      <FormControl label="Subject" id="subject">
        <Input id="subject" name="subject" />
      </FormControl>
      <FormControl label="Message" id="message">
        <Textarea name="message" id="message" />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}

const FormControl = ({
  children,
  label,
  id,
}: {
  children: ReactNode;
  label: string;
  id: string;
}) => {
  return (
    <div aria-label="form control">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
};
