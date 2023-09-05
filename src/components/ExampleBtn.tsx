"use client";

import { useAnalysisData } from "@/contexts/analysisData";
import { IExampleBtn } from "@/types/components";
import Link from "next/link";

export default function ExampleBtn({ data }: IExampleBtn) {
  const { setAnalysisData } = useAnalysisData();

  const onClickButton = () => {
    setAnalysisData(data);
  };

  return (
    <Link href={`/dashboard/${data.videoId}`}>
      <div
        onClick={onClickButton}
        className="w-[5rem] h-[5rem] flex justify-center items-center rounded-full bg-slate-500 hover:bg-slate-700 text-white cursor-pointer shadow-lg"
      >
        <div className="font-bold">Ex {data.videoId}</div>
      </div>
    </Link>
  );
}
