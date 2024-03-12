"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import Card from "./Card";
import DoughnutChart from "./chart/DoughnutChart";
import CommentChart from "./chart/CommentChart";
import WordCloud from "./chart/WordCloudChart";
import LineChart from "./chart/LineChart";
import LikesTable from "./chart/LikesTable";
import RelatedSlider from "./chart/RelatedSlider";

export default function DashBoardBody() {
  const { analysisData } = useAnalysisData();

  return (
    <section className="px-40  flex flex-col items-center py-8 bg-white">
      <section className="w-full h-[340px] flex gap-x-8 mb-8">
        <Card title="긍정 부정 비율" basis={0.2}>
          <DoughnutChart percent={analysisData.percent} />
        </Card>
        <Card title="긍정 부정 댓글" basis={0.8}>
          <CommentChart
            top_comments={analysisData.top5_text}
            low_comments={analysisData.low5_text}
          />
        </Card>
      </section>
      <section className="w-full flex flex-row gap-x-8 mb-8">
        <Card title="키워드" basis={0.2}>
          <WordCloud keywords={analysisData.keyword} />
        </Card>
        <Card title="댓글 작성 시간" basis={0.8}>
          <LineChart times={analysisData.time} />
        </Card>
      </section>
      <section className="grid grid-cols-2  gap-x-8">
        <Card title="좋아요 많은 댓글" basis={0.5}>
          <LikesTable most_likes={analysisData.most_likes} />
        </Card>
        <Card title="연관동영상" basis={0.5}>
          <RelatedSlider related={analysisData.relation_video} />
        </Card>
      </section>
    </section>
  );
}
