import { ICard, IFlexRow } from "@/types/components";
import styles from "./dashboardBody.module.scss";

const flexRow: IFlexRow = {
  0: styles.cardWrapper,
  0.2: styles.cardWrapper2,
  0.5: styles.cardWrapper5,
  0.8: styles.cardWrapper8,
};

export default function Card({ title, children, basis }: ICard) {
  return (
    <article className={flexRow[basis ? basis : 0]}>
      <h6 className={styles.cardTitle}>{title}</h6>
      <figure>{children} </figure>
    </article>
  );
}
