import { useIsVisible } from "@/hooks/useIsVisible";
import styles from "./intro.module.scss";
import IntroScrollArrow from "./IntroScrollArrow";

interface IIntro {
  onClickEnter: () => void;
  element: any;
  isVisible: boolean;
}

export default function Intro({ onClickEnter, element, isVisible }: IIntro) {
  return (
    <section ref={element} className={styles.wrapper}>
      <hgroup className={styles.titleBox}>
        <h1 className={styles.subTitle}>
          유튜브 댓글 분석을 위한 새로운 플랫폼
        </h1>
        <h2 className={styles.title}>TubeAna</h2>
      </hgroup>
      <button className={styles.button} onClick={onClickEnter}>
        <span>분석하러 가기</span>
        <div className={styles.buttonWave}></div>
      </button>
      <figure
        className={`${isVisible && styles.isVisible} ${styles.scrollWrapper}`}
      >
        <IntroScrollArrow />
      </figure>
    </section>
  );
}
