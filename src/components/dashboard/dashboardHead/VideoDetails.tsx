import { IAnalysisData } from "@/types/data";
import React from "react";
import styles from "./dashboardHead.module.scss";

function VideoDetails({ analysisData }: { analysisData: IAnalysisData }) {
  return (
    <section>
      <h3 className={styles.videoInfoTitle}>{analysisData.title}</h3>
      <div className={styles.videoInfoOther}>
        <p>조회수 {analysisData.views}</p>
        <p>{analysisData.uploadTime}</p>
      </div>
      <section className={styles.videoCreatorBox}>
        <img src={analysisData.profileImg} />
        <h6>{analysisData.profileName}</h6>
      </section>
    </section>
  );
}

export default VideoDetails;
