"use client";
import UsersOverview from "@/components/UsersOverview";
import ListingOverview from "@/components/ListingOverview";
import ListingCarousel from '@/components/ListingCarousel'
import SalesOverview from "@/components/SalesCharts"
export default function Home() {
  // Sample chart data
  const data = [
    { name: "Jan", inflow: 30, mrr: 20, gmv: 10 },
    { name: "Feb", inflow: 20, mrr: 15, gmv: 5 },
    { name: "Mar", inflow: 15, mrr: 10, gmv: 8 },
    { name: "Apr", inflow: 25, mrr: 18, gmv: 12 },
    { name: "May", inflow: 20, mrr: 12, gmv: 6 },
    { name: "Jun", inflow: 45, mrr: 30, gmv: 20 },
    { name: "Jul", inflow: 40, mrr: 22, gmv: 15 },
    { name: "Aug", inflow: 28, mrr: 18, gmv: 12 },
    { name: "Sep", inflow: 35, mrr: 25, gmv: 18 },
  ];

  return (
  <div>
<h1 className="font-semibold px-20 mb-4 text-xl">Welcome, Ahmed</h1>

<div>
  <SalesOverview/>
</div>

<div className="space-y-5">
<ListingOverview/>
<UsersOverview/>
</div>

<div>
  <ListingCarousel/>
</div>



  </div>
  );
}
