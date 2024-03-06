import { IDescription } from "@/types/components";
import Image from "next/image";
import styles from "../../styles/description.module.scss";

export default function DescriptionCard({
  description,
  idx,
}: {
  description: IDescription;
  idx: number;
}) {
  const dynamicClassName = `cardBody_${idx}`;

  return (
    <div className={`${styles.cardWrapper}  ${styles[dynamicClassName]}`}>
      <div className={styles.cardTransform}>
        <div className={styles.cardFront}>
          <h2>{description.name}</h2>
          <Image
            src={description.image}
            alt={description.name}
            width={90}
            height={90}
          />
        </div>
        <div className={styles.cardBack}>
          <h5>{description.sub}</h5>
        </div>
      </div>
    </div>
  );
}
