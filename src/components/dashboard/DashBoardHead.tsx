"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import arrow from "../../assets/under-arrow.png";
import Image from "next/image";

export default function DashBoardHead() {
  const { analysisData } = useAnalysisData();

  return (
    <section className=" pt-[8rem] pb-[1rem] px-[8rem]  bg-[#3A4458] text-white">
      <div className="flex gap-[2rem]">
        <img className="w-[20rem] object-cover " src={analysisData.thumbnail} />
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
      </div>
      <figure className="mt-[3rem] flex justify-center items-center">
        <Image src={arrow} alt="아래로 향하는 표시" width={30} />
        <div>이 영상에 대한 분석 내용</div>
        <Image src={arrow} alt="아래로 향하는 표시" width={30} />
      </figure>
    </section>
  );
}
