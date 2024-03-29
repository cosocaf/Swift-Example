import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollHistory = new Map<string, { x: number; y: number }>();

export const useScrollHistory = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    if (!scrollHistory.has(location.hash)) {
      scrollHistory.set(location.hash, {
        x: 0,
        y: 0,
      });
    }

    const { x, y } = scrollHistory.get(location.hash)!;
    window.scrollTo(x, y);
  }, [location.hash]);
};
