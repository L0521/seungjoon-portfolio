import { useState, useLayoutEffect, useEffect, useRef } from "react";

export const useHeaderVisible = (
  trigger?: unknown,
  selector: string = ".custom-scrollbar",
) => {
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const lastScrollY = useRef(0);

  const [prevTrigger, setPrevTrigger] = useState(trigger);

  // 트리거(예: projectDetailId)가 변경될 때마다 애니메이션을 잠깐 끔 (렌더링 중 상태 업데이트)
  if (trigger !== prevTrigger) {
    setPrevTrigger(trigger);
    setIsReady(false);
  }

  useEffect(() => {
    if (!isReady) {
      const readyTimer = setTimeout(() => setIsReady(true), 50);
      return () => clearTimeout(readyTimer);
    }
  }, [isReady]);

  useLayoutEffect(() => {
    const container = document.querySelector(selector);
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;
      setIsTop(currentScrollY < 10);

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

  return { visible, isTop, isReady };
};
