import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TKM Conference (IC-AITEWA 2027 / AITEWA / AITHWA)",
  description:
    "Contact the organizing secretaries and conference desk for IC-AITEWA 2027 (TKM Conference / AITEWA / AITHWA) at TKM College of Engineering (TKMCE), Kollam, Kerala.",
  keywords: [
    "tkm conference contact",
    "aithwa contact",
    "aitewa organizing team",
    "tkmce conference email",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
