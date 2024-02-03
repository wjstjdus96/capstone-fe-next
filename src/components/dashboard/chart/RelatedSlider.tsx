import { IRelatedSlider } from "@/types/components";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RelatedCard from "./RelatedCard";

export default function RelatedSlider({ related }: IRelatedSlider) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-[300px] px-10 pt-5 [&_.slick-prev:before]:!text-slate-500 [&_.slick-next:before]:!text-slate-500">
      <Slider {...settings}>
        {related.map((item, idx) => (
          <RelatedCard
            key={idx}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
}
