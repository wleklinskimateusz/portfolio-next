import { ProjectCard } from "./_components/ProjectCard";
import { ProjectList } from "./_components/ProjectList";

export const metadata = {
  title: "Projects - Mateusz Wlekliński",
};

export default async function Projects() {
  return (
    <section className="m-auto h-full">
      <h1 className="text-center">Projects I have worked on</h1>
      <ProjectList />
    </section>
  );
}
