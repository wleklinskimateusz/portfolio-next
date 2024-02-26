import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Social } from "@/data/socials";
import { socials as allSocials } from "@/data/socials";
import { personalConfig } from "@/config/personalConfig";

export default function Contact() {
  const socialFollow = [
    "Threads",
    "Twitter",
    "LinkedIn",
  ] satisfies Social["name"][];

  const socials = allSocials.filter((social) =>
    socialFollow.includes(social.name),
  );

  return (
    <div className="flex h-[720px] flex-col items-center justify-center gap-20">
      <div className="h-48 w-48 rounded-full bg-primary">
        <Image
          src="/images/avatar.png"
          alt="profile"
          width={200}
          height={200}
          className="m-0"
        />
      </div>

      <div>
        <div className="text-center">
          <h2 className="mb-0 font-serif text-4xl">Mateusz Wlekliński</h2>
          <span>Fullstack developer</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <ul className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
            {socials.map(({ name, link, Icon }) => {
              return (
                <li key={name}>
                  <Link href={link}>
                    <Button variant="outline" className="flex w-full gap-2">
                      <Icon /> Follow me on {name}
                    </Button>
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href={`mailto:${personalConfig.email}`}>
                <Button variant="outline" className="flex w-full gap-2">
                  <FaEnvelope /> Write to me!
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
