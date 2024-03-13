import { IRelationVideo } from "@/types/data";
import styles from "./relatedSlider.module.scss";

export default function RelatedCard({ id, thumbnail, title }: IRelationVideo) {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.thumbnailWrapper}>
        <img src={thumbnail} alt={`${title} 영상 썸네일`} />
      </figure>
      <p className={styles.videoTitle}>{title}</p>
      <div className={styles.buttonWrapper}>
        <button>분석 결과 보기</button>
        <button>영상 보러 가기</button>
      </div>
    </div>
  );
}
