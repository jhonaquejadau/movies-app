import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiConfig } from "../api";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

export const Slider = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/movie-detail/${item.id}`}>
              <img
                src={apiConfig.imageUrl(
                  "original",
                  item.poster_path === null
                    ? item.backdrop_path
                    : item.poster_path
                )}
                alt={item.original_title}
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </>
  );
};
