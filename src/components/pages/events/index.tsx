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

type EventItem = {
  year: string;
  title: string;
  position: string;
  imgSrc: string;
  tags: string[];
  answer: string;
};

const eventsData: EventItem[] = [
  {
    year: "2020-2021",
    title: "STEM Innovation Fair",
    position: "Event Coordinator",
    imgSrc:
      "https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=880&auto=format&fit=crop",
    tags: ["STEM", "Education", "Innovation"],
    answer:
      "Organized a school-wide STEM fair showcasing student projects in robotics, coding, and environmental science to inspire innovation.",
  },
  {
    year: "2019-2020",
    title: "Annual Art Exhibition",
    position: "Lead Curator",
    imgSrc:
      "https://images.unsplash.com/photo-1752350434868-af7431a9f14b?q=80&w=880&auto=format&fit=crop",
    tags: ["Art", "Creativity", "Exhibition"],
    answer:
      "Curated and led the annual art exhibition featuring student artworks, promoting self-expression and community engagement.",
  },
  {
    year: "2018-2019",
    title: "Music & Culture Week",
    position: "Program Director",
    imgSrc:
      "https://images.unsplash.com/photo-1751704549146-6cae1f348143?q=80&w=880&auto=format&fit=crop",
    tags: ["Music", "Culture", "Events"],
    answer:
      "Directed a week-long celebration of music and cultural diversity through performances, workshops, and guest speakers.",
  },
  {
    year: "2017-2018",
    title: "Community Service Day",
    position: "Volunteer Lead",
    imgSrc:
      "https://images.unsplash.com/photo-1751704549146-6cae1f348143?q=80&w=880&auto=format&fit=crop",
    tags: ["Community", "Service", "Volunteering"],
    answer:
      "Led student volunteers in a community cleanup and outreach event, fostering social responsibility and teamwork.",
  },
  {
    year: "2015-2017",
    title: "Literacy Awareness Campaign",
    position: "Campaign Coordinator",
    imgSrc:
      "https://images.unsplash.com/photo-1648348329481-93f85519a868?q=80&w=687&auto=format&fit=crop",
    tags: ["Literacy", "Education", "Campaign"],
    answer:
      "Coordinated activities and workshops to promote reading and writing skills among students and local families.",
  },
  {
    year: "2013-2015",
    title: "School Sports Festival",
    position: "Event Organizer",
    imgSrc:
      "https://images.unsplash.com/photo-1654910971111-836ac0c213ae?q=80&w=678&auto=format&fit=crop",
    tags: ["Sports", "Fitness", "Community"],
    answer:
      "Organized the annual sports festival involving multiple games, competitions, and fitness challenges to encourage active lifestyles.",
  },
  {
    year: "2012-2013",
    title: "Science Exploration Week",
    position: "Coordinator",
    imgSrc:
      "https://images.unsplash.com/photo-1635244621620-ccadff2eb29d?q=80&w=880&auto=format&fit=crop",
    tags: ["Science", "Exploration", "Learning"],
    answer:
      "Coordinated interactive science experiments and field trips designed to spark curiosity and scientific thinking in students.",
  },
];

export function Events() {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <Container
      className="sm:py-20 py-6 mx-auto min-h-full w-full"
      ref={heroRef}
    >
      <article className="text-center mx-auto flex flex-col items-center py-10">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={heroRef}
          className="lg:text-8xl text-4xl md:text-6xl text-neutral-500/50 font-bold uppercase"
          customVariants={revealVariants}
        >
          Events
        </TimelineContent>
        <div className="flex items-center justify-center">
          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={heroRef}
            className="text-center text-sm max-w-md md:max-w-xl sm:text-base"
            customVariants={revealVariants}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            aperiam dolorem voluptates mollitia necessitatibus voluptatibus
            porro alias repellendus quasi maiores!
          </TimelineContent>
        </div>
      </article>

      <div className="mt-3 max-w-7xl mx-auto">
        <Accordion>
          {eventsData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-0 rounded-none bg-transparent w-full"
            >
              <TimelineContent
                as="div"
                animationNum={index}
                timelineRef={heroRef}
                customVariants={revealVariants}
              >
                <AccordionHeader
                  customIcon
                  className=" border-t-2 gap-4 border-black hover:no-underline px-4 py-2 flex relative data-[active]:bg-gray-200 hover:bg-gray-200 text-black sm:text-base text-sm"
                >
                  <p className="sm:text-xl text-sm space-x-2 gap-10 sm:w-96 font-medium">
                    {item.title}
                  </p>
                  <span className="relative group-data-[active]:rotate-90 text-neutral-600 p-2 -translate-x-1 rounded-xl">
                    <Plus className="group-data-[active]:rotate-90 transition-all duration-300" />
                  </span>
                </AccordionHeader>
              </TimelineContent>
              <AccordionPanel
                className="space-y-4 w-full mx-auto bg-gray-200 data-[active]:bg-gray-200 px-0 "
                articleClassName="pt-2 px-0 bg-gray-200 sm:p-10 p-4 rounded-lg"
              >
                <div className="gap-4 justify-between grid sm:grid-cols-2">
                  <div className="w-[80%] space-y-10">
                    <span className="flex flex-col space-y-2">
                      <span className="text-sm sm:text-base italic font-normal">
                        ({item.year})
                      </span>
                      <span className="sm:text-xl uppercase font-medium">
                        {item.position}
                      </span>
                    </span>
                    <p className="text-sm sm:text-base">{item.answer}</p>
                    <div className="flex gap-2 text-sm">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded-md bg-neutral-200 text-black border border-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.imgSrc}
                      className="w-full sm:h-96 h-64 object-cover rounded-md"
                    />
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
