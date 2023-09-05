"use client";

import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="fixed w-full h-[50px] z-10 px-40 flex items-center justify-between bg-white shadow-lg">
      <div className="font-bold text-2xl">TubeAna</div>
      {pathName != "/" && (
        <div>
          <Link href={`/`}>
            <AiFillHome size="24" />
          </Link>
        </div>
      )}
    </div>
  );
}
