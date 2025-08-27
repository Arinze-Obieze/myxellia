"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/swiper-overrides.css"; // overrides pagination styles

export default function Carousel({ images, renderOverlay }) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      className="h-72"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative h-72 w-full">
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-72 object-cover"
            />
            {renderOverlay && renderOverlay()}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
