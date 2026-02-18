import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import PrimaryButton from "./ui/PrimaryButton";

const HeroSection = () => {
  return (
    <section className="w-full lg:min-h-screen flex flex-col relative text-primary pt-20 overflow-hidden bg-black">
      {/* Background Cover */}
      <FadeIn delay={0.1} className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero-section-dark-background.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          quality={60}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        direction="right"
        className="w-full text-start full-width-word text-white relative z-1 font-medium"
      >
        <h1>SOFTWARE</h1>
      </FadeIn>
      <FadeIn
        delay={0.5}
        direction="left"
        className="w-full mt-0 lg:-mt-6 relative inline-block text-end"
      >
        <span className="relative inset-0 z-5 text-end full-width-word text-white font-medium">
          ENGNR.
        </span>
        <span
          className="absolute inset-0 z-10 text-end full-width-word text-transparent hidden md:block font-medium"
          style={{
            WebkitTextStroke: "2px white",
          }}
        >
          ENGNR.
        </span>
      </FadeIn>
      <div className="px-4 md:px-6 lg:px-0 lg:pl-6 max-w-110 lg:max-w-80 relative lg:absolute lg:bottom-20 z-10 pt-10 lg:pt-0">
        <FadeIn delay={0.7}>
          <p className="max-w-2xl mb-8 text-lg lg:text-base font-light lg:text-white/70">
            Full-stack software engineer building scalable, performance-driven
            web applications—focused on clean architecture and real-world
            impact.
          </p>
        </FadeIn>
        <FadeIn delay={0.8}>
          <PrimaryButton url="/contact" text="Get Connected" />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.4}
        className="relative pt-10 lg:pt-0 md:absolute z-5 inset-0 w-full h-full flex justify-center items-end"
      >
        <div className="h-100 md:h-[85%] aspect-711/841 relative">
          <Image
            src="/images/robot-for-hero-section.webp"
            alt="a robot wearing an engineer cap"
            fill
            sizes="(max-width: 768px) 240px, 338px"
            className="object-cover"
            priority
            quality={70}
          />
        </div>
      </FadeIn>

      {/* Bottom Fade In Shadow */}
      <div className="w-full h-20 absolute bottom-0 bg-linear-to-t from-black to-transparent z-6"></div>
    </section>
  );
};

export default HeroSection;
