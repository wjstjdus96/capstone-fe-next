"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import DashBoardHeadArrow from "./DashBoardHeadArrow";
import VideoDetails from "./VideoDetails";
import styles from "./dashboardHead.module.scss";

export default function DashBoardHead() {
  const { analysisData } = useAnalysisData();

  return (
    <section className={styles.wrapper}>
      <div className={styles.videoInfoBox}>
        <img
          src={analysisData.thumbnail}
          alt={`${analysisData.title} 영상 썸네일`}
        />
        <VideoDetails analysisData={analysisData} />
      </div>
      <DashBoardHeadArrow />
    </section>
  );
}
