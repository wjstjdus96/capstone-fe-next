import React from "react";
import arrow from "../../../assets/under-arrow.png";
import Image from "next/image";

function DashBoardHeadArrow() {
  return (
    <figure className="mt-[3rem] flex justify-center items-center">
      <Image src={arrow} alt="아래로 향하는 화살표" width={30} />
      <div>이 영상에 대한 분석 내용</div>
      <Image src={arrow} alt="아래로 향하는 화살표" width={30} />
    </figure>
  );
}

export default DashBoardHeadArrow;
