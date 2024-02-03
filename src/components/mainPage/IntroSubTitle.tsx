import { useEffect, useState } from "react";

export default function IntroSubTitle() {
  const completedSubTitle = "유튜브 댓글 분석을 위한\n새로운 플랫폼";
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
    }, 100);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="leading-[3.5rem] inline animate-typingCursor">
      {landingTitle}
    </div>
  );
}
