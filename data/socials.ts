import { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";

export type Social = {
  name: "Github" | "LinkedIn" | "Instagram" | "Twitter" | "Threads";
  link: string;
  Icon: IconType | ReactNode;
};

export const socials = [
  {
    name: "Threads",
    link: "https://www.threads.net/@m_wleklinski",
    Icon: FaThreads,
  },
  {
    name: "Github",
    link: "https://github.com/wleklinskimateusz",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mateusz-wleklinski/",
    Icon: FaLinkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/m_wleklinski/",
    Icon: FaInstagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/wleklinskim",
    Icon: FaXTwitter,
  },
] as const satisfies readonly Social[];
