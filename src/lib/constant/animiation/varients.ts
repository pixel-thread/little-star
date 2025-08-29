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
