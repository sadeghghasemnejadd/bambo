import React from "react";
import Dtail from "../../../components/UI/Detail";
// -------------------------
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import img1 from "../../../assets/images/slider-imgs/home-slider-img-1.jpg";
import img2 from "../../../assets/images/slider-imgs/home-slider-img-2.jpg";
import img3 from "../../../assets/images/slider-imgs/home-slider-img-3.jpg";

// --------------------------
function BlogSection() {
  const slider_imgs = [
    { img: img1, text: "مقایسه ریکت با فریم ورک های جدید جاوااسکریپت" },
    { img: img2, text: "میشود React جایگزین svelte آیا" },
    { img: img3, text: "مواردی که درباره فرانت نمیدانیم" },
  ];
  return (
    <div className="blog-section">
      <div className="blog-section__slider">
        <Swiper
          cssMode={true}
          navigation={true}
          keyboard={true}
          loop
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="blog-section__mySwiper"
        >
          {slider_imgs.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.img} alt="" />
              <footer>{item.text}</footer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="blog-section__info">
        <Dtail
          title="اخبار و مقالات"
          text="
        دسترسی به جدید ترین و مفید ترین مقالات تالیف شده توسط معتبر ترین
        روزنامه ها و رسانه ها ، در دسته بندی های گوناگونی همچون طراحی ، هنر
        ... برنامه نویسی ، اقتصاد، فلسفه ، فیزیک ، شیمی و"
          buttonText="مشاهده مقالات"
        />
      </div>
    </div>
  );
}

export default BlogSection;
