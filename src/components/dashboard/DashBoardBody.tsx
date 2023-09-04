"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import Card from "../Card";
import DoughnutChart from "./chart/DoughnutChart";
import CommentChart from "./chart/CommentChart";
import WordCloud from "./chart/WordCloudChart";
import LineChart from "./chart/LineChart";
import LikesTable from "./chart/LikesTable";
import RelatedSlider from "./chart/RelatedSlider";

export default function DashBoardBody() {
  const { analysisData } = useAnalysisData();

  return (
    <div className="mx-40  flex flex-col items-center py-8 ">
      <div className="w-full h-[340px] flex gap-x-8 mb-8">
        <Card title="긍정 부정 비율" basis={0.2}>
          <DoughnutChart percent={analysisData.percent} />
        </Card>
        <div className="w-full h-full overflow-hidden">
          <Card title="긍정 부정 댓글" basis={0.8}>
            <CommentChart
              top_comments={analysisData.top5_text}
              low_comments={analysisData.low5_text}
            />
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-row gap-x-8 mb-8">
        <Card title="키워드" basis={0.2}>
          <WordCloud keywords={analysisData.keyword} />
        </Card>
        <Card title="댓글 작성 시간" basis={0.8}>
          <LineChart times={analysisData.time} />
        </Card>
      </div>
      <div className="w-full flex flex-row gap-x-8">
        <Card title="좋아요 많은 댓글" basis={0.5}>
          <LikesTable most_likes={analysisData.most_likes} />
        </Card>
        <div className="w-1/2">
          <Card title="연관동영상" basis={0.5}>
            <RelatedSlider related={analysisData.relation_video} />
          </Card>
        </div>
      </div>
    </div>
  );
}
