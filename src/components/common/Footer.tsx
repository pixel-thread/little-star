import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Container } from "./Container";

type FooterLinkItem = {
  label: string;
  href: string;
};

type FooterLinks = {
  label: string;
  items: FooterLinkItem[];
};

const footerLinks: FooterLinks[] = [
  {
    label: "Academics",
    items: [
      { label: "Elementary Program", href: "/programs/elementary" },
      { label: "Middle School", href: "/programs/middle" },
      { label: "High School", href: "/programs/high" },
      { label: "AP Courses", href: "/academics/ap" },
      { label: "Curriculum", href: "/academics/curriculum" },
    ],
  },
  {
    label: "School Life",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Faculty & Staff", href: "/faculty" },
      { label: "Campus Life", href: "/campus-life" },
      { label: "Athletics", href: "/athletics" },
      { label: "Arts & Music", href: "/arts" },
    ],
  },
  {
    label: "Admissions",
    items: [
      { label: "Apply Now", href: "/apply" },
      { label: "Tuition & Fees", href: "/admissions/tuition" },
      { label: "Financial Aid", href: "/admissions/financial-aid" },
      { label: "Visit Campus", href: "/visit" },
      { label: "FAQs", href: "/admissions/faq" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Student Portal", href: "/portal" },
      { label: "Parent Resources", href: "/parents" },
      { label: "Calendar", href: "/calendar" },
      { label: "News & Events", href: "/news" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="">
      <Container className="mx-auto py-16">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8 lg:mb-0">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LS</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Little School</h3>
              <p className="text-sm text-gray-600">Excellence in Education</p>
            </div>
          </div>

          {/* Newsletter + Columns */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-y-16">
              {/* Newsletter */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  Stay Connected
                </h2>
                <p className="mt-4 text-gray-500">
                  Subscribe to receive updates about school events, news, and
                  important announcements.
                </p>
              </div>

              <div className="lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    Email
                  </label>
                  <div className="border border-gray-200 rounded-lg sm:flex sm:items-center sm:gap-4 p-1">
                    <Input
                      type="email"
                      id="UserEmail"
                      placeholder="parent@email.com"
                      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                    />
                    <Button className="mt-1 w-full bg-blue-600 px-6 py-3 text-sm font-bold tracking-wide text-white transition hover:bg-blue-700 sm:mt-0 sm:w-auto sm:shrink-0">
                      Subscribe
                    </Button>
                  </div>
                </form>
              </div>

              {/* Dynamic column rendering */}
              {footerLinks.map((section) => (
                <div key={section.label} className="">
                  <p className="font-medium text-gray-900">{section.label}</p>
                  <ul className="mt-6 space-y-4 text-sm">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-gray-700 transition hover:text-blue-600"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Info & Socials */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    Contact Information
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>123 Education Avenue</p>
                    <p>Learning City, LC 12345</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: info@littleschool.edu</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Follow Us</h4>
                  <ul className="flex gap-6">
                    <li>
                      <Link
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        LinkedIn
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="sm:flex sm:justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Little School. All rights
              reserved. | Accredited by the National Association of Independent
              Schools
            </p>
            <ul className="mt-4 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/non-discrimination"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Non-Discrimination Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
