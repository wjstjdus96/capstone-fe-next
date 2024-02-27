import { useState } from "react";

export const useIsVisible = () => {
  const [isTop, setIsTop] = useState(false);
  const options = {
    root: null,
    threshold: 0,
    rootMargin: `-10px`,
  };

  const stickyNav = function (entries: any) {
    const [entry] = entries;
    console.log(entry);
  };

  const observer = new IntersectionObserver(stickyNav, options);

  return { isTop };
};
