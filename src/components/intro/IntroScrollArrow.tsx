import styles from "../../styles/intro.module.scss";

export default function IntroScrollArrow() {
  return (
    <div>
      <div className={styles.scrollArrow}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
