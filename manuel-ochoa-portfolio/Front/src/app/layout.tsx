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
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-custom-radial-gradient bg-cover bg-fixed`}
      >
        <Navbar />
        <main className="flex-1 p-5 pt-20 flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
