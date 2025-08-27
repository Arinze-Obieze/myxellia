"use client";

import ListingCard from "./ListingCard";

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
    <div className="grid grid-cols-1 md:flex md:justify-center gap-6 px-4">
      {listings.map((listing, idx) => (
        <ListingCard key={idx} listing={listing} />
      ))}
    </div>
  );
}
