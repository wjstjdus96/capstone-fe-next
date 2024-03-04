import { about_detail_description } from "@/const/const";
import { about_card_list } from "@/const/data";
import styles from "../../styles/about.module.scss";
import AboutDescription from "./AboutDescription";
import { useIsVisible } from "@/hooks/useIsVisible";

export default function About() {
  const { element, isVisible } = useIsVisible({
    options: { rootMargin: "0px", threshold: 0.5 },
    initialVisible: false,
  });

  return (
    <div ref={element} className={styles.wrapper}>
      <div className={styles.title}>어떤 서비스인가요?</div>
      <div className={styles.cardlist}>
        {about_card_list.map((card, index) => (
          <div key={index} className={styles.card}>
            <div
              className={`cardBody_${index} ${index % 2 == 0 && styles.right} ${
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
