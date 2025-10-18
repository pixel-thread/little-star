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
