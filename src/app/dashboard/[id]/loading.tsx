import styles from "../../../styles/loading.module.scss";

export default function loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerBox} />
      <div className={styles.spinnerBox}>
        <div className={styles.spinnerCircle} />
        <div className={styles.spinnerCircle} />
        <div className={styles.spinnerCircle} />
      </div>
    </div>
  );
}
