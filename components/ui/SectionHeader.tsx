import { ReactNode } from "react";
import FadeIn from "./FadeIn";

interface HeaderData {
  title: ReactNode;
  paragraph: string;
  header: string[];
  theme: "dark" | "light";
}

const SectionHeader = ({ title, paragraph, header, theme }: HeaderData) => {
  return (
    <div
      className={`pb-20 md:pb-28 lg:pb-40 ${theme === "dark" ? "text-white/60" : "text-black/60"}`}
    >
      <FadeIn
        delay={0.2}
        className={`w-full flex flex-row gap-5 justify-between text-sm uppercase pb-20`}
      >
        <span>[{header[0]}]</span>
        <span className="text-gold">{header[1]}</span>
        <span>{header[2]}</span>
      </FadeIn>
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end">
        <FadeIn delay={0.3}>
          <h2
            className={`${theme === "dark" ? "text-white" : "text-black"} max-w-120 text-[12vw] md:text-[7vw] font-oswald font-bold leading-none uppercase`}
          >
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="max-w-120 text-lg">{paragraph}</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default SectionHeader;
