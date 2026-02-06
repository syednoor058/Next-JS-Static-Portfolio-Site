import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  tags: string[];
  url: string;
  file: "img" | "vid";
  alt?: string;
  src: string;
  colSpan: number;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={`md:col-span-${project.colSpan} group`}>
      <FadeIn
        delay={0.2}
        className="w-full aspect-12/9 rounded-md overflow-hidden"
      >
        {project.file === "img" && (
          <Image
            src={project.src}
            alt={project.alt || project.title}
            width={1200}
            height={900}
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-300 ease-in-out"
          />
        )}

        {project.file === "vid" && (
          <video
            autoPlay // Automatically starts video playback
            loop // Causes the video to start over again every time it finishes
            muted // Mutes the video (necessary for autoPlay to work in most browsers)
            playsInline // Required for autoPlay on iOS devices
            controls={false} // Hides default playback controls
            preload="auto" // Suggests to the browser how to load the video element's data
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-300 ease-in-out"
          >
            <source src={project.src} type="video/mp4" />
            {/* Fallback text for browsers that do not support the video tag */}
            Your browser does not support this video.
          </video>
        )}
      </FadeIn>

      <div className="w-full flex flex-row gap-4 justify-between text-dark-primary mt-4">
        <div>
          <FadeIn delay={0.2}>
            <h3 className="text-2xl">{project.title}</h3>
          </FadeIn>
          <ul className="flex flex-wrap text-dark-primary/70 font-light gap-y-1.5 gap-x-3 mt-1.5 uppercase">
            {project.tags.map((tag, i) => (
              <li className="leading-none" key={tag}>
                <FadeIn delay={0.2 + i * 0.1}>[ {tag} ]</FadeIn>
              </li>
            ))}
          </ul>
        </div>
        <Link href={project.url}>
          <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
