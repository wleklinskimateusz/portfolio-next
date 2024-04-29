import { HeroSection } from "./_components/HeroSection";
import { ProjectList } from "../projects/_components/ProjectList";
import { ScreenWrapper } from "../_components/ScreenWrapper";
import { AboutMe } from "./_components/AboutMe";
import { ContactMe } from "../_components/ContactMe";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ScreenWrapper>
        <AboutMe />
        <section id="projects" className="md:py-20">
          <h2 className="text-center">Projects I have worked on</h2>
          <ProjectList />
        </section>
        <ContactMe />
      </ScreenWrapper>
    </div>
  );
}
