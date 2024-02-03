import Link from "next/link";
import { socials } from "@/data/socials";

export const Socials = () => {
  return (
    <ul className="flex w-56 justify-around rounded p-0">
      {socials.map(({ name, link, Icon }) => (
        <li key={name}>
          <Link aria-label={name.toLocaleLowerCase()} href={link}>
            <Icon className="h-7 w-7" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
