import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "KSM — AI Advisory & Implementation",
  description:
    "KSM partners with forward-thinking companies to develop AI strategy, design intelligent systems, and implement solutions that create measurable business value.",
  openGraph: {
    title: "KSM — AI Advisory & Implementation",
    description:
      "Transform your business with AI that works. Strategy, design, and implementation from first insight to full deployment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
