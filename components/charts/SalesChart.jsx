"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function SalesChart({ data }) {
  const allValues = data.flatMap((d) => [d.purple, d.green, d.red]);
  const maxVal = Math.max(...allValues, 0);
  const maxTick = Math.ceil(maxVal / 10) * 10 || 10;
  const ticks = Array.from(
    { length: Math.floor(maxTick / 10) + 1 },
    (_, i) => i * 10
  );
  const tickFormatter = (v) => (v === 0 ? "0" : `${v}m`);

  return (
    <div style={{ width: 400, height: 160 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          barCategoryGap={"20%"}
          barGap={4}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis
            tick={{ fontSize: 10 }}
            ticks={ticks}
            domain={[0, maxTick]}
            tickFormatter={tickFormatter}
          />

          <Bar
            dataKey="purple"
            fill="#7C3AED"
            barSize={4}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="green"
            fill="#10B981"
            barSize={4}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="red"
            fill="#EF4444"
            barSize={4}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
