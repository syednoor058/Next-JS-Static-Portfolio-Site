import { Sparkle } from "lucide-react";
import QuoteBox from "./ui/QuoteBox";
import Marquee from "react-fast-marquee";

const RandomQuoteSection = () => {
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];

  const items2 = ["Foundation", "Scalability", "Evolve", "Deployment", "Architecture"];

  return (
    <section className="flex flex-col items-center justify-between gap-12 mt-16">
      <Marquee
        speed={80}
        className="overflow-hidden w-full py-2 flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap text-white bg-black"
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="flex items-center px-3 md:px-4 gap-x-6 md:gap-x-8 lg:px-5 lg:gap-x-10 text-[6vw]"
          >
            {item} <Sparkle fill="#fff" stroke="#fff" />
          </span>
        ))}
      </Marquee>
      <QuoteBox />
      <Marquee
        speed={80}
        direction="right"
        className="overflow-hidden w-full py-2 flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap text-black bg-gold"
      >
        {items2.map((item, index) => (
          <span
            key={index}
            className="flex items-center px-3 md:px-4 gap-x-6 md:gap-x-8 lg:px-5 lg:gap-x-10 text-[6vw]"
          >
            {item} <Sparkle fill="#000" stroke="#000" />
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default RandomQuoteSection;
