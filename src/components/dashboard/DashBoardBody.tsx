"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import Card from "../Card";
import DoughnutChart from "./chart/Doughnut";

export default function DashBoardBody() {
  const { analysisData } = useAnalysisData();

  return (
    <div className="mx-40 flex flex-col items-center py-8 ">
      <div className=" flex gap-x-8">
        <Card title="긍정 부정 비율">
          <DoughnutChart percent={analysisData.percent} />
        </Card>
        <Card title="긍정 부정 댓글">{analysisData.top5_text}</Card>
      </div>
    </div>
  );
}
