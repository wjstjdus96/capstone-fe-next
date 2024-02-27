import { about_detail_description } from "@/const/const";
import { about_card_list } from "@/const/data";

export default function About() {
  return (
    <div className="h-[95vh] pt-[50px] bg-[#FCBF49] p-[2rem]">
      <div className="text-white text-5xl font-bold">어떤 서비스인가요?</div>
      <div className="flex flex-col gap-[0.5rem] justify-center items-center py-[3.5rem]">
        {about_card_list.map((card, index) => (
          <div
            key={index}
            id={`${index == 3 && "last-card"}`}
            className=" w-[28rem] relative h-[5rem]"
          >
            <div
              className={`bg-white p-[2.3rem] rounded-3xl  h-[5rem] w-[28rem] flex justify-center items-center absolute text-md ${
                index % 2 == 0 ? "right-[12rem]" : "left-[12rem]"
              }`}
            >
              {card.cardBody}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-xl  text-black mt-[1rem]">
        {about_detail_description}
      </div>
      <div className="w-[3rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="question-mark"
        >
          <g data-name="Layer 2">
            <g data-name="question-mark">
              <rect
                width="24"
                height="24"
                opacity="0"
                transform="rotate(180 12 12)"
              ></rect>
              <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
              <circle cx="12" cy="19" r="1"></circle>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
