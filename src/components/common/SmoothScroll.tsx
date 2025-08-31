import React, { useRef, useLayoutEffect, PropsWithChildren } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * SmoothScroll wraps your content in a fixed, animated container
 * and applies smooth, spring-based vertical scrolling, for a native-like buttery scroll effect.
 */
export const SmoothScroll: React.FC<
  PropsWithChildren<{ isMobile?: boolean }>
> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Calculate the scrollable height
  const [contentHeight, setContentHeight] = React.useState<number>(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  // Framer Motion: Get the y-scroll value as user scrolls
  const { scrollY } = useScroll();

  // Smooth out the scroll value using a spring for slick movement
  const smoothY = useSpring(scrollY, {
    stiffness: 120,
    damping: 28,
    mass: 1.2,
  });

  // Convert smoothState into a negative y position for our fixed container
  const y = useTransform(smoothY, (val) => -val);

  return (
    <>
      {/* Scroll spacer - ensures native scroll bar appears */}
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
