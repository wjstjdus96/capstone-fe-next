import Header from "@/components/header/Header";
import MainPageClient from "@/components/MainPageClient";
import dynamic from "next/dynamic";
import styles from "../styles/home.module.scss";

const PopularVideo = dynamic(
  () => import("../components/popularVideos/PopularVideos")
);

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <MainPageClient />
      <PopularVideo />
    </main>
  );
}
