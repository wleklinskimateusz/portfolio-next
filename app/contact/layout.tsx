import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function ContactLayout({ children }: { children: ReactNode }) {
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
            <li>
              <Link
                href="https://twitter.com/wleklinskim"
                data-size="large"
                data-show-count="false"
              >
                <Button variant="outline" className="flex gap-2">
                  <FaXTwitter /> Follow me on Twitter
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/wleklinskim"
                data-size="large"
                data-show-count="false"
              >
                <Button variant="outline" className="flex gap-2">
                  <FaLinkedin /> Check me out on LinkedIn
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-center">{children}</div>
    </div>
  );
}
