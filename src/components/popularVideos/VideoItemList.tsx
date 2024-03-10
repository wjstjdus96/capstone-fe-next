import VideoItem from "./VideoItem";
import styles from "../../styles/popularMovies.module.scss";

export const VideoItemList = async () => {
  const fetchVideos = async () => {
    const res = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=KR&key=AIzaSyC6yTlfN6VPRPV9VYV9C_VVwQLDvK78sUg",
      {
        method: "GET",
        cache: "no-store",
      }
    );
    return res.json();
  };
  const data = await fetchVideos();

  return (
    <ul className={styles.videoListWrapper}>
      {data.items.map((item: any, idx: number) => (
        <VideoItem key={idx} item={item.snippet} idx={idx + 1} />
      ))}
    </ul>
  );
};

export default VideoItemList;
