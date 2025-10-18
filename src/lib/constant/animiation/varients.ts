export const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(20px)",
    y: 40,
    opacity: 0,
  },
};

export const textVariants = {
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

export const slideVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    rotateX: 45,
  },
  visible: {
    scale: 1,
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.0],
    },
  },
  upExit: {
    opacity: 1,
    y: "-150%",
    transition: {
      duration: 1,
    },
  },
  downExit: {
    opacity: 1,
    y: "150%",
    transition: {
      duration: 1,
    },
  },
};
