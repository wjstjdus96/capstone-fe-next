"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import arrow from "../../assets/under-arrow.png";
import Image from "next/image";

export default function DashBoardHead() {
  const { analysisData } = useAnalysisData();

  return (
    <div className=" pt-[8rem] pb-[1rem] px-[8rem]  bg-[#3A4458] text-white">
      <div className="flex gap-[2rem]">
        <img className="w-[20rem] object-cover " src={analysisData.thumbnail} />
        <div>
          <div className="text-[1.4rem] mb-[0.3rem] font-semibold">
            {analysisData.title}
          </div>
          <div className="flex gap-[0.8rem] text-sm mb-[1.2rem]">
            <div>조회수 {analysisData.views}</div>
            <div>{analysisData.uploadTime}</div>
          </div>
          <div className="flex text-sm items-center gap-[0.5rem]">
            <img
              className="w-[1.5rem] rounded-full"
              src={analysisData.profileImg}
            />
            <div>{analysisData.profileName}</div>
          </div>
        </div>
      </div>
      <div className="mt-[3rem] flex justify-center items-center">
        <Image src={arrow} alt="아래로 향하는 표시" width={30} />
        <div>이 영상에 대한 분석 내용</div>
        <Image src={arrow} alt="아래로 향하는 표시" width={30} />
      </div>
    </div>
  );
}
