"use client";

import { useAnalysisData } from "@/contexts/analysisData";

export default function DashBoardHead() {
  const { analysisData } = useAnalysisData();

  return (
    <div className=" pt-20 flex flex-col items-center bg-slate-200">
      <div className="mb-8 flex text-3xl font-bold text-slate-700">
        분석결과
      </div>
      <div className="w-[340px] h-[190px] shadow-lg mb-8 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover "
          src={analysisData.thumbnail}
        />
      </div>
      <div className="mb-8 text-2xl font-bold text-slate-700">
        {analysisData.title}
      </div>
    </div>
  );
}
