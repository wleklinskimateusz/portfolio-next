import Image from "next/image";
import { Socials } from "@/components/Socials";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact - Mateusz Wlekliński",
};

export default function Contact() {
  const { firstName, lastName, email, picture } = profile;
  return (
    <div className="prose m-auto h-full w-screen p-10">
      <h1 className="text-center">Contact</h1>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10">
        <div className="flex flex-col-reverse items-center justify-center lg:flex-col">
          <div className="avatar">
            <div className="h-48 w-48 rounded-full bg-primary">
              <Image
                src={picture}
                alt="profile"
                width={200}
                height={200}
                className="m-0"
              />
            </div>
          </div>
          <p className="text-xl">
            {firstName} {lastName}
          </p>
        </div>
        <div className="flex flex-col gap-5 text-center">
          <div className="card p-5 shadow-lg">
            <p className="mb-0">Write to me!</p>
            <Link
              className="link transition-all duration-300 hover:link-primary"
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </div>
          <div className="card items-center p-5 shadow-lg">
            <p className="mb-0">Or find me on social media!</p>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
