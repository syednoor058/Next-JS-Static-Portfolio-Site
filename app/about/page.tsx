import SectionTag from "@/components/SectionTag";
import Testimonials from "@/components/TestimonialSection";
import BeamBackground from "@/components/ui/BeamBackground";
import {
  BlurTextAnimationH,
  BlurTextAnimationP,
  BlurTextAnimationSpan,
} from "@/components/ui/BlurTextAnimation";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import StarNorth from "@/components/ui/StarNorth";
import {
  Baby,
  BriefcaseBusiness,
  GraduationCap,
  Newspaper,
  School,
  University,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Full-Stack Developer & SaaS Engineer",
  description:
    "Learn about my journey, skills, and experience building scalable software, SaaS platforms, and modern web applications.",
};

const timelineEvents = [
  {
    year: "2023 - Present",
    title: "Professional Practice",
    description:
      "Began professional work as a full-stack software engineer, building and maintaining production applications using modern JavaScript frameworks and backend technologies.",
    icon: <BriefcaseBusiness stroke="#CFA355" />,
  },
  {
    year: "2023",
    title: "Degree Completion",
    description:
      "Graduated with a Bachelor of Science degree, solidifying a formal foundation in software engineering and preparing for professional industry work.",
    icon: <GraduationCap stroke="#CFA355" />,
  },
  {
    year: "2023",
    title: "Applied Research",
    description:
      "Completed an academic thesis involving problem analysis, system design, and implementation—applying theoretical knowledge to a practical, real-world scenario.",
    icon: <Newspaper stroke="#CFA355" />,
  },
  {
    year: "2019 - 2023",
    title: "Engineering Education",
    description:
      "Studied computer science–related coursework, gaining structured knowledge in programming, data structures, databases, and software development principles.",
    icon: <University stroke="#CFA355" />,
  },
  {
    year: "2015 - 2017",
    title: "Technical Direction",
    description:
      "Pursued higher secondary education where interest in computing and engineering concepts became more focused, leading toward a formal path in software engineering.",
    icon: <University stroke="#CFA355" />,
  },
  {
    year: "2004 - 2015",
    title: "Academic Grounding",
    description:
      "Completed primary and secondary education with a strong focus on mathematics, science, and analytical thinking, developing the discipline required for technical learning.",
    icon: <School stroke="#CFA355" />,
  },
  {
    year: "2000",
    title: "Early Foundation",
    description:
      "Born and raised with an early exposure to technology and problem-solving, laying the foundation for a future in engineering and software development.",
    icon: <Baby stroke="#CFA355" />,
  },
];

const page = () => {
  return (
    <>
      <section className="w-full flex flex-col relative text-primary px-4 md:px-8 lg:px-10 pt-20 bg-black pb-20 md:pb-28 lg:pb-40">
        {/* Background Cover */}
        <FadeIn delay={0.1} className="absolute inset-0 w-full h-full z-0">
          <BeamBackground
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </FadeIn>

        <div className="relative z-1">
          <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-center items-start md:items-center mix-blend-difference">
            <BlurTextAnimationH
              text="My Story"
              delay={300}
              animateBy="words"
              direction="top"
              className="title flex justify-center items-center"
            />
          </div>
          <SectionTag
            text={[
              "[SYED NOOR]",
              "ENGINEER / DEVELOPER / PROGRAMMER",
              "KHULNA, BD",
            ]}
            color="dark"
            padding="pb-4 mt-10"
          />
          <FadeIn delay={0.3}>
            <div className="w-full h-px bg-white/60"></div>
          </FadeIn>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-20">
            <div className="flex flex-col gap-5">
              <BlurTextAnimationP
                text="I’m a full-stack software engineer with nearly two years of
                professional experience building scalable, production-ready web
                applications using the MERN stack and Next.js. My work focuses
                on turning complex requirements into clean, maintainable systems
                that perform reliably in real-world environments."
                delay={20}
                className="mb-5 text-justify text-xl"
              />
              <FadeIn delay={0.6} className="flex mt-auto">
                <div className="bg-white flex flex-row gap-1.5 items-center px-4 py-1 text-[#1b1b1b] rounded-full leading-none text-sm">
                  <span>
                    <StarNorth />
                  </span>
                  Software that’s meant to last—not just launch.
                </div>
              </FadeIn>
            </div>
            <div className="font-light">
              <BlurTextAnimationP
                text="I work across the entire application lifecycle—from frontend
                  architecture and UI logic to backend services, RESTful APIs,
                  and database design. I’m comfortable owning features end to
                  end, making technical decisions, and ensuring performance,
                  security, and scalability are considered from the start."
                delay={20}
                className="mb-5 lg:mb-10 text-justify"
              />
              <BlurTextAnimationP
                text="Beyond writing code, I value clarity, collaboration, and
                  long-term thinking. I’ve worked in fast-paced product
                  environments where aligning with designers, product managers,
                  and stakeholders is just as important as choosing the right
                  technical approach."
                delay={20}
                className="text-justify"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-container">
        <SectionHeader
          header={["2000 - Present", "./Devlopment", "Timeline"]}
          title={["Life", "History"]}
          paragraph="This timeline outlines the progression from early academic foundations to professional software engineering practice, highlighting the key stages that shaped my technical skills, problem-solving approach, and readiness to deliver production-grade applications."
          theme="light"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#1b1b1b] md:-translate-x-px" />

          {timelineEvents.map((event, index) => (
            <FadeIn key={event.title} delay={0.2}>
              <div
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right md:pl-12" : "md:pr-12"
                  }`}
                >
                  <BlurTextAnimationSpan
                    text={event.year}
                    delay={200}
                    className="text-gold font-semibold"
                  />
                  <h3 className="text-xl font-semibold text-black mt-1 mb-2">
                    <BlurTextAnimationSpan text={event.title} delay={200} />
                  </h3>
                  <BlurTextAnimationP
                    text={event.description}
                    delay={20}
                    className="text-black/60"
                  />
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-accent rounded-full -translate-x-1/2 mt-1 bg-[#1b1b1b] flex justify-center items-center">
                  {event.icon}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default page;
