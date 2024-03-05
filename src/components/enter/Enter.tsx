import { analysis_data } from "@/const/data";
import ExampleBtn from "./ExampleBtn";
import styles from "../../styles/enter.module.scss";

export default function Enter({
  enterRef,
}: {
  enterRef: React.ForwardedRef<HTMLDivElement>;
}) {
  return (
    <div ref={enterRef} className={styles.wrapper}>
      <div className={styles.title}>분석해보세요!</div>
      <div className={styles.inputWrapper}>
        <h2>영상의 URL을 입력해주세요</h2>
        <input
          type="search"
          id="search"
          placeholder="분석하고 싶은 유튜브 영상 url을 입력하세요"
          required
        />
      </div>
      <div className={styles.exampleWrapper}>
        <h4>
          # 현재 프론트엔드만 구현된 상태로 결과물은 예시를 통해서 확인해주세요
        </h4>
        <ul className={styles.exampleBtnWrapper}>
          {analysis_data.map((item, idx) => (
            <ExampleBtn key={idx} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
