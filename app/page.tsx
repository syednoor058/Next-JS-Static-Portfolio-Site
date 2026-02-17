import AboutSection from "@/components/AboutSection";
import ClientSection from "@/components/ClientSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import RandomQuoteSection from "@/components/RandomQuoteSection";
import ServiceSection from "@/components/ServicesSection";
import Testimonials from "@/components/TestimonialSection";
import ExpertiseMarquee from "@/components/ui/ExpertiseMarquee";

export default function Home() {
  return (
    <>
    <HeroSection />
    <ExpertiseMarquee />
    <AboutSection />
    <ServiceSection />
    <ProjectSection />
    <RandomQuoteSection />
    <ClientSection />
    <Testimonials />
    </>
  );
}
