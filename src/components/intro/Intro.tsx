import Image from "next/image";
import bgImage from "../../assets/bg-analysis.jpg";
import IntroSubTitle from "./IntroSubTitle";

export default function Intro({ onClickEnter }: { onClickEnter: () => void }) {
  return (
    <div className="h-[100vh] flex">
      <div className="p-[5rem] bg-black text-white flex flex-col justify-between">
        <div className="text-4xl">
          <IntroSubTitle />
          <div className="overflow-hidden">
            <div className="text-8xl mt-[2rem] font-bold animate-fontGrow opacity-0">
              TubeAna
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="2700"
          onClick={onClickEnter}
          className="text-xl self-end font-semibold hover:font-bold hover:text-[#D83636] cursor-pointer hover:transition-all hover:ease-in hover:duration-700"
        >
          바로 분석하러 가기
        </div>
      </div>
      <Image src={bgImage} alt="메인 배경 이미지" />
    </div>
  );
}
