"use client";

import { IHeader } from "@/types/components";
import { useRouter, usePathname } from "next/navigation";

export default function Header({
  onClickAbout,
  onClickEnter,
  onClickDescription,
}: IHeader) {
  const pathname = usePathname();
  const router = useRouter();

  const onClickHome = () => {
    if (pathname == "/") window.scrollTo({ top: 0, behavior: "smooth" });
    else router.push("/");
  };

  return (
    <div className="fixed top-0 w-full h-[50px] z-10 px-[5rem] font-notoKR flex items-center justify-between bg-white shadow-lg">
      <div className="font-bold text-2xl cursor-pointer" onClick={onClickHome}>
        TubeAna
      </div>
    </div>
  );
}
