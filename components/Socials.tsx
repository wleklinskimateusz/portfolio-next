import { fetchStrapi } from "@/services/fetchStrapi";
import Link from "next/link";
import { z } from "zod";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const iconsMap = {
  Facebook: FaFacebook,
  Twitter: FaTwitter,
  Github: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
};

export const Socials = async () => {
  const { socials } = await fetchStrapi({
    path: "/api/social",
    schema: z.object({
      socials: z.array(
        z.object({
          name: z.union([
            z.literal("Github"),
            z.literal("LinkedIn"),
            z.literal("Facebook"),
            z.literal("Instagram"),
            z.literal("Twitter"),
          ]),
          link: z.string().url(),
        })
      ),
    }),
    query: {
      populate: ["socials"],
    },
  });
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
