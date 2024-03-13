import { ILikesTable } from "@/types/components";
import { AiOutlineLike } from "react-icons/ai";
import styles from "./likesTable.module.scss";

export default function LikesTable({ most_likes }: ILikesTable) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <tbody>
          {most_likes.map((item, idx) => (
            <tr className={styles.tr} key={idx}>
              <td>
                <AiOutlineLike />
                {item.count}
              </td>
              <td>{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
