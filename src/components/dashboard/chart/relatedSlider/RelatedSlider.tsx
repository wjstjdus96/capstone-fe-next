import { IRelatedSlider } from "@/types/components";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RelatedCard from "./RelatedCard";
import styles from "./relatedSlider.module.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SlickButtonFix from "./SlickButtonFix";

export default function RelatedSlider({ related }: IRelatedSlider) {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SlickButtonFix>
        <IoIosArrowForward />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <IoIosArrowBack />
      </SlickButtonFix>
    ),
  };

  return (
    <div className={styles.sliderWrapper}>
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
