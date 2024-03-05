import { useEffect, useState } from "react";
import styles from "../../styles/about.module.scss";

export default function AboutDescription({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const completedText = "TubeAna의 분석 내용으로 다양한 피드백을 받아보세요!";
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= completedText.length) {
      return;
    }

    if (isVisible) {
      const typingInterval = setInterval(() => {
        setLandingTitle((prev) => {
          const currentText = completedText.substring(0, count + 1);
          setCount((prev) => prev + 1);
          return currentText;
        });
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [isVisible, count]);

  return <div className={`${styles.description}`}>{landingTitle}</div>;
}
