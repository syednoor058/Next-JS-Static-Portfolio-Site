import ProjectSection from "@/components/ProjectSection";
import Testimonials from "@/components/TestimonialSection";
import FadeIn from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Selected Projects & Case Studies | Full-Stack & SaaS Work",
  description:
    "Explore real-world projects showcasing scalable SaaS products, web applications, and performance-driven development solutions.",
};

const page = () => {
  return (
    <>
      <section className="w-full flex flex-col relative text-[#1b1b1b]">
        {/* Background Cover */}
        <FadeIn delay={0.1} className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://res.cloudinary.com/de8g5laai/image/upload/v1770480145/36552711_wxw4_fmdu0z.jpg"
            alt="a dark hero background"
            fill
            className="object-cover opacity-60"
          />
        </FadeIn>

        <div className="relative z-1">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12">
            <FadeIn delay={0.2} direction="down" className="lg:col-span-7">
              <Image
                src="https://res.cloudinary.com/de8g5laai/image/upload/v1770492118/You_Will_Get_A_Custom_Scalable_Web_Application_4_f0osum.jpg"
                alt="a person is using laptop on mountain"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="max-w-2xl flex flex-row lg:flex-row-reverse gap-3 lg:absolute lg:top-1/3 lg:right-14 z-5 mt-10 px-4 md:px-8 lg:px-0">
            <span
              className="flex justify-center items-center"
            >
              <h1
                className="uppercase text-nowrap text-[2.5vw] lg:text-[1.5vw] text-[#1b1b1b] font-medium -rotate-180 lg:rotate-0"
                style={{ writingMode: "vertical-rl" }}
              >
                Real Crafts
              </h1>
            </span>
            <FadeIn delay={0.4}>
              <p className="text-[6vw] lg:text-[4vw] font-semibold leading-none pb-10 pl-10 pr-0 lg:pl-0 lg:pr-10 border-l border-r-0 lg:border-r lg:border-l-0 border-gold lg:text-end">
                Selected projects demonstrating execution, scale, and technical
                clarity.
              </p>
            </FadeIn>
          </FadeIn>
        </div>
      </section>
      <ProjectSection />
      <Testimonials />
    </>
  );
};

export default page;
