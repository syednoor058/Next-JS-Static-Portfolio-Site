"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const quotes = [
  {
    text: (
      <p className="text-[8vw] leading-none">
        “ <span className="font-normal">Great software</span> is built <br />
        when a <span className="text-gold">developer learns</span>
        <br />
        to <span className="italic">think clearly</span> before
        <br />
        <span className="font-semibold">typing anything</span>. ” <br />
        <span className="text-base opacity-70">— Kent Beck</span>
      </p>
    ),
  },
  {
    text: (
      <p className="text-[8vw] leading-none">
        “ A <span className="font-normal">true engineer</span> writes <br />
        <span className="font-semibold">simple solutions</span>
        <br />
        to <span className="italic">problems that once</span> <br />
        seemed <span className="text-gold font-bold">impossible</span>. ” <br />
        <span className="text-sm opacity-70">— Martin Fowler</span>
      </p>
    ),
  },
  {
    text: (
      <p className="text-[8vw] leading-none">
        “ The <span className="font-normal">best code</span> feels like <br />
        <span className="font-semibold">a quiet conversation</span>
        <br />
        <span className="italic font-extralight">where every line</span> knows
        <br />
        it&apos;s <span className="text-gold font-bold">purpose</span>. ” <br />
        <span className="text-sm opacity-70">— Robert C. Martin</span>
      </p>
    ),
  },
  {
    text: (
      <p className="text-[8vw] leading-none">
        “ <span className="font-normal">Good engineers</span> reduce <br />
        <span className="font-semibold">complex ideas</span>
        <br />
        <span className="italic">into systems</span> that work
        <br />
        with <span className="text-gold font-bold">elegance</span>. ” <br />
        <span className="text-sm opacity-70">— Linus Torvalds</span>
      </p>
    ),
  },
  {
    text: (
      <p className="text-[8vw] leading-none">
        “ <span className="font-normal">Engineering</span> is art that <br />
        <span className="font-semibold">solves real problems</span>
        <br />
        with <span className="italic">logic shaped </span>
        <br />
        into <span className="text-gold font-bold">structure</span>. ” <br />
        <span className="text-sm opacity-70">— Bjarne Stroustrup</span>
      </p>
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

      <button
        onClick={showNewQuote}
        className="mt-8 px-3 py-2 rounded-full border border-black/20 hover:border-transparent hover:bg-white hover:text-black transition-all duration-300 flex flex-row justify-between items-center gap-5 cursor-pointer group"
      >
        <span className="">Next Quote</span> <span><ArrowRight className="group-hover:-rotate-45 transition-all duration-300 ease-in-out" /></span>
      </button>
    </div>
  );
};

export default QuoteBox;
