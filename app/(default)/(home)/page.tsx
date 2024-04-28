import { Technologies } from "./_components/Technologies";
import { HeroSection } from "./_components/HeroSection";

import { PersonalFeatures } from "./_components/PersonalFeatures";
import { ProjectList } from "../projects/_components/ProjectList";
import { ScreenWrapper } from "../_components/ScreenWrapper";

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
      <ScreenWrapper>
        <section id="about-me" className="py-20">
          <h2 className="text-center">Who am I?</h2>
          <ProjectList />
        </section>
        <section id="projects" className="py-20">
          <h2 className="text-center">Projects I have worked on</h2>
          <ProjectList />
        </section>
      </ScreenWrapper>
    </div>
  );
}
