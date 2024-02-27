import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const Technologies = () => (
  <section className="mx-auto flex w-full max-w-4xl grow flex-col gap-10">
    <h2 className="text-center font-serif text-3xl lg:text-4xl xl:text-5xl">
      Technologies I Love
    </h2>
    <ul className="flex flex-col justify-center gap-10 px-4 md:gap-10">
      <Technology
        technology="Next.js"
        description="Next.js is my go-to for crafting applications with elegance and simplicity. The seamless integration with React and constant innovation in introducing features that enhance the React ecosystem truly resonate with my development philosophy."
        image="/images/technologies/next.jpeg"
      />
      <Technology
        technology="TypeScript"
        description="TypeScript is like a language whisperer, making JavaScript not just usable but delightful. The power of types brings a sense of order to my code, making it not just error-resistant but also a joy to work with."
        image="/images/technologies/typescript.jpeg"
        textPosition="right"
      />
      <Technology
        technology="TailwindCSS"
        description="Tailwind CSS revolutionized my approach to styling. Its utility-first methodology allows me to focus on the design without getting lost in the complexities of traditional stylesheets."
        image="/images/technologies/tailwind.jpeg"
      />
      <Technology
        technology="React.js"
        description="React is not just a library; it's a friend that elegantly simplifies the complexities of building user interfaces. The idea of splitting HTML into functions with React components is nothing short of magical."
        image="/images/technologies/react.jpeg"
        textPosition="right"
      />
    </ul>
  </section>
);

const Technology = ({
  technology,
  description,
  image,
  textPosition,
}: {
  technology: string;
  description: string;
  image: string;
  textPosition?: "left" | "right";
}) => {
  const isRightPosition = textPosition === "right";
  return (
    <li className="mx-auto grid grid-cols-1 gap-10 p-5 md:w-full md:grid-cols-2">
      <div
        className={`my-auto flex max-w-[384px] flex-col gap-2 ${isRightPosition ? "md:order-1" : "md:order-2"}`}
      >
        <h3 className="text-3xl font-bold text-primary">{technology}</h3>
        <p>{description}</p>
      </div>
      <Image
        className={twMerge("rounded", isRightPosition ? "order-2" : "order-1")}
        src={image}
        alt=""
        width={384}
        height={256}
      />
    </li>
  );
};
