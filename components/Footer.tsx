import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between bg-neutral p-4 text-neutral-content lg:flex-row">
      <p>Mateusz Wlekliński © 2024</p>

      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Socials />
      </div>
    </footer>
  );
};
