import { analysis_data } from "@/const/data";
import styles from "./enter.module.scss";
import ExampleBtn from "./ExampleBtn";

export default function EnterExample({ isVisible }: { isVisible: boolean }) {
  return (
    <section
      className={`${styles.exampleWrapper} ${
        isVisible && styles.exampleAnimation
      }`}
    >
      <h4>
        # 현재 프론트엔드만 구현된 상태로 결과물은 예시를 통해서 확인해주세요
      </h4>
      <ul className={styles.exampleBtnWrapper}>
        {analysis_data.map((item, idx) => (
          <ExampleBtn key={idx} data={item} />
        ))}
      </ul>
    </section>
  );
}
