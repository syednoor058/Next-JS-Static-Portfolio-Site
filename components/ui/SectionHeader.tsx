import SectionTag from "../SectionTag";
import { BlurTextAnimationSpan } from "./BlurTextAnimation";
import ParagraphComponent from "./ParagraphComponent";

interface HeaderData {
  title: string[];
  paragraph: string;
  header: string[];
  theme: "dark" | "light";
}

const SectionHeader = ({ title, paragraph, header, theme }: HeaderData) => {
  return (
    <div
      className={`pb-20 md:pb-28 lg:pb-40 ${theme === "dark" ? "text-white/60" : "text-black/60"}`}
    >
      <SectionTag text={[`[${header[0]}]`, `${header[1]}`, `${header[2]}`]} color={theme} />
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end">
          <h2
            className={`${theme === "dark" ? "text-white" : "text-black"} max-w-120 text-[12vw] md:text-[7vw] font-marcellus font-medium leading-none uppercase`}
          >
            {title.map((line, index) => (
              <BlurTextAnimationSpan key={index} text={line} delay={300} />
            ))}
          </h2>
        <ParagraphComponent text={paragraph} />
      </div>
    </div>
  );
};

export default SectionHeader;
