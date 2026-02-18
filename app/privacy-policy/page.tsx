import FadeIn from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Syed Noor Portfolio",
  description:
    "Learn how Syed Noor collects, uses, and protects your information on the portfolio website.",
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
              Privacy Policy
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
              At Syed Noor’s portfolio website, your privacy is important to me.
              This Privacy Policy outlines how I collect, use, and protect any
              information you provide when you interact with my website,
              including contact forms and project inquiries.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Information I Collect{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 01 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              I may collect the following information when you contact me or use
              my website:
            </p>
            <ul className="text-base md:text-lg font-light list-disc pl-5">
              <li>
                Name, email address, and other contact details you voluntarily
                provide.
              </li>
              <li>
                Messages or project details submitted through the contact form.
              </li>
              <li>
                Technical data, such as your IP address and browser type,
                automatically collected for analytics and website performance
                purposes.
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              How I Use Your Information{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 02 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              The information collected is used solely to:
            </p>
            <ul className="text-base md:text-lg font-light list-disc pl-5">
              <li>Respond to your inquiries and provide requested services.</li>
              <li>Send relevant updates, proposals, or project information.</li>
              <li>
                Improve website functionality and ensure a smooth browsing
                experience.
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Data Sharing and Security{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 03 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              I do not sell, trade, or share your personal information with
              third parties, except where required by law. I implement
              appropriate security measures to protect your data against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Cookies and Tracking{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 04 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              My website may use cookies or analytics tools to understand
              website traffic and improve your experience. These cookies do not
              collect personally identifiable information unless voluntarily
              submitted.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Third-Party Services{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 05 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              Any third-party tools used on the website, such as analytics,
              email handling, or hosting services, comply with their own privacy
              policies. I ensure these services handle your data responsibly.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Your Rights{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 06 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              You have the right to request access, correction, or deletion of
              any personal data you have provided. If you wish to exercise these
              rights, please contact me at{" "}
              <span className="font-medium underline underline-offset-2">
                dev.syednoor@gmail.com
              </span>
              .
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Updates to This Policy{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 07 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              This Privacy Policy may be updated periodically to reflect changes
              in the website or legal requirements. Any updates will be posted
              on this page.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-black text-3xl font-bold pb-5">
              Contact Information{" "}
              <span className="font-medium text-gold text-base pl-3">
                [ 08 ]
              </span>
            </h2>
            <p className="text-base md:text-lg font-light">
              For questions or concerns about this Privacy Policy or how your
              data is handled, please reach out at{" "}
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
