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
    <section className={styles.wrapper}>
      <h1 className={styles.title}>어떤 서비스인가요?</h1>
      <div ref={cardListRef} className={styles.cardlist}>
        {about_card_list.map((card, index) => (
          <li key={index} className={styles.card}>
            <p
              className={`${index % 2 == 0 && styles.right} ${
                isVisible && styles.animation
              }`}
              dangerouslySetInnerHTML={{ __html: card.cardBody }}
            ></p>
          </li>
        ))}
      </div>
      <AboutDescription isVisible={isVisible} />
    </section>
  );
}
