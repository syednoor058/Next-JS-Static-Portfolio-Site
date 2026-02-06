import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";
import LenisContainer from "@/components/LenisContainer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Noor | Welcome to My Portfolio",
  description: "Full-stack Software Developer with more than 2 years of experience, working in multiple software development projects, building high-quality, production-ready web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main>
          <LenisContainer>{children}</LenisContainer>
        </main>
      </body>
    </html>
  );
}
