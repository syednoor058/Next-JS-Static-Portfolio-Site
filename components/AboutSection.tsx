import FadeIn from "./ui/FadeIn";
import PrimaryButton from "./ui/PrimaryButton";

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black section-container">
      {/* Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center text-center">
        <div
          className="relative whitespace-nowrap text-[36vw] md:text-[28vw] font-oswald font-bold uppercase leading-none text-transparent"
          style={{ WebkitTextStroke: "1px #e5e5e0" }}
        >
          About
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center gap-6">
        <div>
          <h6 className="text-white text-[6vw] uppercase font-oswald leading-none"><FadeIn delay={0.4}>Creative-first.</FadeIn></h6>
        <h6 className="text-white text-[6vw] uppercase font-oswald leading-none"><FadeIn delay={0.4}>Hospitality focused.</FadeIn></h6>
        <h6 className="text-white text-[6vw] uppercase font-oswald leading-none"><FadeIn delay={0.4}>Systems enabled.</FadeIn></h6>
        </div>
        <FadeIn delay={0.4}><div className="w-60 aspect-7/10 bg-gold"></div></FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-base lg:text-lg text-white/60 font-light max-w-160">We focus on mobile-native content, social media distribution and paid media that have real ‘bums-on-seats’ impact. Whether you’re launching a new venue, managing a legacy group, or growing a precinct, we create the strategy and digital infrastructure that your brands need.</p>
        </FadeIn>
        <FadeIn delay={0.4}><PrimaryButton text="Learn More" /></FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
