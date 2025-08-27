"use client";

import Carousel from "./ui/Carousel";

export default function ListingCard({ listing }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white w-105 relative h-72">
      <Carousel
        images={listing.images}
        renderOverlay={() => (
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16 flex flex-col justify-end rounded-b-xl">
            <div className="text-xs text-white font-semibold">{listing.label}</div>
            <div className="text-lg text-white font-bold">{listing.title}</div>
          </div>
        )}
      />
    </div>
  );
}
