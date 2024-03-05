"use client";

import useMoveScroll from "@/hooks/useMoveScroll";
import "aos/dist/aos.css";
import About from "./about/About";
import Description from "./description/Description";
import Enter from "./enter/Enter";
import Intro from "./intro/Intro";
import { useIsVisible } from "@/hooks/useIsVisible";
import Header from "./Header";

interface IMainPageClient {
  children: any;
}

export default function MainPageClient({ children }: IMainPageClient) {
  const { element: enterRef, onMoveToElement: moveToEnter } = useMoveScroll();
  const { element, isVisible } = useIsVisible({
    options: { rootMargin: "0px", threshold: 0.8 },
    initialVisible: true,
  });

  return (
    <>
      <Header isVisible={isVisible} />
      {/* <Intro
        element={element}
        isVisible={isVisible}
        onClickEnter={moveToEnter}
      />
      <About />
      <Description />
      <Enter enterRef={enterRef} /> */}
      {children}
    </>
  );
}
