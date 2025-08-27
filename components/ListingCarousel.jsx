import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function ListingCard({ tag, title, images }) {
  const paginationRef = useRef(null);

  return (
    <div
      className="listing-card relative rounded-2xl overflow-hidden shadow-sm bg-gray-100"
      style={{
        // Optional: tweak Swiper CSS vars if you like
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      {/* Global-ish styles scoped to this component to ensure bullets are visible */}
      <style>{`
        /* scope styles to only affect bullets inside .listing-card */
        .listing-card .swiper-pagination {
          position: absolute !important;
          bottom: 10px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 40; /* above overlay */
          pointer-events: auto; /* must be clickable */
        }
        .listing-card .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.85);
          opacity: 1;
          border-radius: 9999px;
          margin: 0 4px;
          transform: scale(1);
          transition: transform 150ms ease;
        }
        .listing-card .swiper-pagination-bullet-active {
          transform: scale(1.45);
          background: #ffffff;
        }
      `}</style>

      <Swiper
        modules={[Pagination, A11y]}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          // attach pagination to our local paginationRef container
          swiper.params.pagination.el = paginationRef.current;
          swiper.params.pagination.clickable = true;
        }}
        className="h-72"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full h-72 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text overlay (put behind bullets by giving it a lower z-index) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <p className="text-[11px] tracking-wider font-semibold uppercase opacity-90">
            {tag}
          </p>
          <h3 className="text-lg font-bold leading-tight">{title}</h3>
        </div>
      </div>

      {/* THIS is where Swiper will render the bullets for this card */}
      <div
        ref={paginationRef}
        className="absolute left-0 right-0 bottom-3 z-40 flex justify-center pointer-events-auto"
      />
    </div>
  );
}

export default function ListingsGrid() {
  const items = [
    {
      tag: "Most Clicked",
      title: "Urban Prime Plaza Premiere",
      images: [
        "https://images.unsplash.com/photo-1529429612778-cffe94636df3?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
      ],
    },
    {
      tag: "Most Watchlisted",
      title: "Urban Prime Plaza Premiere",
      images: [
        "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
      ],
    },
    {
      tag: "Hottest Listing",
      title: "Urban Prime Plaza Premiere",
      images: [
        "https://images.unsplash.com/photo-1507086182422-97bd7ca241c6?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((card, idx) => (
          <ListingCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
