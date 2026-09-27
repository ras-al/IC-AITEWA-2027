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
  metadataBase: new URL("https://ic-aitewa-2027.tkmce.ac.in"),
  title: {
    default: "IC-AITEWA 2027 | TKM College of Engineering",
    template: "%s | IC-AITEWA 2027",
  },
  description:
    "International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation (IC-AITEWA 2027). Hosted by TKM College of Engineering, Kollam, Kerala, India.",
  keywords: [
    "IC-AITEWA 2027",
    "international conference",
    "artificial intelligence",
    "intelligent technologies",
    "energy",
    "water",
    "automation",
    "TKM College of Engineering",
    "Kollam",
    "Kerala",
    "India",
    "AI conference",
    "machine learning",
    "deep learning",
    "IEEE conference",
  ],
  authors: [{ name: "TKM College of Engineering" }],
  openGraph: {
    title: "IC-AITEWA 2027 | TKM College of Engineering",
    description:
      "International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation. Hosted by TKM College of Engineering, Kollam.",
    url: "https://ic-aitewa-2027.tkmce.ac.in",
    siteName: "IC-AITEWA 2027",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "IC-AITEWA 2027 Conference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IC-AITEWA 2027 | TKM College of Engineering",
    description:
      "International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ic-aitewa-2027.tkmce.ac.in",
  },
  verification: {
    google: "MjQ03pgdmmWgmraZDbj8_LDA0Dvt4TFPfesgjEIQAH0",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
