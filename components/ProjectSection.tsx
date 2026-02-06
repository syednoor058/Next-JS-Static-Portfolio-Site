import ProjectCard from "./ui/ProjectCard";
import SectionHeader from "./ui/SectionHeader";

const projectsList = [
  {
    title: "ApplyWise | AI Resume Optimizer",
    tags: [
      "React",
      "Tailwind",
      "Puter.Js",
      "Vercel",
      "Headless Server",
      "AI Agent",
    ],
    url: "#",
    file: "img" as const,
    alt: "ApplyWise application mockup",
    src: "https://res.cloudinary.com/de8g5laai/image/upload/v1770348776/apply-wise_pnvlit.jpg",
    colSpan: 7 as const,
  },
  {
    title: "OmniQ | Online Car Rental Platform",
    tags: ["React", "Node.JS", "Express", "MongoDB", "Tailwind", "Zustand"],
    url: "#",
    file: "vid" as const,
    src: "https://res.cloudinary.com/de8g5laai/video/upload/v1770348779/omniQ_jmfdo3.mp4",
    colSpan: 5 as const,
  },
  {
    title: "Lumivance | Tech & Gadgets E-commerce",
    tags: [
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Vercel",
      "Redux",
      "SSLCommerz",
    ],
    url: "#",
    file: "img" as const,
    alt: "Lumivance ecommerce application mockup",
    src: "https://res.cloudinary.com/de8g5laai/image/upload/v1770348777/lumivance_kxlimi.jpg",
    colSpan: 5 as const,
  },
  {
    title: "Lexora | Law Firm Business Portfolio",
    tags: [
      "Next.js",
      "Tailwind",
      "Shad/Cn",
      "Radix UI",
      "Framer Motion",
      "Stripe",
    ],
    url: "#",
    file: "img" as const,
    alt: "lexora business portfolio mockup",
    src: "https://res.cloudinary.com/de8g5laai/image/upload/v1770348777/lexora_crklet.jpg",
    colSpan: 7 as const,
  },
  {
    title: "PropSuit | Real Estate Management System",
    tags: ["React", "Laravel", "PostgreSQL", "Tailwind", "Redux"],
    url: "#",
    file: "vid" as const,
    src: "https://res.cloudinary.com/de8g5laai/video/upload/v1770348779/propsuit_dutgec.mp4",
    colSpan: 7 as const,
  },
  {
    title: "Pulse Fitness | Gymnasium Business Portfolio",
    tags: [
      "Next.js",
      "Tailwind",
      "Relume UI",
      "Framer Motion",
      "Stripe",
    ],
    url: "#",
    file: "img" as const,
    alt: "pulse fitness gymnasium mockup",
    src: "https://res.cloudinary.com/de8g5laai/image/upload/v1770348777/pulse-fitness_jzm10d.jpg",
    colSpan: 5 as const,
  },
];

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
