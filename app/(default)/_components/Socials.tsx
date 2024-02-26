import Link from "next/link";
import { socials } from "@/data/socials";
import { twMerge } from "tailwind-merge";

export const Socials = ({ className }: { className?: string }) => {
  return (
    <ul className={twMerge("flex w-56 justify-around rounded p-0", className)}>
      {socials.map(({ name, link, Icon }) => (
        <li key={name}>
          <Link aria-label={name.toLocaleLowerCase()} href={link}>
            <Icon className="h-5 w-5" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
