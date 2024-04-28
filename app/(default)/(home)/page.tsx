import { Technologies } from "./_components/Technologies";
import { HeroSection } from "./_components/HeroSection";

import { PersonalFeatures } from "./_components/PersonalFeatures";
import { ProjectList } from "../projects/_components/ProjectList";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
  keywords: "Mateusz Wlekliński, Wlekliński, Mateusz, portfolio, projects",
};

export default async function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      {/* <PersonalFeatures />  */}
      <section id="projects" className="py-16">
        <ProjectList />
      </section>
      {/* <Technologies /> */}
    </div>
  );
}
