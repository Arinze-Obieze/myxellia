"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImageCarousal = ({ images, title }) => {
  const paginationRef = useRef(null);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-80">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationRef.current;
          swiper.params.pagination.clickable = true;
        }}
        pagination={{ clickable: true }}
        className="h-72"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination container (dots will render here) */}
      <div ref={paginationRef} className="flex justify-center mt-2" />

      {/* Card content */}
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
        View Transaction
      </button>

      <style jsx>{`
        /* Style active and inactive dots */
        :global(.swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #d6d6d6;
          opacity: 1;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #4b5563; /* Tailwind gray-700 */
        }
      `}</style>
    </div>
  );
};

export default ImageCarousal;
