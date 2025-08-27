"use client";
import UsersOverview from "@/components/UsersOverview";
import ListingOverview from "@/components/ListingOverview";
import ListingCarousel from '@/components/ListingCarousel'
import SalesOverview from "@/components/SalesOverview" 

export default function Home() {
  return (
    <div className="w-full mx-auto md:px-18 py-6">

      <div className="w-full flex flex-col md:flex-row md:justify-center space-x-5 mb-8">

        <div className="">
          <div className="mb-4">
            <h1 className="font-semibold text-2xl">Hello Ahmed</h1>
          </div>
          <SalesOverview/>
        </div>

        <div className="space-y-14">
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
