import { IDescription } from "@/types/components";
import Image from "next/image";
import styles from "./description.module.scss";

export default function DescriptionCard({
  description,
  idx,
}: {
  description: IDescription;
  idx: number;
}) {
  const dynamicClassName = `cardBody_${idx}`;

  return (
    <li className={`${styles.cardWrapper}  ${styles[dynamicClassName]}`}>
      <div className={styles.cardTransform}>
        <figure className={styles.cardFront}>
          <h4>{description.name}</h4>
          <Image
            src={description.image}
            alt={description.name}
            width={90}
            height={90}
          />
        </figure>
        <div className={styles.cardBack}>
          <p>{description.sub}</p>
        </div>
      </div>
    </li>
  );
}
