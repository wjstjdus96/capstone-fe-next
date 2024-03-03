import Header from "@/components/Header";
import MainPageClient from "@/components/MainPageClient";
import PopularVideos from "@/components/popularVideos/PopularVideos ";

export default function Home() {
  return (
    <div className="h-full font-notoKR ">
      <Header />
      <MainPageClient>
        <PopularVideos />
      </MainPageClient>
    </div>
  );
}
