import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";


const font = Inter({
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Krish Kunwar - Full Stack Developer",
  description: "Krish Kunwar is a full stack developer with a passion for building web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
