"use client";

import { useAnalysisData } from "@/contexts/analysisData";

export default function DashBoardBody() {
  const { analysisData } = useAnalysisData();

  return <div>{analysisData.percent}</div>;
}
