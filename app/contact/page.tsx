import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Start Your Project with Syed Noor",
  description: "Have a project in mind? Get in touch to discuss full-stack development, SaaS solutions, or technical consultation.",
}

const page = () => {
  return (
    <>
      <section className="w-full relative text-primary px-4 md:px-8 lg:px-10 pt-20 bg-black overflow-hidden">
        {/* Background Cover */}
        <FadeIn
          delay={0.1}
          className="absolute inset-0 w-full h-full z-0 blur-[0px] flex justify-center items-center"
        >
          {/* <Image
            src="https://res.cloudinary.com/de8g5laai/image/upload/v1770377281/26127101_wavy_background_4_buejwi.jpg"
            alt="a dark hero background"
            fill
            className="object-cover opacity-60"
          /> */}
          <video src="https://res.cloudinary.com/de8g5laai/video/upload/v1771356713/324451_small_ln4nfx.mp4" className="object-contain opacity-70" muted autoPlay loop />
        </FadeIn>

        <div className="relative z-1">
          <SectionHeader
            header={["2026", "./Contact", "Get In Touch"]}
            title={
              <>
                Let&apos;s
                <br />
                Collaborate
              </>
            }
            paragraph="If you’re planning a new product, refining an existing system, or need technical support on an ongoing project, this is the right place to start. Share a bit about your goals, and I’ll respond with clarity on scope, feasibility, and next steps."
            theme="dark"
          />
        </div>
      </section>
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <FadeIn delay={0.3}>
          <ContactForm />
        </FadeIn>
        <FadeIn delay={0.4}>
          <Map />
        </FadeIn>
      </section>
    </>
  );
};

export default page;
