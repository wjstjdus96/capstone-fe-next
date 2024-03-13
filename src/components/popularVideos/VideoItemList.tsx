import VideoItem from "./VideoItem";
import styles from "./popularMovies.module.scss";
import { fetchVideos } from "@/api/fetchVideos";

export const VideoItemList = async () => {
  const data = await fetchVideos();

  return (
    <ul className={styles.videoListWrapper}>
      {data &&
        data?.items?.map((item: any, idx: number) => (
          <VideoItem key={idx} item={item.snippet} idx={idx + 1} />
        ))}
    </ul>
  );
};

export default VideoItemList;
