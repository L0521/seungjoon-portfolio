import { useEffect } from "react";

export const useScrollTop = (
  trigger: unknown,
  selector: string = ".custom-scrollbar",
) => {
  useEffect(() => {
    // 상세 페이지 진입 시(trigger가 있을 때) 무조건 초기화
    // 또는 trigger가 메뉴명(문자열 'About' 등)일 때도 초기화하도록 유연하게 처리
    if (!trigger) return;

    const container = document.querySelector(selector) as HTMLElement | null;
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [trigger, selector]);
};
