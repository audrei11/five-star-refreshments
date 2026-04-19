import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Five Star Refreshments",
  description: "Because you deserve a quality break",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
