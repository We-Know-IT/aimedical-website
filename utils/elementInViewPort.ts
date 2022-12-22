import { RefObject, useCallback, useEffect, useState } from "react";
import { useWindowScrollPositions } from "./scroll";

export type ElementInViewportState = {
  isInViewport: boolean;
  direction: "down" | "up" | null;
};

export const useElementInViewPort = (el: RefObject<HTMLElement>) => {
  const { prevScrollPosition, scrollPosition } = useWindowScrollPositions();
  const [state, setState] = useState<ElementInViewportState>({
    isInViewport: false,
    direction: null,
  });

  const getScrollDirection = (
    prevScrollPosition: { scrollY: number; scrollX: number },
    currentScrollPosition: { scrollY: number; scrollX: number }
  ) => {
    return scrollPosition.scrollY > prevScrollPosition.scrollY ? "down" : "up";
  };

  const onScroll = useCallback(() => {
    if (el.current) {
      const box = el.current.getBoundingClientRect();
      /*
     If the top of the element is within 0 <---> window.innerHeight it means that the element is in the viewport.
    */
      if (box.top > 0 && box.top < window.innerHeight && !state.isInViewport) {
        setState({
          isInViewport: true,
          direction: getScrollDirection(prevScrollPosition, scrollPosition),
        });

        /**
         * If the bottom has passed the top of the window or if the top has passed the bottom of the window, the element is out of the viewport.
         *
         * */
      } else if (
        (box.bottom < 0 || box.top > window.innerHeight) &&
        state.isInViewport
      ) {
        setState({
          isInViewport: false,
          direction: getScrollDirection(prevScrollPosition, scrollPosition),
        });
      }
    }
  }, [state]);

  useEffect(onScroll, []);

  useEffect(() => {
    addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, [state]);

  return state;
};
