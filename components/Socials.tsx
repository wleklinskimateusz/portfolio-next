import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Social, socials } from "@/data/socials";
import { IconType } from "react-icons";

const iconsMap = {
  Facebook: FaFacebook,
  Twitter: FaTwitter,
  Github: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
} satisfies Record<Social["name"], IconType>;

export const Socials = () => {
  return (
    <ul className=" flex w-56 justify-around">
      {socials.map(({ name, link }) => {
        const Icon = iconsMap[name];
        return (
          <li key={name}>
            <Link
              className="link transition-all duration-300 hover:link-primary"
              href={link}
            >
              <Icon className="h-7 w-7" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
