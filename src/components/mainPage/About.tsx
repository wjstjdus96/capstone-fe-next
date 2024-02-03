import { about_detail_description } from "@/const/const";
import { about_card_list } from "@/const/data";

export default function About({
  aboutRef,
}: {
  aboutRef: React.ForwardedRef<HTMLDivElement>;
}) {
  return (
    <div ref={aboutRef} className="h-[95vh] pt-[50px] bg-[#FCBF49] p-[2rem]">
      <div className="text-white text-5xl font-bold">어떤 서비스인가요?</div>
      <div className="flex flex-col gap-[0.5rem] justify-center items-center py-[3.5rem]">
        {about_card_list.map((card, index) => (
          <div
            key={index}
            data-aos={`${index % 2 == 0 ? "fade-right" : "fade-left"}`}
            data-aos-easing="linear"
            data-aos-delay={`${index * 50}`}
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
      <div
        data-aos="fade-in"
        data-aos-anchor-placement="center-bottom"
        data-aos-easing="linear"
        data-aos-anchor="#last-card"
        data-aos-delay="800"
        className="text-center text-xl  text-black mt-[1rem]"
      >
        {about_detail_description}
      </div>
    </div>
  );
}
