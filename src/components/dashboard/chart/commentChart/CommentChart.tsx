import React, { CSSProperties, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./commentChart.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import CommentChartToggleBtn from "./CommentChartToggleBtn";
import { ICommentChart } from "@/types/components";

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
    <div className={styles.wrapper}>
      <CommentChartToggleBtn
        isPositive={isPositive}
        handleIsPositive={changeIsPositive}
      />
      <div className={styles.sliderWrapper}>
        <Swiper
          direction={"vertical"}
          height={225}
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
              <div className={styles.slideWrapper} key={idx}>
                <h5>{idx + 1}</h5>
                <p>{comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
