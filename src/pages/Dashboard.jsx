import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
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
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col gap-4">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {[
            { title: "Gross Revenue", value: "₹1,13,458", trend: "up" },
            { title: "Gross Profit", value: "₹13,458", trend: "up" },
            { title: "Total Expenses", value: "₹83,458", trend: "down" },
            { title: "Net Profit", value: "₹30,000", trend: "up" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all flex flex-col gap-2"
            >
              <p className="text-xs text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
              <div className="flex items-center text-xs">
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

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold text-gray-800 text-sm">Profitability</h3>
            <p className="text-xs text-gray-500 mb-2">Sept 2023</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={profitabilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="expense" fill="#9ca3af" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-md">
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

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-md">
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

          <div className="lg:col-span-5 bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold text-gray-800 text-sm mb-2">Screen Schedule</h3>
            <div className="overflow-auto max-h-64">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b text-gray-600">
                    <th className="pb-1">Screen</th>
                    <th className="pb-1">Movie</th>
                    <th className="pb-1">Occ%</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["S1", "Gadar 2", "10:15pm", "94%"],
                    ["S2", "No Screening", "", "0%"],
                    ["S3", "Jawan", "10:30pm", "98%"],
                    ["S4", "Jawan", "9:45pm", "97%"]
                  ].map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2 font-medium text-gray-700">{row[0]}</td>
                      <td className="py-2 text-gray-700">
                        {row[1]} <span className="text-gray-500">{row[2]}</span>
                      </td>
                      <td className="py-2">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold text-gray-800 text-sm mb-2">Concession Purchase</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={concessionData}
                    innerRadius="40%"
                    outerRadius="70%"
                    dataKey="value"
                  >
                    {concessionData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {[
              { title: "Projector Room Temperature", value: "18°C", badge: "Stable", color: "green" },
              { title: "Security Status", value: "High", badge: "Check", color: "green" },
              { title: "Inventory Stock", value: "46%", badge: "Refill", color: "red" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow-md flex justify-between items-start hover:shadow-lg transition-all"
              >
                <div>
                  <p className="text-3xl font-bold text-gray-800">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.title}</p>
                </div>
                <span className={`px-3 py-1 rounded text-xs bg-${item.color}-100 text-${item.color}-800`}>
                  {item.badge}
                </span>
              </div>
            ))}

          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Retention */}
          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold text-gray-800 text-sm mb-2">Customer Retention</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={retentionData}
                    outerRadius="70%"
                    dataKey="value"
                  >
                    {retentionData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>


          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-md">
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

          <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-md">
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
