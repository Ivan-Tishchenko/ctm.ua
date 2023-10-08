import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// import { Link } from "react-router-dom";

import "swiper/swiper-bundle.min.css";

export default function SwiperCatalog() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      <section className="section container section-slider__wrapper">
        <div className="swiper">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <img
                className="img-slide"
                src={
                  "https://s0.rbk.ru/v6_top_pics/media/img/0/40/346945452694400.webp"
                }
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-slide"
                src={
                  "https://s0.rbk.ru/v6_top_pics/media/img/0/40/346945452694400.webp"
                }
                alt=""
              />
            </SwiperSlide>
          </div>
        </div>
      </section>
    </Swiper>
  );
}
