import Link from "next/link";
import { Socials } from "./Socials";
import { navigationConfig } from "@/config/navigationConfig";
import { personalConfig } from "@/config/personalConfig";

export const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center gap-3 bg-gray-100 pt-10 text-black">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col items-center gap-2">
          <span className="hidden text-2xl font-bold uppercase sm:block">
            contact
          </span>
          <div className="flex grow flex-col justify-center">
            <p className="flex flex-col items-center gap-1 text-sm text-gray-500">
              <span className="hidden sm:block">Email:</span>
              <Link href={`mailto:${personalConfig.email}`}>
                {personalConfig.email}
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-center gap-2 md:flex">
          <span className="text-2xl font-bold uppercase">links</span>
          <div className="flex grow flex-col text-center text-sm text-gray-500">
            <Link href={navigationConfig.Home}>Home</Link>
            <Link href={navigationConfig.Resume}>Resume</Link>
            <Link href={navigationConfig.Projects}>Projects</Link>
            <Link href={navigationConfig.Blog}>Blog</Link>
            <Link href={navigationConfig.Contact}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="hidden text-2xl font-bold uppercase sm:block">
            Follow me
          </span>
          <Socials className="grow items-center justify-center gap-4 text-gray-500" />
        </div>
      </div>
      <hr className="h-[2px] w-full bg-gray-200" />
      <div className="flex flex-col items-center justify-center gap-5 pb-3 text-gray-500">
        <p>© 2024 Mateusz Wlekliński</p>
      </div>
    </footer>
  );
};
