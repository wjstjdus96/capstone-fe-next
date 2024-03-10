import { about_card_list } from "@/const/data";
import { useIsVisible } from "@/hooks/useIsVisible";
import styles from "../../styles/about.module.scss";
import AboutDescription from "./AboutDescription";

export default function About() {
  const { element: cardListRef, isVisible } = useIsVisible({
    options: { rootMargin: "0px", threshold: 0.5 },
    initialVisible: false,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>어떤 서비스인가요?</div>
      <div ref={cardListRef} className={styles.cardlist}>
        {about_card_list.map((card, index) => (
          <div key={index} className={styles.card}>
            <div
              className={`${index % 2 == 0 && styles.right} ${
                isVisible && styles.animation
              }`}
              dangerouslySetInnerHTML={{ __html: card.cardBody }}
            ></div>
          </div>
        ))}
      </div>
      <AboutDescription isVisible={isVisible} />
    </div>
  );
}
