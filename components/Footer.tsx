import { NAV_ITEMS, socials } from "@/constants";
import Link from "next/link";
import FadeIn from "./ui/FadeIn";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gold text-[#1b1b1b] px-4 md:px-8 lg:px-14 pb-5 md:pb-7 lg:pb-10 pt-10 md:pt-14 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 uppercase">
      <div className="w-full flex">
        <div className="w-full lg:w-auto flex flex-col-reverse lg:flex-col gap-8 lg:gap-20 justify-between">
          <FadeIn
            delay={0.2}
            className="text-[18vw] md:text-[10vw] font-bold hover:text-black transition-all duration-300 ease-in-out leading-none"
          >
            Syed N.
          </FadeIn>

          <FadeIn
            delay={0.4}
            className="w-32 md:w-40 lg:w-80 h-32 md:h-40 lg:h-80 aspect-square"
          >
            <Image src={`https://res.cloudinary.com/de8g5laai/image/upload/v1770447960/Morrison_Sterling_4_chgufl.jpg`} alt="arrow icon image on dark square" width={800} height={800} className="w-full h-full object-cover" />
          </FadeIn>
        </div>
      </div>
      <div className="w-full flex flex-col gap-14 md:gap-10 justify-between">
        <div className="w-full grid grid-cols-2 gap-2">
          <ul className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((section, index) => (
              <li key={index}>
                <FadeIn delay={0.2 + index * 0.1}>
                  <Link
                    className="transition-all duration-700 cursor-pointer text-black hover:tracking-[0.3rem] ease-in-out font-semibold hover:font-bold text-2xl leading-none"
                    href={`${section.url}`}
                  >
                    {section.name}
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-1">
            {socials.map((social, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1}>
                <a
                  key={index}
                  href={social.href}
                  className="tracking-widest uppercase hover:text-black transition-all duration-300 font-semibold leading-none"
                >
                  {"[ "}
                  {social.name}
                  {" ]"}
                </a>
              </FadeIn>
            ))}
            <FadeIn delay={0.6} className="md:hidden">
              <a
                href="#"
                className="tracking-widest hover:text-black transition-all duration-300 font-semibold leading-none"
              >
                [ Email ]
              </a>
            </FadeIn>
            <FadeIn delay={0.6} className="hidden md:block mt-auto">
              <a
                href="#"
                className="tracking-widest hover:text-black transition-all duration-300 font-semibold leading-none lowercase underline underline-offset-2"
              >
                dev.syednoor@gmail.com
              </a>
            </FadeIn>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 text-sm">
          <ul>
            <li>
              <FadeIn delay={0.2}>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={0.3}>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </FadeIn>
            </li>
            <li>
              <div>
                <Link href="#" className="hover:underline">
                  Cookie Policy
                </Link>
              </div>
            </li>
          </ul>
          <div className="flex flex-col justify-between gap-4">
            <FadeIn delay={0.2}>
              Website by
              <br />
              Syed Shaeduzzaman Noor
            </FadeIn>
            <div className="mt-auto">
              Copyright &copy;2026 | All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
