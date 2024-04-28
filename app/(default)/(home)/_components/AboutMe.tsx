import { BoldSkill } from "@/components/BoldSkill";
import { SoftwareDeveloper } from "./SoftwareDeveloper";
import Image from "next/image";
import { Interest } from "./Interest";

export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="grid grid-cols-1 place-items-center gap-x-8 gap-y-24 py-20 lg:grid-cols-2"
    >
      <h2 className="text-center lg:col-span-2">Who am I?</h2>
      <div className="flex flex-col items-center justify-center gap-8">
        <Image
          className="rounded-full border-4 border-primary bg-slate-200 shadow-xl"
          src="/images/avatar.png"
          alt="My Avatar"
          width={400}
          height={400}
        />
        <SoftwareDeveloper
          titles={[
            "Software",
            "TypeScript",
            "Frontend",
            "Node.js",
            "React",
            "Next.js",
          ]}
        />
      </div>
      <div className="flex max-w-sm flex-col justify-center gap-4 px-4">
        <h3>
          Hi, I&apos;m <span className="text-primary">Mateusz</span>
        </h3>
        <p>
          I am a <BoldSkill>TypeScript Developer</BoldSkill> with two years of
          experience in creating, testing and maintaining web applications and
          tools.
        </p>
        <p>
          I aim to always be up to date with the{" "}
          <BoldSkill>latest technologies</BoldSkill> and to be able to use them
          in my work.
        </p>
        <p>
          My areas of expertise include <BoldSkill>Design Systems</BoldSkill>,{" "}
          <BoldSkill>Figma</BoldSkill>, <BoldSkill>TypeScript</BoldSkill> and{" "}
          <BoldSkill>Next.js</BoldSkill>.
        </p>
        <p>
          I have a bachelor&apos;s degree in Applied Physics, graduated from the{" "}
          <BoldSkill>AGH University of Cracow</BoldSkill>.
        </p>
      </div>
      <div className="flex flex-col gap-8 text-center lg:col-span-2">
        <h3>Always eager to talk about</h3>
        <ul className="mx-auto grid w-fit grid-cols-2 gap-8 md:grid-cols-4">
          <Interest icon="coffee">Brewing Coffee</Interest>
          <Interest icon="physics">Physics</Interest>
          <Interest icon="reading">Reading</Interest>
          <Interest icon="music">Music</Interest>
        </ul>
      </div>
    </section>
  );
};
