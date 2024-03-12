import { IAnalysisData } from "@/types/data";
import React from "react";

function VideoDetails({ analysisData }: { analysisData: IAnalysisData }) {
  return (
    <section>
      <h3 className="text-[1.4rem] mb-[0.3rem] font-semibold">
        {analysisData.title}
      </h3>
      <div className="flex gap-[0.8rem] text-sm mb-[1.2rem]">
        <p>조회수 {analysisData.views}</p>
        <p>{analysisData.uploadTime}</p>
      </div>
      <section className="flex text-sm items-center gap-[0.5rem]">
        <img
          className="w-[1.5rem] rounded-full"
          src={analysisData.profileImg}
        />
        <h6>{analysisData.profileName}</h6>
      </section>
    </section>
  );
}

export default VideoDetails;
