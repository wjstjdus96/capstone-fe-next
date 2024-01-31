import Image from "next/image";
import bgImage from "../../assets/bg-analysis.jpg";

export default function Intro() {
  return (
    <div className="h-[85vh] flex">
      <div className="p-[5rem] bg-black text-white flex flex-col justify-between">
        <div className="text-4xl flex flex-col gap-[1.2rem]">
          <div>유튜브 댓글 분석을 위한</div>
          <div>새로운 플랫폼</div>
          <div className="text-8xl mt-[2rem]">TubeAna</div>
        </div>
        <div className="text-xl self-end">바로 분석하러 가기</div>
      </div>
      <Image src={bgImage} alt="메인 배경 이미지" />
    </div>
  );
}
