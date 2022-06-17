import { useCallback, useRef } from "react";

// returns a function that scrolls to the given element

export const useScrollTo = (elementId: string) => {
  const getElement = useCallback((elementId: string) => {
    if (typeof window !== "undefined") {
      return document.getElementById(elementId);
    }

    return null;
  }, []);

  const element = getElement(elementId);
  const ref = useRef(element);

  const scrollTo = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [ref]);

  return () => scrollTo();
};
