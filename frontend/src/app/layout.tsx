import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
import { useState } from "react";

export const metadata = {
  title: "NFT Marketplace",
  description: "A modern platform for minting, reselling, and auctioning NFTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto py-10">{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          &copy; 2024 MintMuse
        </footer>
      </body>
    </html>
  );
}
