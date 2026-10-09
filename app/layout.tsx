import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

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
    default: "IC-AITEWA 2027 | TKM Conference (AITEWA / AITHWA) | TKMCE Kollam",
    template: "%s | TKM Conference | IC-AITEWA 2027",
  },
  description:
    "Official website of IC-AITEWA 2027 (TKM Conference / AITEWA / AITHWA) — International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation hosted by TKM College of Engineering (TKMCE), Kollam, Kerala, India (March 18–20, 2027).",
  keywords: [
    "tkm conference",
    "tkm conference 2027",
    "tkmce conference",
    "tkmce conference 2027",
    "aithwa",
    "aithwa 2027",
    "aithwa conference",
    "aitewa",
    "aitewa 2027",
    "aitewa conference",
    "ic aitewa",
    "ic-aitewa",
    "ic aitewa 2027",
    "ic-aitewa 2027",
    "icaitewa",
    "icaitewa 2027",
    "tkm international conference",
    "TKM College of Engineering conference",
    "TKM College of Engineering",
    "TKMCE",
    "TKMCE Kollam",
    "conference at TKM",
    "international conference",
    "artificial intelligence",
    "intelligent technologies",
    "energy",
    "water",
    "automation",
    "mechanical engineering conference tkm",
    "AI conference Kerala",
    "IEEE conference",
  ],
  authors: [{ name: "TKM College of Engineering", url: "https://tkmce.ac.in" }],
  creator: "TKM College of Engineering",
  publisher: "TKM College of Engineering",
  openGraph: {
    title: "IC-AITEWA 2027 | TKM Conference (AITEWA / AITHWA) | TKMCE",
    description:
      "Official website of IC-AITEWA 2027 (TKM Conference / AITEWA / AITHWA) — International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation. Hosted by TKM College of Engineering (TKMCE), Kollam, Kerala.",
    url: "https://ic-aitewa-2027.tkmce.ac.in",
    siteName: "IC-AITEWA 2027 | TKM Conference",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "IC-AITEWA 2027 - TKM Conference Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IC-AITEWA 2027 | TKM Conference (AITEWA / AITHWA)",
    description:
      "Official website of IC-AITEWA 2027 (TKM Conference / AITEWA / AITHWA) hosted by TKM College of Engineering, Kollam, Kerala, India.",
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
        <JsonLd />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
