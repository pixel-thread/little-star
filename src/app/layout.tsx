"use client";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/common/Layout";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ThemeProvider } from "@/components/provider/theme";
import { LoaderFive } from "@/components/ui/loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 4000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME || ""}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {isMounted ? (
            <Layout header={<Header />} footer={<Footer />}>
              {children}
            </Layout>
          ) : (
            <div className="bg-black w- h-screen flex items-center justify-center">
              <LoaderFive text={process.env.NEXT_PUBLIC_APP_NAME || ""} />
            </div>
          )}
        </ThemeProvider>
        {process.env.NODE_ENV === "development" && <GridGuide />}
      </body>
    </html>
  );
}
const GridGuide = () => {
  const isTablet = window.matchMedia("(min-width: 768px)").matches;
  const isLaptop = window.matchMedia("(min-width: 1024px)").matches;
  return (
    <div className="fixed inset-0 z-[999] pointer-events-none">
      <div className="container mx-auto h-full w-full grid grid-cols-4 gap-2 md:grid-cols-8 md:gap-4 lg:grid-cols-12 lg:gap-5">
        {Array.from({ length: isLaptop ? 12 : isTablet ? 8 : 4 }).map(
          (_, i) => (
            <div key={i} className="bg-blue-500/20 h-full w-full" />
          ),
        )}
      </div>
    </div>
  );
};
