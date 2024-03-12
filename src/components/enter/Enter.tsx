import { useIsVisible } from "@/hooks/useIsVisible";
import styles from "../../styles/enter.module.scss";
import EnterExample from "./EnterExample";
import EnterInput from "./EnterInput";

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
      <EnterInput />
      <EnterExample isVisible={isVisible} />
    </div>
  );
}
