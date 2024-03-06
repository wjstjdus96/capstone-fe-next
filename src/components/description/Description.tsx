import { description_list } from "@/const/data";
import DescriptionCard from "./DescriptionCard";
import styles from "../../styles/description.module.scss";
import { useIsVisible } from "@/hooks/useIsVisible";

export default function Description() {
  const { element, isVisible } = useIsVisible({
    options: { rootMargin: "0px", threshold: 0.2 },
    initialVisible: true,
  });

  return (
    <div ref={element} className={styles.wrapper}>
      <div className={styles.title}>어떤 항목을 볼 수 있나요?</div>
      <div className={styles.cardListWrapper}>
        {isVisible &&
          description_list.map((item, idx) => (
            <DescriptionCard key={idx} idx={idx} description={item} />
          ))}
      </div>
    </div>
  );
}
