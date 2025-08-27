const MetricCard = ({ title, amount, color, delta }) => {
    return (
      <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 w-full">
        <div>
          <div className="text-sm font-medium text-gray-500">{title}</div>
          <div className="mt-2 text-xl font-semibold" style={{ color }}>{amount}</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-xs text-gray-400">{delta}%</div>
          <div className="mt-1 text-gray-300 text-sm">●</div>
        </div>
      </div>
    );
  };

  export default MetricCard