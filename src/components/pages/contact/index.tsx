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
        className="py-32 flex items-center justify-center flex-col h-full"
      >
        <div className="mx-auto">
          <div className="mb-12 space-y-3 text-center">
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
                Have a question We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </span>
            </TimelineContent>
          </div>

          <TimelineContent
            as="div"
            timelineRef={contactRef}
            animationNum={2}
            className="grid gap-6 lg:grid-cols-2 lg:items-stretch"
          >
            {/* Contact Form */}
            <ContactForm />
            {/* Contact Information & Additional Info */}
            <ContactInfo />
          </TimelineContent>
        </div>
      </Container>
    </section>
  );
}
