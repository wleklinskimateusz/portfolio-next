import Image from "next/image";
import { Socials } from "@/components/Socials";
import Link from "next/link";
import { Input } from "./_components/Input";
import { TextArea } from "./_components/TextArea";
import nodemailer from "nodemailer";
import { z } from "zod";
import { sendMail } from "@/services/sendMail";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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

        <div className="text-center">
          <h2 className="mb-0 font-serif text-4xl">Mateusz Wlekliński</h2>
          <span>Fullstack developer</span>
        </div>

        <div className="items-center flex flex-col gap-5 justify-center p-5">
          <ul className="flex flex-col justify-center items-center gap-4">
            <li>
              <Link
                href="https://twitter.com/wleklinskim"
                data-size="large"
                data-show-count="false"
              >
                <Button variant="outline" className="flex gap-2">
                  <FaXTwitter /> Follow me on Twitter
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/wleklinskim"
                data-size="large"
                data-show-count="false"
              >
                <Button variant="outline" className="flex gap-2">
                  <FaLinkedin /> Check me out on LinkedIn
                </Button>
              </Link>
            </li>
          </ul>
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
            sendMail({
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
            sendMail({
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
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-2">
            <Input label="Name" name="name" />
            <Input label="Email" name="email" required type="email" />
          </div>
          <Input label="Subject" name="subject" />
          <TextArea label="Message" name="message" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
