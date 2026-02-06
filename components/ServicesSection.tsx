import { servicesData } from "../constants";
import SectionHeader from "./ui/SectionHeader";
import ServiceCard from "./ui/ServiceCard";

export default function ServiceSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-black pb-20 px-4 md:px-8 lg:px-14"
    >
      <SectionHeader header={["02", "./Service", "What I offer"]} title={<>Creative<br />Solutions</>} paragraph="I design and develop production-ready web applications that balance performance, scalability, and long-term maintainability—covering frontend systems, backend APIs, and data-driven architectures tailored to real business requirements." theme="dark" />
      {servicesData.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </section>
  );
}
