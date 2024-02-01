import React, { CSSProperties, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import CommentChartToggleBtn from "./CommentChartToggleBtn";

interface ICommentChart {
  top_comments: string[];
  low_comments: string[];
}

export default function CommentChart({
  top_comments,
  low_comments,
}: ICommentChart) {
  const [isPositive, setIsPositive] = useState(true);
  const [clickedComments, setClickedComments] = useState(top_comments);

  const changeIsPositive = () => {
    setIsPositive((prev) => !prev);
  };

  useEffect(() => {
    setClickedComments(() => {
      return isPositive ? top_comments : low_comments;
    });
  }, [isPositive]);

  return (
    <div className="relative">
      <CommentChartToggleBtn
        isPositive={isPositive}
        handleIsPositive={changeIsPositive}
      />
      <div className="h-auto  pointer-events-none relative overflow-hidden flex flex-col items-center px-20 [&_.swiper-slide]:flex [&_.swiper-slide]:items-center ">
        <Swiper
          direction={"vertical"}
          height={250}
          autoHeight={true}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={
            {
              "--swiper-pagination-color": `${
                isPositive ? "#D83636" : "#FCBF49"
              }`,
            } as CSSProperties
          }
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {clickedComments.map((comment, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="w-full bg-white flex py-5 mr-10 rounded-3xl"
                key={idx}
              >
                <div className="px-6 py-3 font-medium text-gray-900">
                  {idx + 1}
                </div>
                <div className="px-6 py-3">{comment}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
