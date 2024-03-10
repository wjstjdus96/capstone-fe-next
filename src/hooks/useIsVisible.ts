import { useEffect, useRef, useState } from "react";

interface UseIsVisiblePropsType {
  options: {
    threshold: number;
    rootMargin: string;
  };
  initialVisible: boolean;
}

export const useIsVisible = (props: UseIsVisiblePropsType) => {
  const { options, initialVisible } = props;
  const element = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (element.current) {
      observer.observe(element.current);
      return;
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, []);

  return { element, isVisible };
};
