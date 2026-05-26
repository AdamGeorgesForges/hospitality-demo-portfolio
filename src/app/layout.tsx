import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hospitality Website Demos | Independent Hotel Website Portfolio",
  description: "A curated portfolio of hospitality website demos for independent hotels — built to demonstrate design direction, UX patterns, and WordPress-ready frontend architecture.",
  keywords: "hospitality website demo, independent hotel website, hotel website portfolio, boutique hotel design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
