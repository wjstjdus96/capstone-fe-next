"use client";

import { IHeader } from "@/types/components";
import { useRouter, usePathname } from "next/navigation";
import styles from "../styles/header.module.scss";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const onClickHome = () => {
    if (pathname == "/") window.scrollTo({ top: 0, behavior: "smooth" });
    else router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <h2 onClick={onClickHome}>TubeAna</h2>
    </div>
  );
}
