import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

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

  const changeIsPositive = (e: React.MouseEvent) => {
    setIsPositive((prev) => !prev);
  };

  useEffect(() => {
    setClickedComments(() => {
      return isPositive ? top_comments : low_comments;
    });
  }, [isPositive]);

  return (
    <div className="relative">
      <button
        data-dropdown-toggle="dropdownRadio"
        className="absolute inline-flex items-center text-gray-500 text-sm bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
        onClick={changeIsPositive}
      >
        {isPositive ? "긍정" : "부정"}
      </button>
      <div className="h-auto relative overflow-hidden flex flex-col items-center px-20 [&_.swiper-slide]:flex [&_.swiper-slide]:items-center ">
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
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {clickedComments.map((comment, idx) => (
            <SwiperSlide>
              <div
                className="w-full bg-white border flex py-5 mr-10 rounded-lg"
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
