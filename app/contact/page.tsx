import Image from "next/image";
import { Socials } from "@/components/Socials";
import Link from "next/link";
import { Input } from "./_components/Input";
import { TextArea } from "./_components/TextArea";
import nodemailer from "nodemailer";
import { z } from "zod";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const metadata = {
  title: "Contact - Mateusz Wlekliński",
};
// ADD error boundary
export default function Contact() {
  return (
    <div className="flex h-[720px] flex-col items-center justify-center gap-20 lg:flex-row">
      <div className="flex gap-10 flex-col-reverse items-center justify-center lg:flex-col">
        <div className="h-48 w-48 rounded-full bg-primary">
          <Image
            src="/images/avatar.png"
            alt="profile"
            width={200}
            height={200}
            className="m-0"
          />
        </div>

        <h1>Mateusz Wlekliński</h1>
        <div className="items-center flex flex-col gap-5 justify-center p-5 shadow rounded">
          <p className="mb-0">Connect with me on social media!</p>
          <Socials />
        </div>
      </div>
      <div className="flex flex-col gap-5 text-center">
        <form
          action={async (formData) => {
            "use server";

            const emailForm = formData.get("email");
            const nameForm = formData.get("name");
            const subjectForm = formData.get("subject");
            const messageForm = formData.get("message");

            const schema = z.object({
              email: z.string().email(),
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

            const apiKey = process.env.MAILERSEND_API;

            if (!apiKey) {
              throw new Error("No API key provided");
            }

            const mailerSend = new MailerSend({ apiKey });

            const sentFrom = new Sender(
              "noreply@mateuszwleklinski.me",
              "Mateusz Wlekliński"
            );

            const recipients = [new Recipient(email, name)];

            const emailParams = new EmailParams()
              .setFrom(sentFrom)
              .setTo(recipients)
              .setReplyTo(sentFrom)
              .setSubject("This is a Subject")
              .setHtml("<strong>This is the HTML content</strong>")
              .setText("This is the text content");

            try {
              await mailerSend.email.send(emailParams);
            } catch (error) {
              throw new Error(JSON.stringify(error));
            }
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-2">
            <Input label="Name" name="name" />
            <Input label="Email" name="email" type="email" />
          </div>
          <Input label="Subject" name="subject" />
          <TextArea label="Message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
