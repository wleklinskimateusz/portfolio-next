import { HeroSection } from "./_components/HeroSection";
import { ProjectList } from "../projects/_components/ProjectList";
import { ScreenWrapper } from "../_components/ScreenWrapper";
import { AboutMe } from "./_components/AboutMe";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
  keywords: "Mateusz Wlekliński, Wlekliński, Mateusz, portfolio, projects",
};

export default async function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutMe />
      <ScreenWrapper>
        <section id="projects" className="py-20">
          <h2 className="text-center">Projects I have worked on</h2>
          <ProjectList />
        </section>
      </ScreenWrapper>
    </div>
  );
}
