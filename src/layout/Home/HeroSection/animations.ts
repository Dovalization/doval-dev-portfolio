import { Variants } from "framer-motion";

export const SlideInRight: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const HeroContentVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};
