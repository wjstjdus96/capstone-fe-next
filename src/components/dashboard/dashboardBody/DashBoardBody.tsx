"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import Card from "./BoardCard";
import DoughnutChart from "../chart/DoughnutChart";
import CommentChart from "../chart/commentChart/CommentChart";
import WordCloud from "../chart/WordCloudChart";
import LineChart from "../chart/LineChart";
import LikesTable from "../chart/likesTable/LikesTable";
import RelatedSlider from "../chart/relatedSlider/RelatedSlider";
import styles from "./dashboardBody.module.scss";

export default function DashBoardBody() {
  const { analysisData } = useAnalysisData();

  return (
    <section className={styles.wrapper}>
      <section className={`${styles.boardRowFlex} ${styles.firstRow}`}>
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
      <section className={styles.boardRowFlex}>
        <Card title="키워드" basis={0.2}>
          <WordCloud keywords={analysisData.keyword} />
        </Card>
        <Card title="댓글 작성 시간" basis={0.8}>
          <LineChart times={analysisData.time} />
        </Card>
      </section>
      <section className={styles.boardRowGrid}>
        <Card title="좋아요 많은 댓글">
          <LikesTable most_likes={analysisData.most_likes} />
        </Card>
        <Card title="연관동영상">
          <RelatedSlider related={analysisData.relation_video} />
        </Card>
      </section>
    </section>
  );
}
