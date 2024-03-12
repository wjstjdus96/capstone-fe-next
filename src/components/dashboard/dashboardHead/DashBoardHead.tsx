"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import DashBoardHeadArrow from "./DashBoardHeadArrow";
import VideoDetails from "./VideoDetails";

export default function DashBoardHead() {
  const { analysisData } = useAnalysisData();

  return (
    <section className=" pt-[8rem] pb-[1rem] px-[8rem]  bg-[#3A4458] text-white">
      <div className="flex gap-[2rem]">
        <img
          className="w-[20rem] object-cover "
          src={analysisData.thumbnail}
          alt={`${analysisData.title} 영상 썸네일`}
        />
        <VideoDetails analysisData={analysisData} />
      </div>
      <DashBoardHeadArrow />
    </section>
  );
}
