"use client";

import React, { useState } from "react";
import SalesChart from "./charts/SalesChart";
import MetricCard from "./ui/MetricCard";
import RangeSelector from "./ui/RangeSelector";

// Sample data
const data = [
  { month: "Jan", purple: 35, green: 25, red: 15 },
  { month: "Feb", purple: 28, green: 30, red: 10 },
  { month: "Mar", purple: 12, green: 18, red: 6 },
  { month: "Apr", purple: 10, green: 8, red: 4 },
  { month: "May", purple: 22, green: 45, red: 18 },
  { month: "Jun", purple: 48, green: 38, red: 28 },
  { month: "Jul", purple: 32, green: 28, red: 22 },
  { month: "Aug", purple: 40, green: 34, red: 18 },
  { month: "Sep", purple: 30, green: 42, red: 12 },
];

export default function SalesOverview() {
  const [range, setRange] = useState("1 Year");

  const formatNaira = (n) => `₦${n.toLocaleString()}.00`;

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-box p-6">
        {/* Header */}
        <div className="flex shadow-bottom flex-col md:flex-row items-start justify-between gap-4 w-full">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Sales Overview
            </h3>
            <p className="text-sm text-gray-400">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <button className="px-9 py-4 bg-white rounded-full shadow-box text-sm font-medium ">
              View Transactions
            </button>

            <RangeSelector range={range} setRange={setRange} />
          </div>
        </div>

        {/* Body */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SalesChart data={data} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <MetricCard
              title="Total Inflow"
              amount={formatNaira(120000000)}
              color="#7C3AED"
              delta={2.5}
            />
            <MetricCard
              title="MRR"
              amount={formatNaira(50000000)}
              color="#10B981"
              delta={2.5}
            />
            <MetricCard
              title="Commission Revenue"
              amount={formatNaira(200000000)}
              color="#10B981"
              delta={0.5}
            />
            <MetricCard
              title="GMV"
              amount={formatNaira(100000000)}
              color="#EF4444"
              delta={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
