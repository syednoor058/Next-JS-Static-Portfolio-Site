import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PrimaryButton = ({ text, url = "#" }: { text: string; url?: string }) => {
  return (
    <div
      className="
        relative inline-flex h-11 overflow-hidden rounded-sm
        bg-gold transition-colors duration-300 ease-in-out
        hover:bg-white group justify-center items-center
      "
    >
      {/* Text */}
      <Link
        href={url}
        className=" h-full
          relative z-10 flex items-center
          pl-4 pr-16 uppercase font-bold text-dark-primary
          transition-all duration-300 ease-in-out leading-none
          group-hover:pl-16 group-hover:pr-4
        "
      >
        {text}
      </Link>

      {/* Icon box */}
      <div
        className="
          absolute right-0.5 top-0.5 h-10 aspect-square
          bg-black flex items-center justify-center
          transition-transform duration-300 ease-in-out
          group-hover:translate-x-40 rounded-sm
        "
      >
        <ArrowUpRight className="text-white transition-transform duration-300 ease-in-out group-hover:rotate-45" />
      </div>

      {/* Icon box 2 */}
      <div
        className="
          absolute left-0.5 top-0.5 h-10 aspect-square
          bg-black flex items-center justify-center
          transition-transform duration-300 ease-in-out -translate-x-100
          group-hover:translate-x-0 rounded-sm
        "
      >
        <ArrowUpRight className="text-white transition-transform duration-300 ease-in-out group-hover:rotate-45" />
      </div>
    </div>
  );
};

export default PrimaryButton;
