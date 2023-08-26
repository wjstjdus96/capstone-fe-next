"use client";

import { useAnalysisData } from "@/contexts/analysisData";

export default function DashBoardBody() {
  const { analysisData } = useAnalysisData();

  return (
    <div className="flex flex-col items-center">
      {/* <div>{analysisData.thumbnail}</div> */}V
    </div>
  );
}
