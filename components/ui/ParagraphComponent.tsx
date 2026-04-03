import { BlurTextAnimationP } from "./BlurTextAnimation";

const ParagraphComponent = ({ text }: { text: string }) => {
  return (
    <BlurTextAnimationP
      text={text}
      delay={20}
      className="text-base lg:text-lg text-white/60 font-light max-w-120 mix-blend-difference"
    />
  );
};

export default ParagraphComponent;
