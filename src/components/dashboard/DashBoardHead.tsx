"use client";

import { useAnalysisData } from "@/contexts/analysisData";

export default function DashBoardHead() {
  const { analysisData } = useAnalysisData();

  return <div>{analysisData.videoId}</div>;
}
