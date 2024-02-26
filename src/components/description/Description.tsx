import { description_list } from "@/const/data";
import DescriptionCard from "./DescriptionCard";
import DescriptionSlider from "./DescriptionSlider";

export default function Description() {
  return (
    <div className="bg-[#1D809F] pt-[50px] p-[2rem] text-white">
      <div className="text-5xl font-bold">어떤 항목을 볼 수 있나요?</div>

      <DescriptionSlider>
        {description_list.map((item, idx) => (
          <DescriptionCard key={idx} idx={idx} description={item} />
        ))}
      </DescriptionSlider>
    </div>
  );
}
