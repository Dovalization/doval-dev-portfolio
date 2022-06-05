import { Variants } from "framer-motion";

export const ErrorVariant: Variants = {
  initial: {
    opacity: 0,
    y: -10,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};
