"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import { IExampleBtn } from "@/types/components";
import { useRouter } from "next/navigation";
import styles from "./enter.module.scss";

export default function ExampleBtn({ data }: IExampleBtn) {
  const router = useRouter();
  const { setAnalysisData } = useAnalysisData();

  const onClickButton = (id: string) => {
    setAnalysisData(data);
    router.push(`/dashboard/${id}`);
  };

  return (
    <li
      onClick={() => onClickButton(data.videoId)}
      className={styles.exampleBtn}
    >
      <p>예시 {data.videoId}</p>
    </li>
  );
}
