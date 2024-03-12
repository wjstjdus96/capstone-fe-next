import Header from "@/components/Header";
import MainPageClient from "@/components/MainPageClient";
import dynamic from "next/dynamic";

const PopularVideo = dynamic(
  () => import("../components/popularVideos/PopularVideos")
);

export default function Home() {
  return (
    <main className="h-full font-notoKR">
      <MainPageClient />
      <PopularVideo />
    </main>
  );
}
