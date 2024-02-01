"use client";

import About from "@/components/mainPage/About";
import Description from "@/components/mainPage/Description";
import Enter from "@/components/mainPage/Enter";
import Intro from "@/components/mainPage/Intro";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="h-full pt-[50px] font-notoKR">
      <Intro />
      <About />
      <Enter />
      <Description />
    </div>
  );
}
