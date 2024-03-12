import { analysis_data } from "@/const/data";
import ExampleBtn from "./ExampleBtn";
import styles from "../../styles/enter.module.scss";
import { useIsVisible } from "@/hooks/useIsVisible";

export default function Enter({ enterRef }: { enterRef: any }) {
  const { element, isVisible } = useIsVisible({
    options: { rootMargin: "0px", threshold: 0.8 },
    initialVisible: true,
  });

  return (
    <div
      ref={(el) => {
        enterRef!.current = el;
        element.current = el;
      }}
      className={styles.wrapper}
    >
      <h1 className={styles.title}>분석해보세요!</h1>
      <section className={styles.inputWrapper}>
        <h3>영상의 URL을 입력해주세요</h3>
        <input
          type="search"
          id="search"
          placeholder="분석하고 싶은 유튜브 영상 url을 입력하세요"
          required
        />
      </section>
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
    </div>
  );
}
