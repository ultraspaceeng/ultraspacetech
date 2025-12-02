import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import { Bricolage_Grotesque } from 'next/font/google';
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'], // Essential: specify subsets
  display: 'swap', // Recommended: prevents FOIT (Flash of Invisible Text)
  // If you use Tailwind or CSS variables:
  variable: '--font-bricolage',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultra Space Technologies",
  description: "The NEXT GEN Software, Technology, Engineering Innovative Creations ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}>
        {children}
      </body>
    </html>
  );
}
