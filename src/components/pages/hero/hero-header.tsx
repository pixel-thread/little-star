import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "@/components/common/Container";
import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-content";
import { revealVariants } from "@/lib/constant/animiation/varients";

export const HeroHeader = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <Container className="z-50 text-white flex flex-col justify-center items-center">
      <TimelineContent
        ref={heroRef}
        className="max-w-7xl px-20 text-center w-full flex flex-col items-center justify-center"
        as="h1"
        animationNum={0}
        timelineRef={heroRef}
        customVariants={revealVariants}
      >
        <TimelineContent
          as="h1"
          animationNum={1}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="text-3xl md:text-7xl font-bold"
        >
          Preparation of young ones
          <br />
          for the&nbsp;
          <TimelineContent
            as="span"
            animationNum={2}
            timelineRef={heroRef}
            customVariants={revealVariants}
            className="text-white border-2 border-white-500 inline-block xl:h-19 border-dotted px-2 rounded-md"
          >
            Future
          </TimelineContent>
          .
        </TimelineContent>
        <TimelineContent
          as="p"
          animationNum={4}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="max-w-2xl text-md font-medium text-muted-foreground md:text-xl mt-8 dark:text-neutral-200"
        >
          Empowering young minds with skills and resilience to embrace change
          and create meaningful impact.
        </TimelineContent>
        <Button className="mt-8 rounded px-16 py-6 text-white font-semibold transition">
          Apply Now <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </TimelineContent>
    </Container>
  );
};
