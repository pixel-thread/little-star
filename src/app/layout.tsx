"use client";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/common/Layout";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { ThemeProvider } from "@/components/provider/theme";
import { LoaderFive } from "@/components/ui/loader";
import { GridGuide } from "@/components/common/GridGuide";

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
    setTimeout(() => setIsMounted(true), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME || ""}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
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
