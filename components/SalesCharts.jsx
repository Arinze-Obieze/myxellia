"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Sample data (Jan - Sep) — values are in millions
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

const MetricCard = ({ title, amount, color, delta }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-box rounded-lg p-2 ">
      <div>
            <div className="mt-2 text-lg font-semibold" style={{ color }}>{amount}</div>
            <div className='flex space-x-2 items-center'>
            <div className="text-xs font-medium text-gray-500">{title}</div> 
            <div className="text-xs text-gray-400">{delta}%</div>
            </div>
      </div>
     
    </div>
  );
};

export default function SalesOverview() {
  const [range, setRange] = useState("1 Year");

  // compute ticks in steps of 10 (0, 10, 20, ...)
  const allValues = data.flatMap((d) => [d.purple, d.green, d.red]);
  const maxVal = Math.max(...allValues, 0);
  const maxTick = Math.ceil(maxVal / 10) * 10 || 10; // round up to next 10
  const ticks = Array.from({ length: Math.floor(maxTick / 10) + 1 }, (_, i) => i * 10);
  const tickFormatter = (v) => (v === 0 ? "0" : `${v}m`);

  const formatNaira = (n) => `₦${n.toLocaleString()}.00`;

  return (
    <div className=" bg-gray-50 ">
      <div className=" mx-auto">
        <div className="bg-white rounded-2xl shadow-box p-6">
      
 {/* Header */}

<div className="flex shadow-bottom flex-col md:flex-row items-start justify-between gap-4 w-full">
  <div>
      <h3 className="text-lg font-semibold text-gray-800">Sales Overview</h3>
      <p className="text-sm text-gray-400">Showing overview Jan 2022 - Sep 2022</p>
    </div>
  
  <div className="flex flex-col items-start gap-3">
    {/* Transactions button */}
    <button className="px-9 py-4 bg-white rounded-full shadow-box text-sm font-medium ">
      View Transactions
    </button>

  {/* Range buttons */}
<div className="flex rounded-lg mb-2 bg-white p-1 mt-4 text-sm">
  {["1 Week", "1 Month", "1 Year"].map((r) => (
    <button
      key={r}
      onClick={() => setRange(r)}
      className={`px-3 py-1 rounded-lg cursor-pointer text-sm font-medium transition-all ${
        range === r
          ? "bg-gray-100 text-gray-800 shadow" 
          : "bg-white text-gray-500"        
      }`}
    >
      {r}
    </button>
  ))}
</div>

  </div>
</div>





          {/* Body: chart + metrics */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
           
            {/* Chart */}
            <div className="">
              <div style={{ width: 400, height: 160, }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                    barCategoryGap={"20%"}
                    barGap={4}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />

                    {/* YAxis with ticks every 10 (0,10,20...) and labels like 10m, 20m */}
                    <YAxis
                      tick={{ fontSize: 10 }}
                      ticks={ticks}
                      domain={[0, maxTick]}
                      tickFormatter={tickFormatter}
                    />

                    {/* <Tooltip formatter={(value) => `${value}m`} /> */}

                    {/* Three separate small bars per month */}
                    <Bar dataKey="purple" fill="#7C3AED" barSize={4} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="green" fill="#10B981" barSize={4} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="red" fill="#EF4444" barSize={4} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right column: metrics */}
            <div className="">
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                  <MetricCard title="Total Inflow" amount={formatNaira(120000000)} color="#7C3AED" delta={2.5} />
                  <MetricCard title="MRR" amount={formatNaira(50000000)} color="#10B981" delta={2.5} />
                  <MetricCard title="Commission Revenue" amount={formatNaira(200000000)} color="#10B981" delta={0.5} />
                  <MetricCard title="GMV" amount={formatNaira(100000000)} color="#EF4444" delta={0.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}