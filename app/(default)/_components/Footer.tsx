import Link from "next/link";
import { Socials } from "./Socials";
import { navigationConfig } from "@/config/navigationConfig";

export const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center   text-black">
      <div className="w-full bg-gradient-to-b from-white to-gray-200">
        <div className="mx-auto flex  w-full max-w-4xl items-center justify-center px-9 py-5">
          <Socials className="items-center justify-center gap-4 text-gray-500" />
        </div>
      </div>
      <div className="w-full bg-gray-200">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-center gap-5 px-9 py-3  text-gray-500 md:justify-between">
          <p>© 2024 Mateusz Wlekliński</p>
          <div className="hidden gap-2 text-center text-sm text-gray-500 md:flex">
            <Link href={navigationConfig.Home}>Home</Link>
            <Link href={navigationConfig.Projects}>Projects</Link>
            <Link href={navigationConfig.Blog}>Blog</Link>
            <Link href={navigationConfig.Contact}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
