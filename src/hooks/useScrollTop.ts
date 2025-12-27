import { useEffect } from "react";

export const useScrollTop = (
  trigger: unknown,
  selector: string = ".custom-scrollbar"
) => {
  useEffect(() => {
    // trigger 값이 변할 때마다(상세 진입 or 목록 복귀 둘 다 포함) 실행
    const container = document.querySelector(selector) as HTMLElement | null;
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [trigger, selector]);
};
