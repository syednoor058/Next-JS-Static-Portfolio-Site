"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Star } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import SectionHeader from "./ui/SectionHeader";
gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  company: string;
  quote: string;
  name: string;
  title: string;
}

const testimonials = [
  {
    company: "/images/testimonials/interaid.webp",
    quote:
      "An amazing developer and human being who truly understands what a platform needs to grow.",
    name: "Md Azizul Haque",
    title: "Owner, InterAiD",
  },
  {
    company: "/images/testimonials/puppetbrush.webp",
    quote:
      "Very knowledgeable, patient, and always ready to explain things. Great experience working with him.",
    name: "Kazi Farhan Masum",
    title: "CEO, Puppetbrush",
  },
  {
    company: "/images/testimonials/qahaf.webp",
    quote:
      "Thanks to him, we were able to launch our platform on time and start getting sales immediately.",
    name: "Mustafa Mehedi",
    title: "Co-Founder, Qahaf",
  },
];

const stats = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 24, suffix: "", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="testimonial-card flex flex-col gap-6 justify-center items-center text-center text-lg font-light">
    <FadeIn delay={0.2}>
      <Image
      src={testimonial.company}
      alt="company logo"
      width={800}
      height={800}
      className="h-8 w-auto invert-100"
    />
    </FadeIn>
    <FadeIn delay={0.3}><p className="text-base leading-relaxed text-white/60">
      {testimonial.quote}
    </p></FadeIn>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FadeIn key={i} delay={0.4+i*0.1}><Star fill="#cfa355" stroke="#cfa355" /></FadeIn>
      ))}
    </div>
    <FadeIn delay={0.4} className="flex flex-col gap-1">
      <span className="font-semibold text-white">{testimonial.name}</span>
      <span className="text-white/60">{testimonial.title}</span>
    </FadeIn>
  </div>
);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Testimonial cards fade up with stagger
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Stats fade up
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          onEnter: () => {
            // Counter animation for stats
            const counters = document.querySelectorAll(".stat-value");
            counters.forEach((counter) => {
              const target = parseFloat(
                counter.getAttribute("data-value") || "0",
              );
              const suffix = counter.getAttribute("data-suffix") || "";
              const isDecimal = target % 1 !== 0;

              gsap.to(counter, {
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  const progress = this.progress();
                  const current = target * progress;
                  counter.textContent =
                    (isDecimal ? current.toFixed(1) : Math.floor(current)) +
                    suffix;
                },
              });
            });
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-container bg-[#0d0d0d]">

      <SectionHeader header={["04", "./Validation", "Proof of Impact"]} title={<>Measured<br />Results</>} paragraph="Real feedback and measurable outcomes from delivered projects—reflecting consistent execution, reliable collaboration, and solutions that meet technical expectations and business goals." theme="dark" />

      {/* Testimonials Grid */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      <div className="w-full h-px bg-linear-to-r from-[#0d0d0d] via-white/60 to-[#0d0d0d] my-20"></div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 md:gap-16"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-item bg-linear-to-b from-[#0d0d0d] via-white/60 to-[#0d0d0d] md:pr-px last:pr-0"
          >
            <div className="flex justify-center items-center gap-8 bg-[#0d0d0d]">
              <div className="text-center">
                <span
                  className="stat-value text-7xl font-oswald font-extrabold text-primary"
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                >
                  0{stat.suffix}
                </span>
                <p className="mt-1 text-white/60 font-light text-lg">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-border/40" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
