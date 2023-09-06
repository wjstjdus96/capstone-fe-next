import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IRelatedSlider } from "@/types/components";
import React from "react";
import RelatedCard from "./RelatedCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function RelatedSlider({ related }: IRelatedSlider) {
  return (
    <div className="w-full h-[300px] p-5 [&_.slick-prev:before]:!text-slate-500 [&_.slick-next:before]:!text-slate-500">
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
