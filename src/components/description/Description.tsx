import { description_list } from "@/const/data";
import DescriptionCard from "./DescriptionCard";
import styles from "./description.module.scss";
import { useIsVisible } from "@/hooks/useIsVisible";

export default function Description() {
  const { element, isVisible } = useIsVisible({
    options: { rootMargin: "0px", threshold: 0.5 },
    initialVisible: true,
  });

  return (
    <section ref={element} className={styles.wrapper}>
      <h1 className={styles.title}>어떤 항목을 볼 수 있나요?</h1>
      <ul className={styles.cardListWrapper}>
        {isVisible &&
          description_list.map((item, idx) => (
            <DescriptionCard key={idx} idx={idx} description={item} />
          ))}
      </ul>
    </section>
  );
}
