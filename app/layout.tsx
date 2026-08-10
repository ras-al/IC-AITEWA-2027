import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const lora = Playfair_Display({
  variable: "--font-lora",
  subsets: ["latin"],
  display: 'swap',
});

const workSans = Inter({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "IC-AITEWA 2027 | TKM College of Engineering",
  description: "International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation. Hosted by TKM College of Engineering, Kollam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${workSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
