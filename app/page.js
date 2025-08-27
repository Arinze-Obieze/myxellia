"use client";
import UsersOverview from "@/components/UsersOverview";
import ListingOverview from "@/components/ListingOverview";
import ListingCarousel from '@/components/ListingCarousel'
import SalesOverview from "@/components/SalesCharts"

export default function Home() {
  return (
    <div className="w-full mx-auto md:px-18 py-6">
      <h1 className="font-semibold mb-6 text-2xl">Welcome, Ahmed</h1>

      <div className="w-full flex flex-col xl:flex-row gap-6 mb-8">
        <div className="md:w-2/3">
          <SalesOverview/>
        </div>
        <div className="md:w-1/3 space-y-14">
          <ListingOverview/>
          <UsersOverview/>
        </div>
      </div>

      <div>
        <ListingCarousel/>
      </div>



    </div>
  );
}