import { useIsVisible } from "@/hooks/useIsVisible";
import styles from "../../styles/intro.module.scss";
import IntroScrollArrow from "./IntroScrollArrow";

interface IIntro {
  onClickEnter: () => void;
  element: HTMLDivElement | null;
  isVisible: boolean;
}

export default function Intro({ onClickEnter }: IIntro) {
  const { element, isVisible } = useIsVisible({
    options: { rootMargin: "0px", threshold: 0.7 },
    initialVisible: true,
  });

  return (
    <div ref={element} className={styles.wrapper}>
      <div className={styles.titleBox}>
        <h1 className={styles.subTitle}>
          유튜브 댓글 분석을 위한 새로운 플랫폼
        </h1>
        <h2 className={styles.title}>TubeAna</h2>
      </div>
      <button className={styles.button} onClick={onClickEnter}>
        <span>분석하러 가기</span>
        <div className={styles.buttonWave}></div>
      </button>
      <div
        className={`${isVisible && styles.isVisible} ${styles.scrollWrapper}`}
      >
        <IntroScrollArrow />
      </div>
    </div>
  );
}
