import FadeIn from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cookie Policy | Syed Noor Portfolio",
  description: "Learn how Syed Noor’s portfolio website uses cookies and tracking technologies to enhance your browsing experience.",
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
              Cookie Policy
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
              This Cookie Policy explains how Syed Noor’s portfolio website uses
              cookies and similar tracking technologies to enhance your browsing
              experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              What Are Cookies{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 01 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              Cookies are small text files stored on your device by your
              browser. They help websites remember your preferences, improve
              functionality, and provide analytics data.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Types of Cookies{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 02 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              The website may use different types of cookies, including:
            </p>
            <ul className="text-base md:text-lg font-light list-disc pl-5">
              <li>Essential cookies necessary for website functionality.</li>
              <li>
                Performance cookies to analyze website usage and improve
                performance.
              </li>
              <li>
                Functional cookies to remember your preferences and settings.
              </li>
              <li>Analytics cookies to track user behavior anonymously.</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              How We Use Cookies{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 03 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              Cookies are used to enhance your browsing experience, understand
              visitor trends, and improve website performance. No personal
              information is collected without your consent.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Third-Party Cookies{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 04 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              The website may include cookies from third-party services like
              Google Analytics to analyze website traffic. These cookies follow
              their own privacy policies.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Managing Cookies{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 05 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              You can control or disable cookies through your browser settings.
              Note that disabling cookies may affect website functionality or
              user experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Updates to This Policy{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 06 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              This Cookie Policy may be updated periodically to reflect changes
              in the website or legal requirements. Updates will be posted on
              this page.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Contact{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 07 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              If you have questions about this Cookie Policy or how cookies are
              used, please contact me at{" "}
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
