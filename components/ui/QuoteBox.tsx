"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const quotes = [
  {
    text: (
      <div className="text-[8vw] leading-none">
        <FadeIn delay={0.2}>
          “ <span className="font-normal">Great software</span> is built
        </FadeIn>
        <FadeIn delay={0.4}>
          when a <span className="text-gold">developer learns</span>
        </FadeIn>
        <FadeIn delay={0.6}>
          to <span className="italic">think clearly</span> before
        </FadeIn>
        <FadeIn delay={0.8}>
          <span className="font-semibold">typing anything</span>. ”
        </FadeIn>
        <FadeIn delay={1.0}>
          <span className="text-base opacity-70">— Kent Beck</span>
        </FadeIn>
      </div>
    ),
  },
  {
    text: (
      <div className="text-[8vw] leading-none">
        <FadeIn delay={0.2}>
          “ A <span className="font-normal">true engineer</span> writes
        </FadeIn>
        <FadeIn delay={0.4}>
          <span className="font-semibold">simple solutions</span>
        </FadeIn>
        <FadeIn delay={0.6}>
          to <span className="italic">problems that once</span>
        </FadeIn>
        <FadeIn delay={0.8}>
          seemed <span className="text-gold font-bold">impossible</span>. ”
        </FadeIn>
        <FadeIn delay={1.0}>
          <span className="text-sm opacity-70">— Martin Fowler</span>
        </FadeIn>
      </div>
    ),
  },
  {
    text: (
      <div className="text-[8vw] leading-none">
        <FadeIn delay={0.2}>
          “ The <span className="font-normal">best code</span> feels like
        </FadeIn>
        <FadeIn delay={0.4}>
          <span className="font-semibold">a quiet conversation</span>
        </FadeIn>
        <FadeIn delay={0.6}>
          <span className="italic font-extralight">where every line</span> knows
        </FadeIn>
        <FadeIn delay={0.8}>
          it&apos;s <span className="text-gold font-bold">purpose</span>. ”
        </FadeIn>
        <FadeIn delay={1.0}>
          <span className="text-sm opacity-70">— Robert C. Martin</span>
        </FadeIn>
      </div>
    ),
  },
  {
    text: (
      <div className="text-[8vw] leading-none">
        <FadeIn delay={0.2}>
          “ <span className="font-normal">Good engineers</span> reduce
        </FadeIn>
        <FadeIn delay={0.4}>
          <span className="font-semibold">complex ideas</span>
        </FadeIn>
        <FadeIn delay={0.6}>
          <span className="italic">into systems</span> that work
        </FadeIn>
        <FadeIn delay={0.8}>
          with <span className="text-gold font-bold">elegance</span>. ”
        </FadeIn>
        <FadeIn delay={1.0}>
          <span className="text-sm opacity-70">— Linus Torvalds</span>
        </FadeIn>
      </div>
    ),
  },
  {
    text: (
      <div className="text-[8vw] leading-none">
        <FadeIn delay={0.2}>
          “ <span className="font-normal">Engineering</span> is art that
        </FadeIn>
        <FadeIn delay={0.4}>
          <span className="font-semibold">solves real problems</span>
        </FadeIn>
        <FadeIn delay={0.6}>
          with <span className="italic">logic shaped </span>
        </FadeIn>
        <FadeIn delay={0.8}>
          into <span className="text-gold font-bold">structure</span>. ”
        </FadeIn>
        <FadeIn delay={1.0}>
          <span className="text-sm opacity-70">— Bjarne Stroustrup</span>
        </FadeIn>
      </div>
    ),
  },
];

const QuoteBox = () => {
  const quoteRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length),
  );

  const fadeIn = () => {
    gsap.fromTo(
      quoteRef.current,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );
  };

  const fadeOut = (onComplete: () => void) => {
    gsap.to(quoteRef.current, {
      autoAlpha: 0,
      y: -10,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete,
    });
  };

  const showNewQuote = () => {
    fadeOut(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * quotes.length);
      } while (nextIndex === currentIndex);

      setCurrentIndex(nextIndex);
      fadeIn();
    });
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-5">
      <div
        ref={quoteRef}
        className="overflow-hidden font-extralight text-center contact-text-responsive px-4"
      >
        {quotes[currentIndex].text}
      </div>
      <FadeIn delay={0.3}>
        <button
          onClick={showNewQuote}
          className="mt-8 px-3 py-2 rounded-full border border-black/20 hover:border-transparent hover:bg-white hover:text-black transition-all duration-300 flex flex-row justify-between items-center gap-5 cursor-pointer group"
        >
          <span className="">Next Quote</span>{" "}
          <span>
            <ArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
          </span>
        </button>
      </FadeIn>
    </div>
  );
};

export default QuoteBox;
