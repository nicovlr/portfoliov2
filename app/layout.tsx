import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({ 
  subsets: ["latin"],
  variable:"--font-caption",
});

export const metadata: Metadata = {
  title: "Nico Dev · Software engineer",
  description: "Online creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        GeistSans.variable,
        GeistMono.variable,
         AnekTelugu.variable, 
         "font-sans h-full bg-background text-forground")}>
        {children}
      </body>
    </html>
  );
}
