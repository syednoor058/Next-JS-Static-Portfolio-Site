import { NAV_ITEMS, socials } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gold text-[#1b1b1b] px-4 md:px-8 lg:px-14 pb-5 md:pb-7 lg:pb-10 pt-10 md:pt-14 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 uppercase">
      <div className="w-full flex flex-row lg:flex-col gap-20 justify-between">
        <div className="text-[12vw] md:text-[7vw] font-bold hover:text-black transition-all duration-300 ease-in-out leading-none">Syed N.</div>
        <div>
          <div className="w-18 md:w-28 lg:w-40 h-18 md:h-28 lg:h-40 rounded-md bg-[#1b1b1b] flex justify-center items-center">
            <ArrowUpRight stroke="#CFA355" className="w-28 h-28" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-14 md:gap-10 justify-between">
        <div className="w-full grid grid-cols-2 gap-2">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((section, index) => (
              <li key={index}>
                <Link
                  className="transition-all duration-700 cursor-pointer text-black hover:tracking-[0.3rem] ease-in-out font-semibold hover:font-bold text-2xl leading-none"
                  href={`${section.url}`}
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-1.5">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="tracking-widest uppercase hover:text-black transition-all duration-300 font-semibold leading-none"
              >
                {"[ "}
                {social.name}
                {" ]"}
              </a>
            ))}
            <a href="#" className="md:hidden tracking-widest hover:text-black transition-all duration-300 font-semibold leading-none">[ Email ]</a>
            <a href="#" className="hidden md:block tracking-widest hover:text-black transition-all duration-300 font-semibold leading-none mt-auto lowercase underline underline-offset-2">dev.syednoor@gmail.com</a>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 text-sm">
          <ul>
            <li>
              <Link href="#" className="hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Terms of Service</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">Cookie Policy</Link>
            </li>
          </ul>
          <div className="flex flex-col justify-between gap-4">
            <div>
              Website by
              <br />
              Syed Shaeduzzaman Noor
            </div>
            <div className="mt-auto">Copyright &copy;2026 | All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
