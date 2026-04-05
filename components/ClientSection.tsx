"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import FadeIn from "./ui/FadeIn";

gsap.registerPlugin(ScrollTrigger);

const PLACEHOLDER_LOGOS = [
  {
    url: "/images/clients/projotno_tea.webp",
    alt: "projotno tea logo",
  },
  {
    url: "/images/clients/axisway.webp",
    alt: "axis way business logo",
  },
  {
    url: "/images/clients/playwearBD.webp",
    alt: "playwear bd logo",
  },
  {
    url: "/images/clients/interaid.webp",
    alt: "interaid logo",
  },
  {
    url: "/images/clients/puppetbrush.webp",
    alt: "puppetbrush logo",
  },
  {
    url: "/images/clients/qahaf.webp",
    alt: "qahaf logo",
  },
  {
    url: "/images/clients/retrofino.webp",
    alt: "retrofino logo",
  },
  {
    url: "/images/clients/sikder_foundation.webp",
    alt: "sikder foundation logo",
  },
  {
    url: "/images/clients/treatosBD.webp",
    alt: "treatos BD logo",
  },
  {
    url: "/images/clients/pulse_fitness.webp",
    alt: "pulse fitness logo",
  },
];

interface Logo {
  url: string;
  alt: string;
}

const LogoCell = ({
  logo,
  delay = 0,
  borderClasses = "",
}: {
  logo: Logo;
  delay?: number;
  borderClasses?: string;
}) => {
  return (
    <div
      className={`w-full aspect-square flex justify-center items-center relative ${borderClasses} overflow-hidden`}
    >
      <FadeIn delay={delay} direction="none">
        <Image
          src={logo.url}
          alt={logo.alt}
          width={800}
          height={800}
          className={`w-full h-full object-cover`}
        />
      </FadeIn>
    </div>
  );
};

export default function ClientSection() {
  const itemsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = itemsRef.current.filter(Boolean);
    if (!nodes.length) return;

    gsap.fromTo(
      nodes,
      { autoAlpha: 0, scale: 0.85 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full">
      <div className="">
        {/* Bento Grid - Desktop*/}
        <div className="hidden lg:grid grid-cols-3">
          <div className="grid grid-cols-2">
            <LogoCell
              logo={PLACEHOLDER_LOGOS[0]}
              borderClasses="border-r border-b"
              delay={0.2}
            />
            <LogoCell
              logo={PLACEHOLDER_LOGOS[1]}
              borderClasses="border-b"
              delay={0.3}
            />
            <div className="col-span-2 aspect-square flex justify-center items-center p-1.5
            ">
              <FadeIn delay={0.7} direction="none">
                <video
                  src="https://res.cloudinary.com/de8g5laai/video/upload/q_auto/f_auto/v1775384844/Untitled_design_zv95t5.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </FadeIn>
            </div>
          </div>
          <div className="grid grid-cols-2 border-x">
            <LogoCell
              logo={PLACEHOLDER_LOGOS[2]}
              delay={0.4}
              borderClasses="border-r border-b"
            />
            <LogoCell
              logo={PLACEHOLDER_LOGOS[3]}
              borderClasses="border-b"
              delay={0.5}
            />
            <LogoCell
              logo={PLACEHOLDER_LOGOS[4]}
              borderClasses="border-r border-b"
              delay={0.8}
            />
            <LogoCell
              logo={PLACEHOLDER_LOGOS[5]}
              borderClasses="border-b"
              delay={0.9}
            />
            <LogoCell
              logo={PLACEHOLDER_LOGOS[6]}
              borderClasses="border-r"
              delay={0.3}
            />
            <LogoCell logo={PLACEHOLDER_LOGOS[7]} delay={0.4} />
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-2 aspect-square flex justify-center items-center border-b overflow-hidden">
              <FadeIn delay={0.6} direction="none">
                <video
                  src="https://res.cloudinary.com/de8g5laai/video/upload/q_auto/f_auto/v1775312671/ApplyWise.io_or3uuv.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </FadeIn>
            </div>
            <LogoCell
              logo={PLACEHOLDER_LOGOS[8]}
              borderClasses="border-r"
              delay={0.5}
            />
            <LogoCell logo={PLACEHOLDER_LOGOS[9]} delay={0.6} />
          </div>
        </div>

        {/* Bento Grid - Tablet*/}
        <div className="hidden md:grid lg:hidden grid-cols-3">
          <LogoCell
            logo={PLACEHOLDER_LOGOS[0]}
            borderClasses="border-r border-b"
            delay={0.2}
          />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[1]}
            borderClasses="border-r border-b"
            delay={0.3}
          />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[2]}
            borderClasses="border-b"
            delay={0.4}
          />

          <div className="col-span-2 aspect-square flex justify-center items-center p-1.5 border-b border-r">
            <FadeIn delay={0.3} direction="none">
              <video
                src="https://res.cloudinary.com/de8g5laai/video/upload/q_auto/f_auto/v1775384844/Untitled_design_zv95t5.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>
          <div className="grid grid-cols-1">
            <LogoCell
              logo={PLACEHOLDER_LOGOS[3]}
              borderClasses="border-b"
              delay={0.4}
            />
            <LogoCell
              logo={PLACEHOLDER_LOGOS[4]}
              borderClasses="border-b"
              delay={0.5}
            />
          </div>
          <LogoCell
            logo={PLACEHOLDER_LOGOS[5]}
            borderClasses="border-r border-b"
            delay={0.3}
          />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[6]}
            borderClasses="border-r border-b"
            delay={0.4}
          />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[7]}
            borderClasses="border-b"
            delay={0.5}
          />
          <div className="grid grid-cols-1">
            <LogoCell
              logo={PLACEHOLDER_LOGOS[8]}
              borderClasses="border-b"
              delay={0.3}
            />
            <LogoCell logo={PLACEHOLDER_LOGOS[9]} delay={0.4} />
          </div>
          <div className="col-span-2 aspect-square flex justify-center items-center border-l">
            <FadeIn delay={0.5} direction="none">
              <video
                src="https://res.cloudinary.com/de8g5laai/video/upload/q_auto/f_auto/v1775312671/ApplyWise.io_or3uuv.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>
        </div>

        {/* Bento Grid - Mobile*/}
        <div className="md:hidden grid grid-cols-3">
          <LogoCell
            logo={PLACEHOLDER_LOGOS[0]}
            borderClasses="border-r"
            delay={0.2}
          />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[1]}
            borderClasses="border-r"
            delay={0.3}
          />
          <LogoCell logo={PLACEHOLDER_LOGOS[2]} delay={0.4} />

          <div className="col-span-3 aspect-square flex justify-center items-center border-y">
            <FadeIn delay={0.3} direction="none">
              <video
                src="https://res.cloudinary.com/de8g5laai/video/upload/q_auto/f_auto/v1775312671/ApplyWise.io_or3uuv.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>
          <LogoCell
            logo={PLACEHOLDER_LOGOS[3]}
            borderClasses="border-r"
            delay={0.3}
          />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[4]}
            borderClasses="border-r"
            delay={0.4}
          />
          <LogoCell logo={PLACEHOLDER_LOGOS[5]} delay={0.5} />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[6]}
            borderClasses="border-t border-r"
            delay={0.3}
          />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[7]}
            borderClasses="border-t border-r"
            delay={0.4}
          />
          <LogoCell
            logo={PLACEHOLDER_LOGOS[8]}
            borderClasses="border-t"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
