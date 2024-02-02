import { description_list } from "@/const/data";
import DescriptionCard from "./DescriptionCard";

export default function Description({
  descriptionRef,
}: {
  descriptionRef: React.ForwardedRef<HTMLDivElement>;
}) {
  return (
    <div
      ref={descriptionRef}
      className="bg-[#1D809F] pt-[50px] p-[2rem] text-white"
    >
      <div className="text-5xl font-bold">어떤 항목을 볼 수 있나요?</div>
      <div className="grid grid-cols-3 gap-[2rem] mx-[10vw] mt-[4rem]">
        {description_list.map((item, idx) => (
          <DescriptionCard key={idx} idx={idx} description={item} />
        ))}
      </div>
    </div>
  );
}
