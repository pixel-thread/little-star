"use client";
import { Container } from "@/components/common/Container";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@/components/ui/accordion";
import { TimelineContent } from "@/components/ui/timeline-content";
import { revealVariants } from "@/lib/constant/animiation/varients";
import { Plus } from "lucide-react";
import { useRef } from "react";

type AnnouncementItem = {
  year: string;
  title: string;
  role: string;
  description: string;
};

const announcementsData: AnnouncementItem[] = [
  {
    year: "2025-Q3",
    title: "Back to School Orientation",
    role: "Administration Team",
    description:
      "Join us for the Back to School Orientation to meet teachers, learn about the curriculum, and understand school policies.",
  },
  {
    year: "2025-Q2",
    title: "Annual Sports Day",
    role: "Physical Education Department",
    description:
      "Get ready for an exciting day of athletic competitions, team events, and fun activities to promote fitness and teamwork.",
  },
  {
    year: "2025-Q1",
    title: "Science Fair Participation",
    role: "Science Department",
    description:
      "Students are invited to participate in the upcoming Science Fair showcasing innovative projects and experiments.",
  },
];

export function AnnouncementPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  return (
    <Container className="sm:py-20 py-8 mx-auto w-full" ref={pageRef}>
      <section id="announcements">
        <article className="text-center mx-auto flex flex-col items-center py-10">
          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={pageRef}
            className="lg:text-8xl text-4xl md:text-6xl text-neutral-500/50 font-bold uppercase"
            customVariants={revealVariants}
          >
            Announcements
          </TimelineContent>
          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={pageRef}
            className="text-center text-muted-foreground text-sm max-w-md md:max-w-xl sm:text-base"
            customVariants={revealVariants}
          >
            Stay up to date with the latest news, updates, and features from our
            team.
          </TimelineContent>
        </article>

        <Accordion>
          {announcementsData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`announcement-${index}`}
              className="mb-4 rounded-lg border border-neutral-300 bg-white/20 shadow-sm"
            >
              <AccordionHeader
                customIcon
                className="flex justify-between items-center px-5 py-3 cursor-pointer text-neutral-800 font-semibold text-lg border-b border-neutral-200 rounded-t-lg hover:bg-neutral-50 data-[active]:bg-neutral-100"
              >
                <div>
                  <p>{item.title}</p>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {item.year} — {item.role}
                  </p>
                </div>
                <span className="text-neutral-600 p-2 rounded-full">
                  <Plus className="group-data-[active]:rotate-45 transition-transform duration-300" />
                </span>
              </AccordionHeader>
              <AccordionPanel
                className="space-y-0 rounded-b-lg bg-white text-neutral-700 text-base w-full mx-auto data-[active]:bg-white/20"
                articleClassName="bg-gray-200/30 my-2 sm:p-10 rounded-lg"
              >
                <TimelineContent
                  as="p"
                  animationNum={1}
                  timelineRef={pageRef}
                  className="text-start text-md"
                  customVariants={revealVariants}
                >
                  {item.description}
                </TimelineContent>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Container>
  );
}
