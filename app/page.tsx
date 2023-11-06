import Image from "next/image";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
  keywords: "Mateusz Wlekliński, Wlekliński, Mateusz, portfolio, projects",
};

export default async function Home() {
  return (
    <div className="flex flex-col py-10">
      <section
        id="hero"
        className="px-16 flex md:flex-row md:text-start text-center flex-col-reverse md:justify-around justify-center items-center gap-20 h-[720px]"
      >
        <div className="max-w-4xl flex flex-col md:gap-10 gap-4 items-center md:items-start md:justify-around">
          <h1 className="xl:text-8xl flex flex-col">
            <span>Building the Future,</span> <span>One Line at a Time</span>
          </h1>
          <h2 className="xl:text-4xl">
            Web Development & Programming Expertise
          </h2>
          <a
            href="/contact"
            className="p-2 text-info  outline-info hover:bg-info-100 dark:hover:bg-info-800 dark:hover:text-info-100 hover:outline-none transition-colors duration-300 hover:text-info-700 outline w-fit rounded m-2"
          >
            Connect With Me!
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
    </div>
  );
}
