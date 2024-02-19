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
      className="py-[0.3rem] px-[1rem] bg-[#F2E8C6] rounded-3xl text-[#D83636] cursor-pointer hover:shadow-lg hover:scale-125 transition-all ease-in"
    >
      <p className="font-bold">예시 {data.videoId}</p>
    </li>
  );
}
