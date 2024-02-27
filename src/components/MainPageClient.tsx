"use client";

import useMoveScroll from "@/hooks/useMoveScroll";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./intro/Intro";
import About from "./about/About";
import Description from "./description/Description";
import Enter from "./enter/Enter";

export default function MainPageClient({ children }: { children: any }) {
  const { element: enterRef, onMoveToElement: moveToEnter } = useMoveScroll();

  useEffect(() => {
    AOS.init({ duration: 700 });
  });
  return (
    <>
      {/* <Intro onClickEnter={moveToEnter} /> */}
      <About />
      <Description />
      <Enter enterRef={enterRef} />
      {children}
    </>
  );
}
