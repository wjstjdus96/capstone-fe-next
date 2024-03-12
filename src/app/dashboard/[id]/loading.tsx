import styles from "../../../styles/loading.module.scss";

export default function loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerBox} />
      <li className={styles.spinnerBox}>
        <ul className={styles.spinnerCircle} />
        <ul className={styles.spinnerCircle} />
        <ul className={styles.spinnerCircle} />
      </li>
    </div>
  );
}
