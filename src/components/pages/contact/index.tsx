import { Container } from "@/components/common/Container";
import { TimelineContent } from "@/components/ui/timeline-content";
import {
  revealVariants,
  textVariants,
} from "@/lib/constant/animiation/varients";
import { useRef } from "react";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <section id="contact">
      <Container
        ref={contactRef}
        className="py-32 flex items-center justify-center flex-col h-full w-full"
      >
        <div className="mb-12 space-y-3 text-center flex flex-col items-center w-full justify-center">
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={contactRef}
            className="lg:text-8xl text-4xl md:text-6xl text-neutral-500/50 font-bold uppercase"
            customVariants={revealVariants}
          >
            <span>Contact Us</span>
          </TimelineContent>

          <TimelineContent
            as="div"
            animationNum={4}
            timelineRef={contactRef}
            customVariants={textVariants}
            className="text-center text-muted-foreground text-sm max-w-md md:max-w-xl sm:text-base"
          >
            <span>
              Have a question We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </span>
          </TimelineContent>
        </div>

        <div className=" w-full md:space-x-2 gap-y-2 md:gap-y-0 lg:space-x-6 flex flex-col-reverse md:flex-row lg:items-stretch">
          {/* Contact Form */}
          <TimelineContent
            className="w-full"
            as="div"
            timelineRef={contactRef}
            animationNum={2}
          >
            <ContactForm />
          </TimelineContent>
          {/* Contact Information & Additional Info */}

          <TimelineContent
            className="w-full"
            as="div"
            timelineRef={contactRef}
            animationNum={2}
          >
            <ContactInfo />
          </TimelineContent>
        </div>
      </Container>
    </section>
  );
}
