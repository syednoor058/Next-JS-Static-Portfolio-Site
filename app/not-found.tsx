// app/not-found/page.tsx
import FadeIn from "@/components/ui/FadeIn";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";

export const metadata = {
  title: "404 - Page Not Found | Syed Noor",
  description:
    "The page you are looking for does not exist. Return home or explore other sections.",
};

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative section-container">
      {/* Background Cover */}
      <FadeIn
        delay={0.1}
        className="absolute inset-0 w-full h-full z-0 blur-[0px]"
      >
        <Image
          src="https://res.cloudinary.com/de8g5laai/image/upload/v1770377281/26127101_wavy_background_4_buejwi.jpg"
          alt="a dark hero background"
          fill
          className="object-cover opacity-60"
        />
      </FadeIn>
      <div className="relative z-1">
        <FadeIn delay={0.2}>
          <h1 className="w-full text-center uppercase full-width-word text-white font-bold relative leading-none">
            Error 404
          </h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="w-full text-center uppercase text-[#e5e5e0] font-light relative leading-none py-6 lg:py-10 text-xl md:text-2xl">
            OOPS! The page is not available.
          </p>
        </FadeIn>
        <FadeIn delay={0.6} className="w-full flex justify-center items-center"><PrimaryButton url="/" text="Go Back Home" /></FadeIn>
      </div>
    </section>
  );
}
