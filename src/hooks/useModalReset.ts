import { useEffect } from "react";

export const useModalReset = (resetFn: () => void) => {
  useEffect(() => {
    return () => {
      resetFn(); // 모달이 닫힐 때 상태 초기화
    };
  }, [resetFn]);
};
