import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const page = () => {
  return (
    <>
      <section className="w-full relative text-primary px-4 md:px-8 lg:px-10 pt-20 bg-black pb-20 md:pb-28 lg:pb-0">
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
      </section>
      <section className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28">
        <FadeIn delay={0.3}>
          <ContactForm />
        </FadeIn>
        <div></div>
      </section>
    </>
  );
};

export default page;
