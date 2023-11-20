import Image from "next/image";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
  keywords: "Mateusz Wlekliński, Wlekliński, Mateusz, portfolio, projects",
};

export default async function Home() {
  const a = "💡" satisfies string;
  return (
    <div className="flex flex-col py-10">
      <section
        id="hero"
        className="px-16 flex md:flex-row md:text-start text-center flex-col-reverse md:justify-around justify-center items-center gap-20 h-fit xl:h-[640px] 2xl:h-[720px]"
      >
        <div className="max-w-4xl mb-20 flex flex-col xl:gap-10 gap-4 items-center md:items-start md:justify-around">
          <h1 className="xl:text-8xl lg:text-6xl text-4xl flex flex-col">
            <span>Building the Future,</span> <span>One Line at a Time</span>
          </h1>
          <span className="xl:text-4xl">
            Web Development & Programming Expertise
          </span>
          <a
            href="/contact"
            className="p-2 z-10 text-primary relative outline-primary  dark:hover:bg-primary-800 dark:hover:text-primary-100 hover:outline-primary-600 transition-colors duration-300 hover:text-primary-600 outline w-fit rounded m-2"
          >
            Connect With Me!
            <Arrow />
          </a>
        </div>

        <Image
          src="/images/avatar.png"
          alt="profile"
          width={300}
          height={300}
          className="bg-primary outline transition-all border-info duration-300 hover:outline-primary hover:outline-8 rounded-full shadow-md"
        />
      </section>
      <section className="flex flex-col items-center gap-10">
        <h2 className="xl:text-5xl lg:text-4xl text-2xl">
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
      <span className=" bg-white/70 rounded-full flex justify-center items-center  w-10 h-10 aspect-square">
        {icon}
      </span>
      <span>{title}</span>
    </h3>
    <p>{description}</p>
  </div>
);

const Arrow = () => (
  <svg
    height="100%"
    strokeMiterlimit="10"
    className="absolute w-40 h-40 left-10 -z-10 -top-5 -rotate-90  -bottom-30 curly-arrow"
    version="1.1"
    viewBox="0 0 400 400"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs />
    <g>
      <path
        d="M136.533 275.406C136.533 275.406 136.533 275.405 136.533 275.405C136.533 275.405 136.533 275.405 136.533 275.405C136.533 275.405 136.534 275.405 136.534 275.405C136.535 275.404 136.536 275.404 136.537 275.405C136.538 275.405 136.539 275.406 136.54 275.408C136.54 275.409 136.54 275.411 136.538 275.414C136.535 275.417 136.53 275.42 136.521 275.422C136.511 275.424 136.496 275.424 136.479 275.417C136.461 275.41 136.44 275.396 136.43 275.37C136.42 275.344 136.42 275.304 136.462 275.257C136.504 275.209 136.59 275.152 136.754 275.124C136.917 275.096 137.164 275.096 137.459 275.211C137.754 275.325 138.108 275.56 138.283 276.004C138.458 276.448 138.455 277.12 137.744 277.922C137.033 278.725 135.572 279.685 132.813 280.161C130.054 280.637 125.878 280.629 120.889 278.696C115.9 276.763 109.931 272.792 106.97 265.29C104.008 257.788 104.059 246.434 116.078 232.871C128.096 219.307 152.783 203.077 199.42 195.026"
        fill="#66717d"
        fillOpacity="0"
        fillRule="nonzero"
        opacity="1"
        stroke="#00A98F"
        strokeLinecap="butt"
        strokeWidth="15.5011"
      />
      <path
        d="M152.382 167.337L199.42 195.026"
        fill="none"
        opacity="1"
        stroke="#00A98F"
        strokeLinecap="butt"
        strokeWidth="15.5011"
      />
      <path
        d="M175.901 237.724L199.42 195.026"
        fill="none"
        opacity="1"
        stroke="#00A98F"
        strokeLinecap="butt"
        strokeWidth="15.5011"
      />
    </g>
  </svg>
);
