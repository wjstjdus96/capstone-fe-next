"use client";

import { IExampleBtn } from "@/types/components";
import Link from "next/link";

export default function ExampleBtn({ data }: IExampleBtn) {
  return (
    <Link href={`/dashboard/${data.videoId}`}>
      <div className="w-[7rem] h-[7rem] flex justify-center items-center rounded-full bg-zinc-300 cursor-pointer">
        <div>예시{data.videoId}</div>
      </div>
    </Link>
  );
}
