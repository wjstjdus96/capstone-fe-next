"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import { IExampleBtn } from "@/types/components";
import { useRouter } from "next/navigation";

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
      className="p-[1rem] bg-[#F2E8C6] rounded-3xl text-[#D83636] cursor-pointer"
    >
      <p className="font-bold">예시 {data.videoId}</p>
    </li>
  );
}
