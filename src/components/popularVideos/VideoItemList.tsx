import VideoItem from "./VideoItem";
import VideoListSwiper from "./VideoListSwiper";

const fetchVideos = async () => {
  const res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyC6yTlfN6VPRPV9VYV9C_VVwQLDvK78sUg",
    {
      method: "GET",
    }
  );
  return res.json();
};

export const VideoItemList = async () => {
  const data = await fetchVideos();

  return (
    <ul className="my-[3rem] w-1/2">
      <VideoListSwiper>
        {data.items.map((item: any, idx: number) => (
          <VideoItem item={item.snippet} idx={idx + 1} />
        ))}
      </VideoListSwiper>
    </ul>

    // <ul className="my-[3rem] flex flex-col items-center">
    //   {data.items.map((item: any, idx: number) => (
    //     <VideoItem item={item.snippet} idx={idx + 1} />
    //   ))}
    // </ul>
  );
};

export default VideoItemList;
