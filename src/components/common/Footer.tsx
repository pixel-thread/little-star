"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "./Container";
import { revealVariants } from "@/lib/constant/animiation/varients";

type FooterSection = {
  label: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
};
const footerSections: FooterSection[] = [
  {
    label: "SITEMAP",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    label: "SOCIAL",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/next-codez/",
        external: true,
      },
      {
        label: "Twitter",
        href: "https://twitter.com/NextCodez",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/nextcodez/",
        external: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/nextcodezz",
        external: true,
      },
    ],
  },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 mt-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-12 py-12">
          <div className="flex-1 flex flex-col gap-5 items-center lg:items-start">
            {/* Logo/Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
              className="uppercase font-bold text-neutral-400 text-4xl md:text-6xl text-center"
            >
              {process.env.NEXT_PUBLIC_APP_NAME || "YourApp"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="font-medium text-neutral-600 text-lg md:text-xl mt-2 text-center lg:text-left"
            >
              Let’s build your next project together.
            </motion.p>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-14 max-w-xl mx-auto">
            {footerSections.map((section) => (
              <div key={section.label}>
                <h2 className="text-base sm:text-xl font-semibold text-neutral-900 mb-3">
                  {section.label}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <motion.li
                      key={link.href}
                      custom={j}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={revealVariants}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-700 text-base md:text-lg font-medium hover:underline transition"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-neutral-700 text-base md:text-lg font-medium hover:underline transition"
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 pt-6 pb-4 gap-2 text-neutral-500 text-sm">
          <span>
            &copy; {year} {process.env.NEXT_PUBLIC_APP_NAME}. All Rights
            Reserved.
          </span>
          <Link href="/privacy-policy" className="font-medium hover:underline">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
};
