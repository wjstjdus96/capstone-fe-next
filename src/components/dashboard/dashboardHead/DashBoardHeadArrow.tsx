import React from "react";
import arrow from "../../../assets/under-arrow.png";
import Image from "next/image";
import styles from "./dashboardHead.module.scss";

function DashBoardHeadArrow() {
  return (
    <figure className={styles.arrowWrapper}>
      <Image src={arrow} alt="아래로 향하는 화살표" width={30} />
      <p>이 영상에 대한 분석 내용</p>
      <Image src={arrow} alt="아래로 향하는 화살표" width={30} />
    </figure>
  );
}

export default DashBoardHeadArrow;
