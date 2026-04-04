
import FadeIn from "./ui/FadeIn";
import PrimaryButton from "./ui/PrimaryButton";
import ParagraphComponent from "./ui/ParagraphComponent";
import SectionTag from "./SectionTag";
import { BlurTextAnimationSpan } from "./ui/BlurTextAnimation";
import ModelComp from "./ModelComp";

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black section-container">
      {/* Background */}
      <FadeIn
        delay={0.3}
        className="absolute inset-0 z-0 flex items-center justify-center text-center font-mono"
      >
        <div
          className="relative whitespace-nowrap text-[36vw] font-bold uppercase leading-none text-transparent"
          style={{ WebkitTextStroke: "1px #e5e5e0" }}
        >
          About
          <div className="absolute w-full h-full inset-0 bg-linear-to-t from-black to-transparent z-10" />
        </div>
      </FadeIn>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center gap-6">
        <SectionTag text={["[01]", "./ABOUT", "SYED NOOR"]} color="dark" />
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-white text-[6vw] uppercase font-marcellus leading-none">
            <BlurTextAnimationSpan text="Creative-first." delay={300} />
          </h6>
          <h6 className="text-white text-[6vw] uppercase font-marcellus leading-none">
            <BlurTextAnimationSpan text="Hospitality focused." delay={300} />
          </h6>
          <h6 className="text-white text-[6vw] uppercase font-marcellus leading-none">
            <BlurTextAnimationSpan text="Systems enabled." delay={300} />
          </h6>
        </div>
        <FadeIn delay={0.3} direction="none" className="w-60 aspect-7/10">
          <ModelComp />
        </FadeIn>
        <ParagraphComponent
          text="I work across frontend systems, backend services, and application
            architecture to deliver scalable web products built for real users.
            Whether developing a platform from scratch, refining an existing
            codebase, or optimizing performance, I focus on clean
            implementation, long-term maintainability, and solutions that
            support real business growth."
        />
        <FadeIn delay={0.4}>
          <PrimaryButton url="/about" text="My Journey" />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
