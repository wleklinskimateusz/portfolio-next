import Image from "next/image";
import { Technologies } from "../components/Technologies";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
  keywords: "Mateusz Wlekliński, Wlekliński, Mateusz, portfolio, projects",
};

export default async function Home() {
  const a = "💡" satisfies string;
  return (
    <div className="flex max-w-7xl mx-auto flex-col py-10 gap-40">
      <section
        id="hero"
        className="ml-16 relative pr-16 mt-20 shadow flex md:flex-row md:text-end  flex-col-reverse md:justify-around justify-center  gap-20"
      >
        <Image
          src="/images/avatar.png"
          alt="profile"
          width={600}
          height={600}
          className="self-start basis-1/2 bg-slate-100 duration-300 hover:outline-primary hover:outline-8 rounded-lg shadow-md"
        />
        <div className="pt-16 basis-1/2 max-w-4xl  flex flex-col xl:gap-20 gap-4  h-full">
          <div>
            <h1 className="2xl:text-7xl font-serif xl:text-6xl lg:text-5xl text-4xl flex flex-col">
              <span>Building the Future,</span> <span>One Line at a Time</span>
            </h1>
            <span className="2xl:text-2xl xl:text-xl lg:text-lg  text-md">
              Web Development & Programming Expertise
            </span>
          </div>
          <Link
            className="self-end absolute bottom-16 right-16"
            href="/contact"
          >
            <Button>Connect With Me!</Button>
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center gap-10">
        <h2 className="xl:text-5xl font-serif lg:text-4xl text-3xl">
          Unveiling the Code Composer
        </h2>
        <div className="flex px-4 justify-center gap-4 md:gap-10">
          <TraitBox
            icon="💡"
            title="Innovative Thinker"
            description="Constantly redefining boundaries and finding inventive solutions to complex challenges."
          />
          <TraitBox
            icon="🌐"
            title="Web Development Enthusiast"
            description="Passionate about crafting seamless digital experiences and staying at the forefront of web technologies."
          />
          <TraitBox
            icon="🎨"
            title="Creative Problem Solver"
            description="Approaching problems with a creative mindset, transforming obstacles into opportunities through innovative solutions."
          />
        </div>
      </section>
      <Technologies />
    </div>
  );
}

type TraitBoxProps = {
  icon: string;
  title: string;
  description: string;
};

const TraitBox = ({ icon, title, description }: TraitBoxProps) => (
  <div className="flex  bg-primary-100/40 shadow-sm flex-col basis-96 gap-6 p-5 rounded">
    <h3 className="flex items-center gap-5">
      <span className="bg-white rounded-full  shadow-sm flex justify-center items-center  w-10 h-10 aspect-square">
        {icon}
      </span>
      <span>{title}</span>
    </h3>
    <p>{description}</p>
  </div>
);
