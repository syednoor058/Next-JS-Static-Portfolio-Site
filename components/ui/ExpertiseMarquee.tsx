import Marquee from "react-fast-marquee";
import StarNorth from "./StarNorth";
import FadeIn from "./FadeIn";

const items = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "GSAP",
  "Redux",
  "Zustand",
  "JEST",
  "Shad/CN",
];

const ExpertiseMarquee = () => {
  return (
    <section className="pt-20 md:pt-28 lg:pt-32 bg-black">
      <FadeIn delay={0.3}>
        <Marquee
          speed={80}
          className="overflow-hidden w-full py-6 flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap text-black/95 bg-white"
        >
          {items.map((item, index) => (
            <span
              key={index}
              className="flex items-center px-3 md:px-4 gap-x-6 md:gap-x-8 lg:px-5 lg:gap-x-10 text-[4vw] md:text-[3vw] lg:text-[2vw] leading-none font-semibold"
            >
              {item} <StarNorth />
            </span>
          ))}
        </Marquee>
      </FadeIn>
    </section>
  );
};

export default ExpertiseMarquee;
