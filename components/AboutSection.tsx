import Image from "next/image";
import FadeIn from "./ui/FadeIn";
import PrimaryButton from "./ui/PrimaryButton";

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black section-container">
      {/* Background */}
      <FadeIn
        delay={0.3}
        className="absolute inset-0 z-0 flex items-center justify-center text-center"
      >
        <div
          className="relative whitespace-nowrap text-[36vw] md:text-[28vw] font-oswald font-bold uppercase leading-none text-transparent"
          style={{ WebkitTextStroke: "1px #e5e5e0" }}
        >
          About
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10" />
        </div>
      </FadeIn>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center gap-6">
        <FadeIn
          delay={0.3}
          className={`w-full flex flex-row gap-5 justify-between text-sm uppercase pb-20 text-white/60`}
        >
          <span>[01]</span>
          <span className="text-gold">./About</span>
          <span>Syed Noor</span>
        </FadeIn>
        <div>
          <h6 className="text-white text-[6vw] uppercase font-oswald leading-none">
            <FadeIn delay={0.4}>Creative-first.</FadeIn>
          </h6>
          <h6 className="text-white text-[6vw] uppercase font-oswald leading-none">
            <FadeIn delay={0.4}>Hospitality focused.</FadeIn>
          </h6>
          <h6 className="text-white text-[6vw] uppercase font-oswald leading-none">
            <FadeIn delay={0.4}>Systems enabled.</FadeIn>
          </h6>
        </div>
        <FadeIn delay={0.4} className="w-60 aspect-7/10">
          <Image
            src="/images/developer-picture-syed-noor.webp"
            alt="developer photo syed shaeduzzaman noor"
            width={240}
            height={343}
            sizes="240px"
            className="w-full h-full object-cover"
            quality={70}
          />
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-base lg:text-lg text-white/60 font-light max-w-160">
            I work across frontend systems, backend services, and application
            architecture to deliver scalable web products built for real users.
            Whether developing a platform from scratch, refining an existing
            codebase, or optimizing performance, I focus on clean
            implementation, long-term maintainability, and solutions that
            support real business growth.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <PrimaryButton url="/about" text="My Journey" />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
