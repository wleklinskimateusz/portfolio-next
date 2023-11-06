import Image from "next/image";
import { Socials } from "@/app/_components/Socials";
import Link from "next/link";

export const metadata = {
  title: "Contact - Mateusz Wlekliński",
};

export default function Contact() {
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

        <h1>Mateusz Wlekliński</h1>
      </div>
      <div className="flex flex-col gap-5 text-center">
        <div className="p-5 shadow">
          <Link
            className=" hover:outline flex flex-col p-2 rounded "
            href={`mailto:wleklinskimateusz05@gmail.com`}
          >
            <span className="mb-0">Write to me!</span>
            <span>wleklinskimateusz05@gmail.com</span>
          </Link>
        </div>
        <div className="items-center flex flex-col gap-5 justify-center p-5 shadow-lg">
          <p className="mb-0">Or find me on social media!</p>
          <Socials />
        </div>
      </div>
    </div>
  );
}
