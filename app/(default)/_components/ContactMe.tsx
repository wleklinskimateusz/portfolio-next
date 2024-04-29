import Link from "next/link";
import { ScreenWrapper } from "./ScreenWrapper";
import { navigationConfig } from "@/config/navigationConfig";
import { Button } from "@/components/ui/button";
import { socials as allSocials } from "@/data/socials";
import { Social } from "@/data/socials";
import { FaEnvelope } from "react-icons/fa6";

const socialFollow = [
  "Threads",
  "Twitter",
  "LinkedIn",
] satisfies Social["name"][];

const socials = allSocials.filter((social) =>
  socialFollow.includes(social.name),
);
export const ContactMe = () => {
  return (
    <ScreenWrapper className="md:my-32">
      <section
        id="contact"
        className="flex flex-col gap-4 rounded bg-slate-100 p-8"
      >
        <h2 className="text-center">Contact me!</h2>
        <div>
          <div className="flex flex-col items-center justify-center gap-5 p-5">
            <ul className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2">
              {socials.map(({ name, link, Icon }) => (
                <li key={name}>
                  <Link href={link}>
                    <Button variant="outline" className="flex w-full gap-2">
                      <Icon /> Follow me on {name}
                    </Button>
                  </Link>
                </li>
              ))}
              <li>
                <Link href={navigationConfig.mailTo}>
                  <Button variant="outline" className="flex w-full gap-2">
                    <FaEnvelope /> Write to me!
                  </Button>
                </Link>
              </li>
              <li className="sm:col-span-2">
                <Link
                  href={navigationConfig.resume}
                  download="MateuszWleklinski.pdf"
                >
                  <Button variant="link" className="flex w-full gap-2">
                    Download my Resume
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ScreenWrapper>
  );
};
