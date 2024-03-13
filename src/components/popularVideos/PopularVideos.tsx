import styles from "./popularMovies.module.scss";
import VideoItemList from "./VideoItemList";

export default function PopularVideos() {
  return (
    <section className={styles.popluarVideosWrapper}>
      <h1 className={styles.title}>인기 동영상을 분석해보세요!</h1>
      <VideoItemList />
    </section>
  );
}
