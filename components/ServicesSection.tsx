import { servicesData } from "../constants";
import ServiceCard from "./ui/ServiceCard";

export default function ServiceSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-black section-container"
    >
      <h2 id="services-heading" className="sr-only">
        Our Services
      </h2>

      {servicesData.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </section>
  );
}
