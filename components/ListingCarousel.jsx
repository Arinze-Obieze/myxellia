import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/swiper-overrides.css'; //overides default colour for the bullets for pagination

const listings = [
  {
    label: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    label: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
    images: [
      "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    label: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467987506553-8f3916508521?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export default function ListingsCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {listings.map((listing, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden shadow-lg bg-white relative h-80"
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            className="h-80"
          >
            {listing.images.map((img, imgIdx) => (
              <SwiperSlide key={imgIdx}>
                <div className="relative h-80 w-full">
                  <img
                    src={img}
                    alt={listing.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16 flex flex-col justify-end rounded-b-xl">
                    <div className="text-xs text-white font-semibold">{listing.label}</div>
                    <div className="text-lg text-white font-bold">{listing.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
