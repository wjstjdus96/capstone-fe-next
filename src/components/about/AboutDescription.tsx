import { useEffect, useRef, useState } from "react";
import styles from "../../styles/about.module.scss";

export default function AboutDescription({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const completedText = "TubeAna의 분석 내용으로 다양한 피드백을 받아보세요!";
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);
  const savedCallback = useRef<any>();
  const visibelRef = useRef<boolean>();

  const callback = () => {
    if (count < completedText.length) {
      setCount(count + 1);
      setLandingTitle((prev) => {
        const currentText = completedText.substring(0, count + 1);
        return currentText;
      });
    }
  };

  useEffect(() => {
    savedCallback.current = callback;
    visibelRef.current = isVisible;
  });

  useEffect(() => {
    const typing = () => {
      savedCallback.current();
    };

    const timeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        typing();

        if (!visibelRef.current) {
          clearInterval(typingInterval);
          setCount(0);
          setLandingTitle("");
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isVisible]);

  return <p className={`${styles.description}`}>{landingTitle}</p>;
}
