"use client";

import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
} from "@/components/ui/progessive-slider";
import { Quote } from "lucide-react";
import { TimelineContent } from "../ui/timeline-content";
import { revealVariants } from "@/lib/constant/animiation/varients";
import { useRef } from "react";
import { Container } from "./Container";

// Testimonial data
const testimonials = [
  {
    company: "vortext",
    image:
      "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    author: {
      name: "Alex Thompson",
      position: "VP of Engineering, Microsoft Cloud",
      image:
        "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    },
    rating: 5,
    text: "UI Layout Pro has transformed how we build our enterprise applications. The component library's flexibility and robust architecture have reduced our development time by 60%. ",
    stats: [
      { label: "Development time saved", value: 60 },
      { label: "Team productivity boost", value: 45 },
    ],
  },
  {
    company: "velocity",
    image:
      "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    author: {
      name: "Emily Rodriguez",
      position: "Director of Product Design, Adobe",
      image:
        "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    },
    rating: 5,
    text: "The attention to detail in UI Layout Pro's components is exceptional. We've significantly reduced our design-to-development handoff time, and our designers love the consistent, pixel-perfect implementations.",
    stats: [
      { label: "Design iteration speed", value: 85 },
      { label: "Component reusability", value: 92 },
    ],
  },
  {
    company: "synergy",
    image:
      "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    author: {
      name: "Ryan Chen",
      position: "Chief Technology Officer, Shopify",
      image:
        "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    },
    rating: 5,
    text: "UI Layout Pro's enterprise-grade components have been a game-changer for our merchant dashboard development. The accessibility features and performance optimizations are particularly impressive.",
    stats: [
      { label: "Accessibility compliance", value: 98 },
      { label: "Performance improvement", value: 75 },
    ],
  },
  {
    company: "enigma",
    image:
      "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    author: {
      name: "Sarah Mitchell",
      position: "Head of Frontend Architecture, Meta",
      image:
        "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    },
    rating: 5,
    text: "We've integrated UI Layout Pro across multiple projects, and the results have been outstanding. The type-safe components and seamless theming system have made our development process incredibly efficient.",
    stats: [
      { label: "Code consistency score", value: 94 },
      { label: "Developer satisfaction", value: 89 },
    ],
  },
];

export function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  return (
    <Container
      ref={testimonialsRef}
      className="text-center max-w-7xl text-black place-content-center py-4 md:py-16"
    >
      {/* Header */}
      <div className="text-center flex-col flex items-center space-y-5 py-6 md:py-12">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={testimonialsRef}
          className="lg:text-8xl text-4xl md:text-6xl text-neutral-500/50 font-bold uppercase"
          customVariants={revealVariants}
        >
          Testimonials
        </TimelineContent>
        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={testimonialsRef}
          className="text-center text-sm max-w-md md:max-w-xl px-2 sm:text-base"
          customVariants={revealVariants}
        >
          See how leading technology companies are accelerating their
          development and delivering exceptional user experiences with UI Layout
          Pro.
        </TimelineContent>
      </div>

      <ProgressSlider
        vertical={false}
        activeSlider="vortext"
        className="mx-auto container bg-transparent w-full px-5"
      >
        <SliderContent>
          {testimonials.map((item, index) => (
            <SliderWrapper
              key={index}
              value={item?.company}
              className="space-y-4"
            >
              {/* Testimonial Text */}

              <div className="flex justify-start space-x-2 items-center">
                <Quote className="w-10 h-10 fill-white rotate-180" />
                <div className="h-[0.2px] bg-primary w-md" />
              </div>
              <TimelineContent
                as="p"
                animationNum={1}
                timelineRef={testimonialsRef}
                customVariants={revealVariants}
                className="sm:text-4xl flex  sm:mb-6 mb-3 sm:px-10 px-5"
              >
                {item.text}
              </TimelineContent>
              <div className="flex justify-end space-x-5 items-center">
                <div className="h-[0.2px] bg-primary w-md" />
                <Quote
                  className="w-10 h-10 fill-white"
                  style={{ transform: "scaleX(1)" }}
                />
              </div>
              {/* Author Info */}
              <div className="flex items-center px-2 gap-4 pt-10">
                <TimelineContent
                  animationNum={index}
                  className="w-12 h-12 rounded-full overflow-hidden"
                  timelineRef={testimonialsRef}
                  customVariants={{
                    hidden: { scale: 0.1, opacity: 0, filter: "blur(10px)" },
                    visible: () => ({
                      scale: 1,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.7,
                      },
                    }),
                  }}
                  as="div"
                >
                  <img
                    src={item.author.image}
                    alt={item.author.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </TimelineContent>
                <div className="text-start">
                  <div className="font-semibold">
                    <TimelineContent
                      as="p"
                      animationNum={index}
                      timelineRef={testimonialsRef}
                      customVariants={{
                        hidden: { x: -50, opacity: 0, filter: "blur(10px)" },
                        visible: () => ({
                          x: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.7,
                          },
                        }),
                      }}
                    >
                      {item.author.name}
                    </TimelineContent>
                  </div>
                  <div className="text-sm text-gray-500">
                    <TimelineContent
                      as="p"
                      animationNum={index}
                      timelineRef={testimonialsRef}
                      customVariants={{
                        hidden: { x: -50, opacity: 0, filter: "blur(10px)" },
                        visible: () => ({
                          x: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.7,
                          },
                        }),
                      }}
                    >
                      {item.author.position}
                    </TimelineContent>
                  </div>
                </div>
              </div>
            </SliderWrapper>
          ))}
        </SliderContent>
        <SliderBtnGroup className="h-fit text-white text-start mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {testimonials.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.company}
              className="p-5 capitalize border text-black border-primary backdrop-blur-md rounded-xl relative"
              progressBarClass="bg-gray-300 rounded-xl h-full"
            >
              <TimelineContent
                as="p"
                animationNum={index}
                timelineRef={testimonialsRef}
                customVariants={revealVariants}
              >
                {item.author.name}
              </TimelineContent>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </Container>
  );
}
