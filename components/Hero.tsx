import Image from "next/image";
import Marquee from "react-fast-marquee";
import FadeIn from "./ui/FadeIn";
import PrimaryButton from "./ui/PrimaryButton";
import StarNorth from "./ui/StarNorth";

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

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col relative text-primary pt-10 bg-black overflow-hidden">
      {/* Background Cover */}
      <FadeIn
        delay={0.1}
        className="absolute inset-0 w-full h-full z-0 blur-[0px]"
      >
        <Image
          src="https://res.cloudinary.com/de8g5laai/image/upload/v1770377281/26127101_wavy_background_4_buejwi.jpg"
          alt="a dark hero background"
          fill
          className="object-cover opacity-60"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        direction="right"
        className="w-full text-start full-width-word text-white font-bold relative z-1"
      >
        SOFTWARE
      </FadeIn>
      <FadeIn
        delay={0.5}
        direction="left"
        className="w-full -mt-6 lg:-mt-20 relative inline-block"
      >
        <span className="absolute inset-0 z-2 text-end full-width-word text-white font-bold leading-tight">
          ENGNR.
        </span>
        <span className="invisible text-end full-width-word text-white font-bold leading-tight">
          ENGNR.
        </span>

        <span
          className="absolute inset-0 z-10 text-end full-width-word text-transparent font-bold leading-tight"
          style={{
            WebkitTextStroke: "2px white",
          }}
        >
          ENGNR.
        </span>
      </FadeIn>

      <FadeIn
        delay={0.4}
        className="absolute z-5 inset-0 w-full h-full flex justify-center items-end"
      >
        <div className="h-[70%] lg:h-[85%] aspect-711/841 ">
          <Image
            src="https://res.cloudinary.com/de8g5laai/image/upload/v1770705914/Untitled_design_10_-Photoroom_alcwkj.png"
            alt="a robot wearing an engineer cap"
            height={841}
            width={711}
            className="object-cover"
          />
        </div>
      </FadeIn>

      <div className="w-full  pt-0 absolute bottom-0 z-20 flex flex-col gap-10 lg:gap-14">
        <div className="px-4 md:px-6 lg:px-0 lg:pl-6 max-w-110 relative z-1">
          <FadeIn delay={0.7}>
            <p className="max-w-2xl mb-8 text-lg lg:text-xl font-light">
              Full-stack software engineer building scalable, performance-driven
              web applications—focused on clean architecture and real-world
              impact.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <PrimaryButton url="/contact" text="Get Connected" />
          </FadeIn>
        </div>
        <div className="w-full pb-5 bg-linear-to-t from-black to-transparent">
          <Marquee
            speed={80}
            className="overflow-hidden w-full py-2 flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap text-white/70"
          >
            {items.map((item, index) => (
              <span
                key={index}
                className="flex items-center px-3 md:px-4 gap-x-6 md:gap-x-8 lg:px-5 lg:gap-x-10 text-[4vw] md:text-[3vw] lg:text-[2vw] leading-none font-extralight"
              >
                {item} <StarNorth />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
