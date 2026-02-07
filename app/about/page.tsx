import FadeIn from "@/components/ui/FadeIn";
import StarNorth from "@/components/ui/StarNorth";
import Image from "next/image";

const page = () => {
  return (
    <section className="w-full lg:min-h-screen flex flex-col relative text-primary px-4 md:px-8 lg:px-10 pt-20 bg-black">
      {/* Background Cover */}
      <FadeIn
        delay={0.1}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="https://res.cloudinary.com/de8g5laai/image/upload/v1770377281/26127101_wavy_background_4_buejwi.jpg"
          alt="a dark hero background"
          fill
          className="object-cover opacity-60"
        />
      </FadeIn>

      <div className="relative z-1">
        <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-between items-start md:items-center">
          <FadeIn
            delay={0.3}
            direction="right"
            className="w-full text-start full-width-word text-white font-bold uppercase leading-none"
          >
            My Story
          </FadeIn>
          <FadeIn
            delay={0.4}
            direction="left"
            className="h-[16vw] aspect-square relative0"
          >
            <Image
              src={`https://res.cloudinary.com/de8g5laai/image/upload/v1770447959/Morrison_Sterling_5_-Photoroom_olia5p.png`}
              alt="arrow icon in white"
              width={400}
              height={400}
              className="w-full h-full object-cover -rotate-90 md:rotate-0"
            />
          </FadeIn>
        </div>
        <FadeIn
          delay={0.2}
          className={`w-full flex flex-row gap-5 justify-between text-sm uppercase pb-5 text-white/60 border-b border-white/15 my-10`}
        >
          <span>[ Syed Noor ]</span>
          <span className="text-gold">Engineer / Developer / Programmer</span>
          <span>Khulna, BD</span>
        </FadeIn>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <p className="mb-5 text-justify text-xl">
              I’m a full-stack software engineer with nearly two years of
              professional experience building scalable, production-ready web
              applications using the MERN stack and Next.js. My work focuses on
              turning complex requirements into clean, maintainable systems that
              perform reliably in real-world environments.
            </p>
            <div className="flex mt-auto">
              <div className="bg-white flex flex-row gap-1.5 items-center px-4 py-1 text-[#1b1b1b] rounded-full leading-none text-sm">
                <span>
                  <StarNorth />
                </span>
                Software that’s meant to last—not just launch.
              </div>
            </div>
          </div>
          <div className="font-light">
            <p className="mb-5 lg:mb-10 text-justify">
              I work across the entire application lifecycle—from frontend
              architecture and UI logic to backend services, RESTful APIs, and
              database design. I’m comfortable owning features end to end,
              making technical decisions, and ensuring performance, security,
              and scalability are considered from the start.
            </p>
            <p className="text-justify">
              Beyond writing code, I value clarity, collaboration, and long-term
              thinking. I’ve worked in fast-paced product environments where
              aligning with designers, product managers, and stakeholders is
              just as important as choosing the right technical approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
