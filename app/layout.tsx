import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";
import LenisContainer from "@/components/LenisContainer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "maplibre-gl/dist/maplibre-gl.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-Stack Developer & SaaS Solutions Expert | Syed Noor",
  description:
    "I design and build scalable web apps, SaaS platforms, and high-performance digital solutions that help businesses grow efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased w-screen overflow-x-hidden bg-[#e5e5e0]`}
      >
        <div id="blend-root" className="relative">
          <header>
            <Navbar />
          </header>
          <main>
            <LenisContainer>{children}</LenisContainer>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
