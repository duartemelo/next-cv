import { useEffect, useState } from "react";

const useScrollDetection = (
  elementRef: React.RefObject<HTMLElement>
): boolean => {
  const [scrollStatus, setScrollStatus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;

      if (element) {
        const elementHeight = element.clientHeight;
        const elementOffsetTop = element.offsetTop;
        const currentScrollY = window.scrollY;

        const isOnElement =
          currentScrollY >= elementOffsetTop - elementHeight / 2 &&
          currentScrollY <= elementOffsetTop + elementHeight / 2;

        setScrollStatus(isOnElement);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return scrollStatus;
};

export default useScrollDetection;
