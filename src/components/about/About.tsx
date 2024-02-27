import { about_detail_description } from "@/const/const";
import { about_card_list } from "@/const/data";
import styles from "../../styles/about.module.scss";
import AboutDescription from "./AboutDescription";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>어떤 서비스인가요?</div>
      <div className={styles.cardlist}>
        {about_card_list.map((card, index) => (
          <div key={index} className={styles.card}>
            <div
              className={`cardBody_${index} ${
                index % 2 == 0 ? styles.right : styles.left
              }`}
              dangerouslySetInnerHTML={{ __html: card.cardBody }}
            ></div>
          </div>
        ))}
      </div>
      <AboutDescription />
    </div>
  );
}
