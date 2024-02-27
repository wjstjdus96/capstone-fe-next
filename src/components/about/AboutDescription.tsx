"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/about.module.scss";

export default function AboutDescription() {
  const completedSubTitle = "TubeAna로 경험해보세요!";
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= completedSubTitle.length) {
      return;
    }

    const timer = setInterval(() => {
      setLandingTitle((prev) => {
        let result = prev
          ? prev + completedSubTitle[count]
          : completedSubTitle[0];
        setCount((prev) => prev + 1);
        return result;
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  });

  return <div className={styles.description}>{landingTitle}</div>;
}
