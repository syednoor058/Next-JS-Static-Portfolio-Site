"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    items: Array<{ title: string }>;
  };
  index: number;
}

interface ServiceItem {
  title: string;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("", () => {
      gsap.from(ref.current, {
        y: 200,
        duration: 1,
        ease: "circ.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <article
      ref={ref}
      className="sticky top-[10vh] px-4 pt-6 pb-12 text-white bg-black border-t border-white/30
                 md:px-10 md:top-[calc(10vh+var(--offset))]"
      style={
        isDesktop
          ? {
              top: `calc(10vh + ${index * 5}em)`,
              marginBottom: `${(4 - index - 1) * 5}rem`,
            }
          : { top: 0 }
      }
    >
      <header className="flex flex-col gap-6">
        <h3 className="text-4xl lg:text-5xl">{service.title}</h3>

        <p className="text-xl lg:text-2xl leading-relaxed tracking-widest text-white/60">
          {service.description}
        </p>
      </header>

      <ul className="mt-8 space-y-4 text-2xl lg:text-3xl text-white/80">
        {service.items.map((item: ServiceItem, i: number) => (
          <li key={item.title} className="border-b border-white/30 pb-3">
            <span className="mr-8 text-lg text-white/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.title}
          </li>
        ))}
      </ul>
    </article>
  );
}
