import styles from "../../styles/enter.module.scss";

export default function EnterInput() {
  return (
    <section className={styles.inputWrapper}>
      <h3>영상의 URL을 입력해주세요</h3>
      <input
        type="search"
        id="search"
        placeholder="분석하고 싶은 유튜브 영상 url을 입력하세요"
        required
      />
    </section>
  );
}
