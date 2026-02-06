import AboutSection from "@/components/AboutSection";
import ClientSection from "@/components/ClientSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import RandomQuoteSection from "@/components/RandomQuoteSection";
import ServiceSection from "@/components/ServicesSection";
import Testimonials from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutSection />
    <ServiceSection />
    <ProjectSection />
    <RandomQuoteSection />
    <ClientSection />
    <Testimonials />
    <Footer />
    </>
  );
}
