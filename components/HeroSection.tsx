import FadeIn from "./ui/FadeIn";
import { BlurTextAnimationH, BlurTextAnimationP } from "./ui/BlurTextAnimation";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black text-white section-container">
      {/* Background Cover */}
      <FadeIn delay={0.1} className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover blur-[1px]"
        >
          <source
            src="https://res.cloudinary.com/de8g5laai/video/upload/q_auto/f_auto/v1775208965/Astronaut_in_Space_Loops_4K_Royalty-Free_Background_Video_-_Bonfire_Buddies_1080p_h264_zbnyhw.mp4"
            type="video/mp4"
          />
        </video>
      </FadeIn>

      <div className="relative z-10 mix-blend-difference">
        <BlurTextAnimationH
          text="Code. Build. Scale."
          delay={300}
          animateBy="words"
          direction="top"
          className="title flex justify-center items-center"
        />
        <BlurTextAnimationP
          text="Full-Stack Developer"
          delay={300}
          animateBy="words"
          direction="top"
          className="title flex justify-center items-center"
        />
      </div>

      <div className="w-full h-20 absolute bottom-0 bg-linear-to-t from-black to-transparent z-6"></div>
    </section>
  );
};

export default HeroSection;
