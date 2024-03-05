import { description_list } from "@/const/data";
import DescriptionCard from "./DescriptionCard";
import styles from "../../styles/description.module.scss";

export default function Description() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>어떤 항목을 볼 수 있나요?</div>
      <div className={styles.cardListWrapper}>
        {description_list.map((item, idx) => (
          <DescriptionCard key={idx} idx={idx} description={item} />
        ))}
      </div>
    </div>
  );
}
