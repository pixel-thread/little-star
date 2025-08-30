import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "@/components/common/Container";
import { motion } from "motion/react";

export const HeroHeader = () => {
  return (
    <Container className="z-50 text-white flex flex-col justify-center items-center">
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="max-w-7xl px-20 text-center w-full flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl md:text-7xl font-bold">
          Empowering Young Minds
          <br />
          for a &nbsp;
          <span className="text-primary text-nowrap">Bright Future</span>
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          We nurture creativity, critical thinking, and character development to
          prepare our students for success in school and beyond.
        </p>
        <Button
          variant={"default"}
          className="mt-8 rounded px-8 py-6 text-white font-semibold transition"
        >
          Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </Container>
  );
};
