import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Button = ({ text, url = "#" }: { text: string; url?: string }) => {
  return (
    <div className="bg-gold rounded-sm inline-flex flex-row items-center p-0.5 group hover:scale-105 transition-all duration-300 ease-in-out">
        <Link href={url} className="pl-3 pr-4 py-1 uppercase font-bold text-[#1b1b1b]">{text}</Link>
        <div className="h-full aspect-square rounded-sm bg-[#1b1b1b] p-2 flex justify-center items-center">
            <ArrowUpRight className="text-white group-hover:rotate-45 transition-all duration-300 ease-in-out" />
        </div>
    </div>
  );
};

export default Button;
