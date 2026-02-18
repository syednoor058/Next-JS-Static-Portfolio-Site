import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { projectsList } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Full-Stack Development, SaaS & API Services | Syed Noor",
  description: "Professional full-stack development, SaaS solutions, API integration, and performance optimization tailored for modern businesses.",
}

const page = () => {
  return (
    <>
      <section className="w-full flex flex-col relative text-[#1b1b1b]">
        {/* Background Cover */}
        <FadeIn delay={0.1} className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/hero-section-light-background.webp"
            alt="a light hero background"
            fill
            className="object-cover opacity-60"
          />
        </FadeIn>

        <div className="relative z-1">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5"></div>
            <FadeIn delay={0.2} direction="down" className="lg:col-span-7">
              <Image
                src="/images/service-hero-image.webp"
                alt="a person is using laptop on mountain"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="max-w-2xl flex flex-row gap-5 lg:absolute lg:top-1/3 lg:left-14 z-5 mt-10 px-4 md:px-8 lg:px-0">
            <span
              className="flex justify-center items-center"
            >
              <h1 className="rotate-180 uppercase text-nowrap text-[2.5vw] lg:text-[1.5vw] text-[#1b1b1b] font-medium" style={{writingMode: "vertical-rl"}}>
                Build Focus
              </h1>
            </span>
            <FadeIn delay={0.4}>
              <p className="text-[6vw] lg:text-[4vw] font-semibold leading-none pb-10 pl-10 border-l border-gold">
                Engineering scalable web solutions with clarity, performance,
                and intent.
              </p>
            </FadeIn>
          </FadeIn>
        </div>
      </section>
      <section className="px-4 md:px-8 lg:px-14 pt-20 md:pt-26 lg:pt-32">
        <SectionHeader
          header={["00", "./Devlopment", "System Design"]}
          title={
            <>
              Full-stack
              <br />
              Development
            </>
          }
          paragraph="Building end-to-end web applications with scalable architecture, clean interfaces, and maintainable backend systems. From frontend interaction to server-side logic, I handle the complete development lifecycle."
          theme="light"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-10">
          <ProjectCard project={projectsList[0]} />
          <ProjectCard project={projectsList[1]} />
        </div>
      </section>
      <section className="px-4 md:px-8 lg:px-14 pt-20 md:pt-26 lg:pt-32">
        <SectionHeader
          header={["01", "./Layouts", "System Design"]}
          title={
            <>
              SaaS
              <br />
              Solutions
            </>
          }
          paragraph="Designing and developing SaaS platforms focused on multi-tenant architecture, reliability, and long-term product growth. I build systems that support user management, subscriptions, and scalable infrastructure from day one."
          theme="light"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-10">
          <ProjectCard project={projectsList[2]} />
          <ProjectCard project={projectsList[4]} />
        </div>
      </section>
      <section className="px-4 md:px-8 lg:px-14 pt-20 md:pt-26 lg:pt-32">
        <SectionHeader
          header={["02", "./Connection", "Web Network"]}
          title={
            <>
              API
              <br />
              Integration
            </>
          }
          paragraph="Integrating third-party and custom APIs to ensure secure data flow, system interoperability, and consistent application behavior. I work with REST-based services, authentication layers, and external platforms to connect products seamlessly."
          theme="light"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-10">
          <ProjectCard project={projectsList[0]} />
          <ProjectCard project={projectsList[1]} />
        </div>
      </section>
      <section className="px-4 md:px-8 lg:px-14 py-20 md:py-26 lg:py-32">
        <SectionHeader
          header={["03", "./Optimize", "What Matters"]}
          title={
            <>
              Performance
              <br />
              Optimization
            </>
          }
          paragraph="Improving application speed and efficiency through code refinement, database optimization, and runtime performance tuning. I analyze bottlenecks across frontend rendering, backend execution, and data queries."
          theme="light"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-7 lg:gap-10">
          <ProjectCard project={projectsList[3]} />
          <ProjectCard project={projectsList[5]} />
        </div>
      </section>
    </>
  );
};

export default page;
