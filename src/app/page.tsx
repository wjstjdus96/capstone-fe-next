import Header from "@/components/Header";
import MainPageClient from "@/components/MainPageClient";
import dynamic from "next/dynamic";
import PopularVideos from "@/components/popularVideos/PopularVideos ";

export default function Home() {
  return (
    <div className="h-full font-notoKR ">
      <MainPageClient />
      <PopularVideos />
    </div>
  );
}
