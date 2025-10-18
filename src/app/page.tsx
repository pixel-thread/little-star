"use client";

import { HeroSection } from "@/components/pages/hero";
import { Testimonials } from "@/components/common/Testimonials";
import { Achivements } from "@/components/pages/achivements";
import { Gallery } from "@/components/pages/gallery";
import { AboutUs } from "@/components/pages/about";
import { Events } from "@/components/pages/events";
import { AnnouncementPage } from "@/components/pages/announcement";
import Contact from "@/components/pages/contact";

export default function Home() {
  return (
    <div className="flex bg-gray-200 flex-col">
      <HeroSection />
      <AboutUs />
      <Achivements />
      <Events />
      <Gallery />
      {/* <Testimonials /> */}
      <AnnouncementPage />
      <Contact />
    </div>
  );
}
