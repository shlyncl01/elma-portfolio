import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {/* Hovering one card dims the others */}
      <div className="group/list -mx-4">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
