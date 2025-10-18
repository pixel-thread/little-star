"use client";
import React, {
  useRef,
  useLayoutEffect,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

// Hook: allows hash (#id) anchors to scroll into view manually
function useAnchorScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el)
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
    };

    // Run on initial render
    scrollToHash();

    // Listen for hash changes
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
}

/**
 * SmoothScroll wraps your content in a fixed, animated container
 * and applies smooth, spring-based vertical scrolling,
 * while preserving #hash navigation.
 */
export const SmoothScroll: React.FC<
  PropsWithChildren<{ isMobile?: boolean }>
> = ({ children }) => {
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // measure scroll height on content update
  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const { scrollY } = useScroll();

  const smoothY = useSpring(scrollY, {
    stiffness: 120,
    damping: 28,
    mass: 1.2,
  });

  const y = useTransform(smoothY, (val) => -val);

  // enable hash scrolling even with fixed layout
  useAnchorScroll();
  if (isMobile) {
    return <>{children}</>;
  }
  return (
    <>
      {/* Spacer ensures the page still scrolls natively */}
      <div style={{ height: contentHeight }} />

      <motion.div
        ref={contentRef}
        style={{
          y,
          position: "fixed",
          left: 0,
          top: 0,
          width: "100vw",
          willChange: "transform",
          zIndex: 1,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
