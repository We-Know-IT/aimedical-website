import { useEffect, useState } from "react";

export const useWindowScrollPositions = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 });

  useEffect(() => {
    function updatePosition() {
      setPrevScrollPosition({ ...scrollPosition });
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return { prevScrollPosition, scrollPosition };
};
