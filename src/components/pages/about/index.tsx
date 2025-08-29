"use client";
import type React from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { TimelineContent } from "@/components/ui/timeline-content";
import { Container } from "@/components/common/Container";

export function AboutUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 1.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <Container className="py-32 flex items-center justify-center flex-col h-full">
      <div className="text-center py-10">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={heroRef}
          className="lg:text-8xl text-4xl md:text-6xl text-neutral-500/50 font-bold uppercase"
          customVariants={revealVariants}
        >
          About Us
        </TimelineContent>
      </div>
      <div className="max-w-7xl mx-auto text-center" ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Right side - Content */}
          <div className="flex-1">
            <TimelineContent
              as="h1"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="sm:text-4xl text-2xl md:text-5xl !leading-[110%] font-semibold text-gray-900 mb-8"
            >
              We are{" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-blue-600 border-2 border-blue-500 inline-block xl:h-16  border-dotted px-2 rounded-md"
              >
                nurturing
              </TimelineContent>{" "}
              curious minds and empowering students to{" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-orange-600 border-2 border-orange-500 inline-block xl:h-16 border-dotted px-2 rounded-md"
              >
                achieve
              </TimelineContent>{" "}
              their fullest potential. Our mission is to create a safe,
              inclusive, and inspiring environment where learning{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-green-600 border-2 border-green-500 inline-block xl:h-16 border-dotted px-2 rounded-md"
              >
                comes alive.
              </TimelineContent>
            </TimelineContent>
            <div className="mt-12 text-center flex-col flex gap-2 justify-center">
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="mb-4 sm:text-xl text-xs"
              >
                <div className=" font-medium text-gray-900 mb-1 capitalize">
                  We are the Beacon School and we promise to
                </div>
                <div className=" text-gray-600 font-semibold uppercase">
                  inspire, guide, and empower every student
                </div>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="mb-4 sm:text-xl text-xs"
              >
                <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3">
                  Apply Now
                </Button>
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
