import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Social, socials } from "@/data/socials";
import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";

const iconsMap = {
  Facebook: FaFacebook,
  Twitter: FaXTwitter,
  Github: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
} satisfies Record<Social["name"], IconType>;

export const Socials = () => {
  return (
    <ul className="flex w-56 justify-around rounded p-0">
      {socials.map(({ name, link }) => {
        const Icon = iconsMap[name];
        return (
          <li key={name}>
            <Link href={link}>
              <Icon className="h-7 w-7" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
