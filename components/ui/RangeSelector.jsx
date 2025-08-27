"use client";

export default function RangeSelector({ range, setRange }) {
  const ranges = ["1 Week", "1 Month", "1 Year"];

  return (
    <div className="flex rounded-lg mb-2 bg-white p-1 mt-4 text-sm">
      {ranges.map((r) => (
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
  );
}
