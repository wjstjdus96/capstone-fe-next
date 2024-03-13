import { useIsVisible } from "@/hooks/useIsVisible";
import styles from "./about.module.scss";
import AboutCardList from "./AboutCardList";
import AboutDescription from "./AboutDescription";

export default function About() {
  const { element: cardListRef, isVisible } = useIsVisible({
    options: { rootMargin: "0px", threshold: 0.5 },
    initialVisible: false,
  });

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>어떤 서비스인가요?</h1>
      <AboutCardList cardListRef={cardListRef} isVisible={isVisible} />
      <AboutDescription isVisible={isVisible} />
    </section>
  );
}
