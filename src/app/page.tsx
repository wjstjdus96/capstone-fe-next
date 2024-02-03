"use client";

import About from "@/components/mainPage/About";
import Description from "@/components/mainPage/Description";
import Enter from "@/components/mainPage/Enter";
import Intro from "@/components/mainPage/Intro";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import useMoveScroll from "@/hooks/useMoveScroll";

export default function Home() {
  const { element: aboutRef, onMoveToElement: moveToAbout } = useMoveScroll();
  const { element: enterRef, onMoveToElement: moveToEnter } = useMoveScroll();
  const { element: descriptionRef, onMoveToElement: moveToDescription } =
    useMoveScroll();

  useEffect(() => {
    AOS.init({ duration: 700 });
  });

  return (
    <div className="h-full font-notoKR ">
      <Header
        onClickAbout={moveToAbout}
        onClickEnter={moveToEnter}
        onClickDescription={moveToDescription}
      />
      <Intro onClickEnter={moveToEnter} />
      <About aboutRef={aboutRef} />
      <Enter enterRef={enterRef} />
      <Description descriptionRef={descriptionRef} />
    </div>
  );
}
