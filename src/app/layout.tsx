"use client";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/common/Layout";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ThemeProvider } from "@/components/provider/theme";
import { LoaderFive } from "@/components/ui/loader";
import { useIsMobile } from "@/hooks/use-mobile";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {isMounted ? (
            <Layout
              header={<Header />}
              footer={<Footer />}
              children={children}
            />
          ) : (
            <div className="bg-black w- h-screen flex items-center justify-center">
              <LoaderFive text={process.env.NEXT_PUBLIC_APP_NAME || ""} />
            </div>
          )}
          {process.env.NODE_ENV === "development" && <GridGuide />}
        </ThemeProvider>
      </body>
    </html>
  );
}
const GridGuide = () => {
  return (
    <div className="fixed inset-0 z-[999] pointer-events-none">
      <div className="container mx-auto h-full w-full grid grid-cols-4 gap-2 md:grid-cols-8 md:gap-4 lg:grid-cols-12 lg:gap-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-blue-500/10 h-full w-full" />
        ))}
      </div>
    </div>
  );
};
