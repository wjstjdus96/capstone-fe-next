import Image from "next/image";
import bgImage from "../../assets/bg-analysis.jpg";
import IntroSubTitle from "./IntroSubTitle";
import styles from "../../styles/intro.module.scss";

export default function Intro({ onClickEnter }: { onClickEnter: () => void }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBox}>
        <h1 className={styles.subTitle}>
          유튜브 댓글 분석을 위한 새로운 플랫폼
        </h1>
        <h2 className={styles.title}>TubeAna</h2>
      </div>
      <button className={styles.button} onClick={onClickEnter}>
        분석하러 가기
      </button>
    </div>
  );
}
