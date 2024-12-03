import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFT marketplace",
  description: "a NFT marketplace",
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
