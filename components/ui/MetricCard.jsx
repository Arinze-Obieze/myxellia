"use client";

export default function MetricCard({ title, amount, color, img, delta }) {
  return (
    <div className="flex items-center justify-between bg-white shadow-box rounded-lg p-2">
      <div>
        <div className="mt-2 text-lg font-semibold" style={{ color }}>
          {amount}
        </div>
        <div className="flex space-x-2 items-center">
          <div className="text-xs font-medium text-gray-500">{title}</div>
          <img src={img} alt={'growth-icon'}/>
          <div className="text-xs text-gray-400">{delta}%</div>
        </div>
      </div>
    </div>
  );
}
 