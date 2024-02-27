import { useEffect, useState } from "react";
import styles from "../../styles/about.module.scss";

export default function AboutDescription() {
  const completedText = "TubeAna로 해결해보세요!";
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= completedText.length) {
      return;
    }

    const typingInterval = setInterval(() => {
      setLandingTitle((prev) => {
        console.log(count);
        let result = prev ? prev + completedText[count] : completedText[0];
        setCount(count + 1);

        return result;
      });
    }, 100);

    return () => clearInterval(typingInterval);
  });

  return <div className={styles.description}>{landingTitle}</div>;
}
