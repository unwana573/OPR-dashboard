import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  Legend
} from 'recharts';

function Dashboard() {

  const profitabilityData = [
    { day: 'Sun', revenue: 45000, expense: 25000 },
    { day: 'Sat', revenue: 28000, expense: 18000 },
    { day: 'Mon', revenue: 35000, expense: 22000 },
    { day: 'Tue', revenue: 48000, expense: 20000 },
    { day: 'Wed', revenue: 42000, expense: 19000 },
    { day: 'Thu', revenue: 52000, expense: 21000 },
    { day: 'Fri', revenue: 38000, expense: 20000 }
  ];

  const footfallData = [
    { day: 'Sun', count: 450 },
    { day: 'Sat', count: 480 },
    { day: 'Mon', count: 280 },
    { day: 'Tue', count: 320 },
    { day: 'Wed', count: 250 },
    { day: 'Thu', count: 380 },
    { day: 'Fri', count: 520 }
  ];

  const expensesData = [
    { name: 'Staff Salary', value: 35, color: '#10b981' },
    { name: 'Inventory', value: 25, color: '#3b82f6' },
    { name: 'Bills', value: 20, color: '#ef4444' },
    { name: 'Server Cost', value: 10, color: '#f59e0b' },
    { name: 'Extras', value: 10, color: '#6b7280' }
  ];

  const concessionData = [
    { name: 'Before Movie', value: 40, color: '#10b981' },
    { name: 'Interval', value: 35, color: '#ef4444' },
    { name: 'After Movie', value: 25, color: '#f59e0b' }
  ];

  const retentionData = [
    { name: 'CLV', value: 56.7, color: '#3b82f6' },
    { name: 'Churned', value: 24.5, color: '#f59e0b' },
    { name: 'Retain', value: 21.2, color: '#ef4444' }
  ];

  const trendData = [
    { value: 30 }, { value: 45 }, { value: 35 },
    { value: 50 }, { value: 40 }, { value: 55 }, { value: 48 }
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA] p-5">
      <div className="flex flex-col gap-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Gross Revenue", value: "₹1,13,458", trend: "up" },
            { title: "Gross Profit", value: "₹13,458", trend: "up" },
            { title: "Total Expenses", value: "₹83,458", trend: "down" },
            { title: "Net Profit", value: "₹30,000", trend: "up" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <p className="text-[11px] text-gray-500">{item.title}</p>
              <h2 className="text-[22px] font-bold text-gray-900">{item.value}</h2>
              <div className="flex items-center text-xs mt-1">
                <span className="text-gray-500">Weekly</span>
                {item.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 text-green-600 ml-auto" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600 ml-auto" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 text-sm">Profitability</h3>
            <p className="text-xs text-gray-500 mb-2">Sept 2023</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={profitabilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="expense" fill="#d1d5db" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 text-sm mb-2">Expenses</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expensesData}
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    dataKey="value"
                  >
                    {expensesData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 text-sm">Total Expenses</h3>
            <p className="text-xl font-bold text-gray-800">₹83,458</p>
            <p className="text-xs text-gray-500 mb-2">Weekly</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          <div className="lg:col-span-5 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-800 text-sm">Screen Schedule</h3>
              <span className="text-gray-500 text-xs flex items-center gap-1 cursor-pointer">
                Current ▼
              </span>
            </div>

            <div className="overflow-auto max-h-64">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500">
                    <th className="pb-2 font-medium text-left text-[11px]">Screen</th>
                    <th className="pb-2 font-medium text-left text-[11px]">Movie</th>
                    <th className="pb-2 font-medium text-right text-[11px]">Occupancy%</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    { screen: "S1", movie: "Gadar 2", time: "10:15 pm", occ: 94 },
                    { screen: "S2", movie: "No Screening", time: "9:15 pm", occ: 0 },
                    { screen: "S3", movie: "Jawan", time: "10:30 pm", occ: 98 },
                    { screen: "S4", movie: "Jawan", time: "9:45 pm", occ: 97 },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="py-3">
                        <span className="px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold">
                          {row.screen}
                        </span>
                      </td>

                      <td className="py-3">
                        <div className="bg-indigo-50 p-2 rounded-md w-full">
                          <div className="flex justify-between text-xs font-medium text-indigo-700">
                            <span>{row.movie}</span>
                            <span className="text-gray-500">{row.time}</span>
                          </div>
                          <div className="w-full bg-gray-200 h-[3px] rounded-md mt-1">
                            <div
                              className="h-[3px] rounded-md bg-indigo-600"
                              style={{ width: `${row.occ}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="py-3 text-right">
                        <span className="px-3 py-1 text-xs font-bold rounded-md bg-indigo-50 text-indigo-700">
                          {row.occ}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800 text-sm">Concession Purchase</h3>
              <span className="text-gray-500 text-xs cursor-pointer">This Week ▼</span>
            </div>

            <div className="flex items-center h-56 gap-4">

              <div className="space-y-3 text-sm">
                {concessionData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="text-gray-700">{item.name}</p>
                  </div>
                ))}
              </div>

              <div className="flex-1 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={concessionData}
                      innerRadius="60%"
                      outerRadius="90%"
                      stroke="none"
                      dataKey="value"
                    >
                      {concessionData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-lg font-bold text-gray-900">₹13,494</p>
                  <p className="text-[10px] text-gray-500 tracking-wide">Total FnB Purchase</p>
                </div>
              </div>
            </div>
          </div>


          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              { title: "Projector Room Temperature", value: "18°C", badge: "Stable", color: "green" },
              { title: "Security Status", value: "High", badge: "Check", color: "green" },
              { title: "Inventory Stock", value: "46%", badge: "Refill", color: "orange" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F4F0FF] p-5 rounded-2xl shadow-sm border border-[#ECE6FF] flex justify-between items-center"
              >
                <div>
                  <p className="text-4xl font-semibold text-gray-900">{item.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.title}</p>
                </div>
            
                <span
                  className={`
                    px-3.5 py-1.5 text-xs font-medium rounded-full
                    ${
                      item.color === "green"
                        ? "bg-green-100 text-green-700"
                        : item.color === "orange"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-700"
                    }
                  `}
                >
                  {item.badge}
                </span>
              </div>
            ))}
        </div>


        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800 text-sm">Customer Retention Metrics</h3>
              <span className="text-gray-500 text-xs">This Week</span>
            </div>

            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  
                  <Pie
                    data={retentionData}
                    cx="50%"
                    cy="50%"
                    outerRadius="75%"
                    dataKey="value"
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = innerRadius + (outerRadius - innerRadius) * 1.15;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                          x={x}
                          y={y}
                          fill="#333"
                          fontSize="11"
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                        >
                          {`${(percent * 100).toFixed(1)}%`}
                        </text>
                      );
                    }}
                  >
                    {retentionData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>

                  <Tooltip formatter={(val) => `${val}%`} />

                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    formatter={(value) => {
                      const item = retentionData.find((d) => d.name === value);
                      return `${value} (${item.value}%)`;
                    }}
                  />

                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>


          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 text-sm mb-2">Footfall Analysis</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={footfallData}>
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 text-sm mb-2">Infra. Audit</h3>
            <div className="space-y-2 max-h-56 overflow-auto">
              {['Electricity (Light)', 'Sound', 'Projector', 'Seating Occupancy'].map((item, i) => (
                <div key={i} className="flex justify-between bg-gray-50 p-2 rounded-md text-xs">
                  <span className="text-gray-700">{item}</span>
                  <div className="bg-green-500 text-white rounded w-4 h-4 flex items-center justify-center">
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
