"use client";

import useMoveScroll from "@/hooks/useMoveScroll";
import "aos/dist/aos.css";
import About from "./about/About";
import Description from "./description/Description";
import Enter from "./enter/Enter";
import Intro from "./intro/Intro";

export default function MainPageClient({ children }: { children: any }) {
  const { element: enterRef, onMoveToElement: moveToEnter } = useMoveScroll();

  return (
    <>
      <Intro onClickEnter={moveToEnter} />
      <About />
      <Description />
      <Enter enterRef={enterRef} />
      {children}
    </>
  );
}
