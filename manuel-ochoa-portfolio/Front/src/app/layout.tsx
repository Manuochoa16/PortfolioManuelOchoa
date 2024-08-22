// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manuel Ochoa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Manuel Ochoa</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="flex-1 p-5 pt-20">{children}</main>
      </body>
    </html>
  );
}
