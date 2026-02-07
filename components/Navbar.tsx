"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { socials } from "@/constants";
import { NAV_ITEMS } from "@/constants";

export default function Navbar() {
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const topLineRef = useRef<HTMLSpanElement | null>(null);
  const bottomLineRef = useRef<HTMLSpanElement | null>(null);
  const iconTl = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  /* ---------------- GSAP ---------------- */
  useGSAP(() => {
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<",
      );
  }, []);

  /* ---------------- Scroll logic (optimized) ---------------- */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // If menu is open, never hide the toggle button
      if (isOpen) {
        setShowBurger(true);
        return;
      }

      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  /* ---------------- Actions ---------------- */
  const toggleMenu = () => {
    if (isOpen) {
      iconTl.current?.reverse();
    } else {
      iconTl.current?.play();
    }
    setIsOpen(!isOpen);
  };

  /* ---------------- Render ---------------- */
  return (
    <>
      {/* Fullscreen Menu */}
      <nav
        className={`fixed z-50 flex flex-col justify-between w-full h-full px-6 md:px-10 uppercase bg-black text-white/80 py-20 gap-y-10 md:w-1/2 md:left-1/2 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-1000 ease-in-out`}
      >
        <ul className="flex flex-col text-4xl gap-y-2 md:text-5xl">
          {NAV_ITEMS.map((section, index) => (
            <li
              key={index}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
            >
              <Link
                className="transition-all duration-700 cursor-pointer hover:text-white hover:tracking-[0.5rem] ease-in-out hover:font-bold"
                href={`${section.url}`}
                onClick={toggleMenu}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              dev.syednoor@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-wrap gap-x-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  {"[ "}
                  {social.name}
                  {" ]"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Top Bar */}
      <div className="fixed z-50 flex flex-row w-full items-center justify-between px-4 md:px-10 h-14">
        <div
          className="cursor-pointer transition-all"
          style={{
            clipPath: showBurger
              ? "circle(100% at 50% 50%)"
              : "circle(0% at 50% 50%)",
          }}
        >
          <Link href="/">
            <div className="text-white font-bold text-xl mix-blend-difference">
              SYED N.
            </div>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="flex flex-col items-center justify-center gap-1 rounded-full cursor-pointer"
          style={{
            clipPath: showBurger
              ? "circle(50% at 50% 50%)"
              : "circle(0% at 50% 50%)",
          }}
        >
          <span ref={topLineRef} className="block h-0.5 w-6 bg-white md:w-10 mix-blend-difference" />
          <span
            ref={bottomLineRef}
            className="block h-0.5 w-6 bg-white md:w-10 mix-blend-difference"
          />
        </button>
      </div>
    </>
  );
}
