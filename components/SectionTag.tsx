import { BlurTextAnimationSpan } from "./ui/BlurTextAnimation";

const SectionTag = ({ text, color, padding = "pb-20" }: { text: string[]; color?: string; padding?: string }) => {
  return (
    <div
      className={`w-full flex flex-row gap-5 justify-between text-sm uppercase ${padding} ${color === "dark" ? "text-white/60" : ""}`}
    >
      {text.map((item, index) => (
        <BlurTextAnimationSpan
          key={index}
          text={item}
          delay={300}
          className={`${index === 1 && "text-gold"}`}
        />
      ))}
    </div>
  );
};

export default SectionTag;
