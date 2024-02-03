"use client";

import { useRouter, usePathname } from "next/navigation";

interface IHeader {
  onClickAbout?: () => void;
  onClickEnter?: () => void;
  onClickDescription?: () => void;
}

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
      {pathname == "/" && (
        <ul className="flex gap-[1rem] cursor-pointer">
          <li onClick={onClickAbout}>About</li>
          <li onClick={onClickEnter}>Enter</li>
          <li onClick={onClickDescription}>Description</li>
        </ul>
      )}
    </div>
  );
}
