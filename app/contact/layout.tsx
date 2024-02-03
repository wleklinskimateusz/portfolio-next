import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Social } from "@/data/socials";
import { socials as allSocials } from "@/data/socials";

export default function ContactLayout({ children }: { children: ReactNode }) {
  const socialFollow = [
    "Threads",
    "Twitter",
    "LinkedIn",
  ] satisfies Social["name"][];

  const socials = allSocials.filter((social) =>
    socialFollow.includes(social.name)
  );

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
            {socials.map(({ name, link, Icon }) => {
              return (
                <li key={name}>
                  <Link href={link}>
                    <Button variant="outline" className="flex gap-2">
                      <Icon /> Follow me on {name}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-center">{children}</div>
    </div>
  );
}
