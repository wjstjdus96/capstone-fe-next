"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function VideoListSwiper({ children }: { children: any }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    vertical: true,
    autoplay: false,
  };

  return <Slider {...settings}>{children}</Slider>;
}
