import { about_card_list } from "@/const/data";
import styles from "./about.module.scss";

export default function AboutCardList({
  cardListRef,
  isVisible,
}: {
  cardListRef: any;
  isVisible: boolean;
}) {
  return (
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
  );
}
