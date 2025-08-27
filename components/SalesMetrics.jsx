const SalesMetrics = () => {
    const metricsData = [
      { id: 1, title: "Total Inflow", amount: "₦120,000,000.00", color: "#7C3AED", delta: 2.5 },
      { id: 2, title: "MRR", amount: "₦50,000,000.00", color: "#10B981", delta: 2.5 },
      { id: 3, title: "Commission Revenue", amount: "₦200,000,000.00", color: "#10B981", delta: 0.5 },
      { id: 4, title: "GMV", amount: "₦100,000,000.00", color: "#EF4444", delta: 0.5 },
    ];
  
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Sales Metrics</h2>
              <Link to="/" className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium flex items-center">
                Back to Overview
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {metricsData.map(metric => (
                <MetricCard
                  key={metric.id}
                  title={metric.title}
                  amount={metric.amount}
                  color={metric.color}
                  delta={metric.delta}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Additional Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-600">Customer Acquisition Cost</p>
                  <p className="text-xl font-bold text-blue-800 mt-2">₦5,250.00</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-600">Lifetime Value</p>
                  <p className="text-xl font-bold text-green-800 mt-2">₦42,800.00</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-600">Churn Rate</p>
                  <p className="text-xl font-bold text-yellow-800 mt-2">2.3%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default SalesMetrics;