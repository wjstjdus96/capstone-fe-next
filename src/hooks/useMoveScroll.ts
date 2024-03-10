import { useRef } from "react";

export const useMoveScroll = () => {
  const element = useRef<HTMLDivElement | null>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement };
};

export default useMoveScroll;
