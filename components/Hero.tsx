import Image from "next/image";
import Marquee from "react-fast-marquee";
import FadeIn from "./ui/FadeIn";
import PrimaryButton from "./ui/PrimaryButton";

const expertiseLogos = [
  {
    src: "/images/expertise/express.png",
    alt: "express js logo",
    height: 888,
    width: 195,
  },
  {
    src: "/images/expertise/fastapi.png",
    alt: "fast api logo",
    height: 900,
    width: 165,
  },
  {
    src: "/images/expertise/framer-motion.png",
    alt: "framer motion logo",
    height: 876,
    width: 141,
  },
  {
    src: "/images/expertise/mongodb.png",
    alt: "mongodb logo",
    height: 741,
    width: 207,
  },
  {
    src: "/images/expertise/next-js.png",
    alt: "next js logo",
    height: 888,
    width: 207,
  },
  {
    src: "/images/expertise/node.png",
    alt: "node logo",
    height: 789,
    width: 210,
  },
  {
    src: "/images/expertise/playwright.png",
    alt: "playwright logo",
    height: 900,
    width: 186,
  },
  {
    src: "/images/expertise/postgresql.png",
    alt: "postgresql logo",
    height: 570,
    width: 210,
  },
  {
    src: "/images/expertise/react.png",
    alt: "react logo",
    height: 591,
    width: 195,
  },
  {
    src: "/images/expertise/selenium.png",
    alt: "selenium logo",
    height: 900,
    width: 210,
  },
  {
    src: "/images/expertise/shadcn.png",
    alt: "shadcn logo",
    height: 879,
    width: 150,
  },
  {
    src: "/images/expertise/tailwind-css.png",
    alt: "tailwind CSS logo",
    height: 900,
    width: 126,
  },
  {
    src: "/images/expertise/wordpress.png",
    alt: "wordpress logo",
    height: 90,
    width: 204,
  },
];

const Hero = () => {
  return (
    <section className="w-full lg:min-h-screen flex flex-col relative text-primary pt-10 bg-black">
      {/* Background Cover */}
      <FadeIn delay={0.1} className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://res.cloudinary.com/de8g5laai/image/upload/v1770237736/Guiding_families_through_life_s_most_difficult_transitions_5_rckwnl.png"
          alt="a flower dark background"
          fill
          className="object-cover opacity-20"
        />
      </FadeIn>

      <FadeIn delay={0.3} direction="right" className="w-full text-start full-width-word text-white font-bold relative z-1">
        SOFTWARE
      </FadeIn>
      {/* <div className="w-full lg:-mt-20 relative z-10">ENGNR.</div> */}

      <FadeIn delay={0.5} direction="left" className="w-full -mt-6 lg:-mt-20 relative inline-block">
        <span className="absolute inset-0 z-2 text-end full-width-word text-white font-bold leading-tight">
          ENGNR.
        </span>
        <span className="invisible text-end full-width-word text-white font-bold leading-tight">
          ENGNR.
        </span>
        <span
          className="absolute inset-0 z-10 text-end full-width-word text-transparent font-bold leading-tight"
          style={{
            WebkitTextStroke: "1px white",
          }}
        >
          ENGNR.
        </span>
      </FadeIn>

      <FadeIn delay={0.4} className="absolute z-5 inset-0 w-full h-full flex justify-center items-end">
        <Image
          src="https://res.cloudinary.com/de8g5laai/image/upload/v1770266190/ChatGPT_Image_Feb_4_2026_09_14_51_PM-Photoroom_diyiou.png"
          alt="syed shaeduzzaman noor photo"
          height={841}
          width={711}
          className="h-[85%] w-auto"
        />
      </FadeIn>

      <div className="w-full relative pt-10 lg:pt-0 lg:absolute bottom-0 z-20 flex flex-col gap-10 lg:gap-14">
        <div className="px-4 md:px-6 lg:px-0 lg:pl-6 max-w-110 relative z-1">
          <FadeIn delay={0.7}>
            <p className="max-w-2xl mb-8 text-lg lg:text-xl">
            Building scalable web experiences that feel effortless. Driven by
            clean design and thoughtful engineering. Crafted with intent.
          </p>
          </FadeIn>
          <FadeIn delay={0.8}><PrimaryButton text="Get Connected" /></FadeIn>
        </div>
        <div className="w-full pb-5 bg-linear-to-t from-black to-transparent opacity-60">
          <Marquee
            speed={80}
            className="overflow-hidden w-full flex flex-row items-center"
          >
            {expertiseLogos.map((item) => (
              <Image
                key={item.alt}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-5 md:h-6 w-auto invert-100 pr-7 md:pr-10 lg:pr-16"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
