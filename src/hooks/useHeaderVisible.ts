import { useState, useEffect, useRef } from "react";

export const useHeaderVisible = (selector: string = ".custom-scrollbar") => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const container = document.querySelector(selector);
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;

      // 스크롤이 거의 최상단이면 무조건 표시
      if (currentScrollY < 10) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [selector]);

  return visible;
};
