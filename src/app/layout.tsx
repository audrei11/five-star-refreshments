import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXCORE — Build Your Legend",
  description: "Premium PC components and peripherals for elite builders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
