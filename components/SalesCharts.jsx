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
import { MdKeyboardArrowRight } from "react-icons/md";

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
    <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 w-full">
      <div>
            <div className="mt-2 text-xl font-semibold" style={{ color }}>{amount}</div>
            <div className='flex space-x-2 items-center'>
            <div className="text-sm font-medium text-gray-500">{title}</div> 
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Sales Overview</h3>
              <p className="text-sm text-gray-400">Showing overview Jan 2022 - Sep 2022</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex rounded-lg bg-gray-100 p-1 text-sm">
                {["1 Week", "1 Month", "1 Year"].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRange(r)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      range === r
                        ? "bg-white shadow text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <button className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium flex items-center">
                View Transactions
                <MdKeyboardArrowRight className="ml-2 text-lg" />
              </button>
            </div>
          </div>

          {/* Body: chart + metrics */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Chart */}
            <div className="lg:col-span-2 bg-white rounded-lg p-4 shadow-sm">
              <div style={{ height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                    barCategoryGap={"30%"}
                    barGap={6}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />

                    {/* YAxis with ticks every 10 (0,10,20...) and labels like 10m, 20m */}
                    <YAxis
                      tick={{ fontSize: 12 }}
                      ticks={ticks}
                      domain={[0, maxTick]}
                      tickFormatter={tickFormatter}
                    />

                    <Tooltip formatter={(value) => `${value}m`} />

                    {/* Three separate small bars per month */}
                    <Bar dataKey="purple" fill="#7C3AED" barSize={8} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="green" fill="#10B981" barSize={8} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="red" fill="#EF4444" barSize={8} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right column: metrics */}
            <div className="space-y-4">
              <div className="bg-gradient-to-tr from-white to-gray-50 rounded-lg p-4 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
