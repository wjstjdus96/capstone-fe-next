import { useEffect } from "react";
import VideoItemList from "./VideoItemList";

export default function PopularVideos() {
  return (
    <div className=" pt-[50px] bg-[#FCBF49] p-[2rem]">
      <h2 className="text-white text-5xl font-bold">
        인기 동영상을 분석해보세요!
      </h2>
      <VideoItemList />
    </div>
  );
}
