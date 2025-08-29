import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Container } from "@/components/common/Container";

export const HeroHeader = () => {
  return (
    <Container className="relative py-20 md:py-40 w-full left-0 bottom-0 right-0 top-0">
      <div className="h-full py-10 md:py-20 lg:px-30">
        <h1 className="text-2xl text-black md:text-7xl font-bold">
          Empowering Young Minds <br /> for a Bright Future
        </h1>
        <p className="max-w-2xl text-base text-black md:text-xl mt-8 dark:text-neutral-200">
          We nurture creativity, critical thinking, and character development to
          prepare our students for success in school and beyond.
        </p>
        <Button
          variant={"default"}
          className="mt-8 rounded px-8 py-6 text-white font-semibold transition"
        >
          Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Container>
  );
};
