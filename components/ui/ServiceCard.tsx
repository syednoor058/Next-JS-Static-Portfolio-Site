"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import FadeIn from "./FadeIn";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  index: number;
}

interface ServiceItem {
  title: string;
  description: string;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

  //   useGSAP(() => {
  //     const mm = gsap.matchMedia();

  //     mm.add("", () => {
  //       gsap.from(ref.current, {
  //         y: 200,
  //         duration: 1,
  //         ease: "circ.out",
  //         scrollTrigger: {
  //           trigger: ref.current,
  //           start: "top 80%",
  //         },
  //       });
  //     });
  //   }, []);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: 200,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
      duration: 1,
      ease: "circ.out",
    });
  }, []);

  return (
    <article
      ref={ref}
      className="sticky pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
      style={
        isDesktop
          ? {
              top: `${index * 5}em`,
              marginBottom: `${(4 - index - 1) * 5}rem`,
            }
          : { top: 0 }
      }
    >
      <header className="flex flex-col gap-6">
        <FadeIn delay={0.1}>
          <h3 className="text-3xl md:text-4xl lg:text-5xl">{service.title}</h3>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/60">
            {service.description}
          </p>
        </FadeIn>
      </header>

      <ul className="mt-8 space-y-4 text-xl md:text-2xl lg:text-3xl text-white/80">
        {service.items.map((item: ServiceItem, i: number) => (
          <li key={item.title} className="pb-3">
            <FadeIn delay={0.1 + i * 0.1} className="border-b border-white/30">
              <div className="flex flex-row gap-4">
                <span className="mr-8 text-lg text-gold/85">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <div>
                  <h5>{item.title}</h5>
                  <p className="text-base md:text-lg text-white/50">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          </li>
        ))}
      </ul>
    </article>
  );
}
