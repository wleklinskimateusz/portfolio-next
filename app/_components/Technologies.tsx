import Image from "next/image";

const technologies = {
  "Next.js":
    "Next.js is my go-to for crafting applications with elegance and simplicity. The seamless integration with React and constant innovation in introducing features that enhance the React ecosystem truly resonate with my development philosophy.",
  TypeScript:
    "TypeScript is like a language whisperer, making JavaScript not just usable but delightful. The power of types brings a sense of order to my code, making it not just error-resistant but also a joy to work with.",
  TailwindCSS:
    "Tailwind CSS revolutionized my approach to styling. Its utility-first methodology allows me to focus on the design without getting lost in the complexities of traditional stylesheets.",
  "React.js":
    "React is not just a library; it's a friend that elegantly simplifies the complexities of building user interfaces. The idea of splitting HTML into functions with React components is nothing short of magical.",
};

const images = {
  "Next.js": "/images/technologies/next.jpeg",
  TypeScript: "/images/technologies/typescript.jpeg",
  TailwindCSS: "/images/technologies/tailwind.jpeg",
  "React.js": "/images/technologies/react.jpeg",
};

const technologiesEntries = Object.entries(technologies) as [
  keyof typeof technologies,
  string
][];

export const Technologies = () => (
  <section className="flex max-w-4xl mx-auto flex-col items-center gap-10">
    <h2 className="xl:text-5xl lg:text-4xl text-2xl">Technologies I Love</h2>
    <ul className="flex flex-col px-4 justify-center gap-10 md:gap-10">
      {technologiesEntries.map(([technology, description], idx) => (
        <li className="p-5 mx-auto grid gap-10 grid-cols-2" key={technology}>
          <div className={` self-end ${idx % 2 === 0 ? "order-1" : "order-2"}`}>
            <h3 className="text-primary font-bold">{technology}</h3>
            <p>{description}</p>
          </div>
          <Image
            className={`rounded ${idx % 2 === 0 ? "order-2" : "order-1"}`}
            src={images[technology]}
            alt=""
            width={384}
            height={256}
          />
        </li>
      ))}
    </ul>
  </section>
);
