import { useEffect } from "react";
import VideoItemList from "./VideoItemList";
import styles from "../../styles/popularMovies.module.scss";

export default function PopularVideos() {
  return (
    <div className={styles.popluarVideosWrapper}>
      <h2 className={styles.title}>인기 동영상을 분석해보세요!</h2>
      <VideoItemList />
    </div>
  );
}
