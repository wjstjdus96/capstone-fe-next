import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IRelatedSlider } from "@/types/components";
import React from "react";
import RelatedCard from "./RelatedCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function RelatedSlider({ related }: IRelatedSlider) {
  return (
    <div className="w-full h-[300px] p-5">
      <Slider {...settings}>
        {related.map((item) => (
          <RelatedCard
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
}
