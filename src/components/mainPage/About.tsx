const about_card_list = [
  { cardBody: "영상에 대한 자세한 피드백을 받고 싶으신가요?" },
  { cardBody: "구독자가 많아 댓글을 하나하나 보기 힘드신가요?" },
  { cardBody: "댓글의 실시간 분위기를 보고 싶으신가요?" },
  { cardBody: "비슷한 다른 영상의 분석 결과를 얻고 싶으신가요?" },
];

const about_detail_description =
  "TubeAna는 당신의 유튜브 영상을 더 멋있게 만들 수 있도록 도와줍니다. 분석을 통해 다양한 피드백을 얻어보세요!";

export default function About() {
  return (
    <div className="h-[95vh] bg-[#FCBF49] p-[2rem]">
      <div className="text-white text-5xl font-bold">어떤 서비스인가요?</div>
      <div className="flex flex-col gap-[0.5rem] justify-center items-center py-[3.5rem]">
        {about_card_list.map((card, index) => (
          <div
            key={index}
            data-aos={`${index % 2 == 0 ? "flip-right" : "flip-left"}`}
            data-aos-duration="700"
            data-aos-easing="linear"
            className=" w-[28rem] relative h-[6rem]"
          >
            <div
              className={`bg-white p-[2.3rem] rounded-3xl  h-[6rem] w-[28rem] flex justify-center items-center absolute text-md ${
                index % 2 == 0 ? "right-[12rem]" : "left-[12rem]"
              }`}
            >
              {card.cardBody}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-2xl font-semibold text-white">
        {about_detail_description}
      </div>
    </div>
  );
}
