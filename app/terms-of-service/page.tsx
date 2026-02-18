import FadeIn from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service | Syed Noor Portfolio",
  description: "Read the Terms of Service for Syed Noor’s portfolio website, outlining usage, project engagements, and website policies.",
};


const page = () => {
  return (
    <>
      <section className="w-full relative text-primary bg-black section-container">
        {/* Background Cover */}
        <FadeIn
          delay={0.1}
          className="absolute inset-0 w-full h-full z-0 blur-[0px]"
        >
          <Image
            src="/images/hero-section-dark-background.webp"
            alt="a dark hero background"
            fill
            className="object-cover opacity-60"
          />
        </FadeIn>

        <div className="relative z-1">
          <FadeIn delay={0.2}>
            <h1 className="w-full text-center uppercase text-[10vw] text-white font-bold relative leading-none">
              Terms of Service
            </h1>
          </FadeIn>
        </div>
      </section>
      <section className="section-container flex justify-center items-center text-[#1b1b1b]">
        <div className="max-w-3xl flex flex-col gap-14">
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Introduction{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 00 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              Welcome to Syed Noor’s portfolio website. These Terms of Service
              govern your use of this website and outline your responsibilities
              as a visitor or client.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Use of Website{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 01 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              You agree to use this website responsibly and comply with all
              applicable laws. You may not engage in any activity that could
              harm the website, its content, or other users.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Intellectual Property{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 02 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              All content on this website, including code, design, text, and
              graphics, is the intellectual property of Syed Noor. You may not
              reproduce, distribute, or use any content without explicit
              permission.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Project Engagements{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 03 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              Any services or projects requested through this website will be
              governed by separate agreements. All project scopes, timelines,
              and fees must be mutually agreed upon in writing.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Limitation of Liability{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 04 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              The website is provided <span className="font-medium">as is</span>{" "}
              without warranties of any kind. Syed Noor is not responsible for
              any damages arising from the use of the website or reliance on its
              content.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              External Links{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 05 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              This website may contain links to third-party websites. Syed Noor
              does not endorse or take responsibility for content, privacy
              practices, or policies of these external sites.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Termination{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 06 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              Syed Noor reserves the right to restrict or terminate access to
              this website for any user who violates these Terms of Service or
              engages in unauthorized activity.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Changes to Terms{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 07 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              These Terms of Service may be updated periodically. Users are
              encouraged to review this page regularly to stay informed of any
              changes.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Contact{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 08 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              If you have questions about these Terms of Service or need
              clarification, please contact me at{" "}
              <span className="font-medium underline underline-offset-2">
                dev.syednoor@gmail.com
              </span>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default page;
