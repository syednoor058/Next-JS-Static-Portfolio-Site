import { projectsList } from "@/constants";
import ProjectCard from "./ui/ProjectCard";
import SectionHeader from "./ui/SectionHeader";

const ProjectSection = () => {
  return (
    <section className="section-container">
      <SectionHeader header={["03", "./Portfolio", "2023-2026"]} title={<>Real<br />Deployments</>} paragraph="A curated selection of web applications I’ve designed and engineered end-to-end, focusing on scalable architecture, clean interfaces, and solutions built to perform in real production environments." theme="light" />
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-10">
        {projectsList.map((project) => (
            <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
