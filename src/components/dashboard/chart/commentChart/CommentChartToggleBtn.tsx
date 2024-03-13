import { ICommentChartToggleBtn } from "@/types/components";
import styles from "./commentChart.module.scss";

export default function CommentChartToggleBtn({
  isPositive,
  handleIsPositive,
}: ICommentChartToggleBtn) {
  return (
    <label htmlFor="toggleBtn" className={styles.btnWrapper}>
      <span>긍정</span>
      <span className={styles.btnInput}>
        <input id="toggleBtn" type="checkbox" onClick={handleIsPositive} />
        <div className={styles.btnInputBody}></div>
        <div className={styles.btnInputBall}></div>
      </span>
      <span>부정</span>
    </label>
  );
}
