import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

function CostAnalysis() {
  const [activeTab, setActiveTab] = useState('revenue');

  const revenueData = [
    { year: "FY'19", value: 5000 },
    { year: "FY'20", value: 20000 },
    { year: "FY'21", value: 50000 },
    { year: "FY'22", value: 65000 },
    { year: "FY'23", value: 100000 },
  ];

  const ticketSalesData = [
    { day: 'Sun', online: 85000, offline: 0 },
    { day: 'Sat', online: 45000, offline: 0 },
    { day: 'Mon', online: 35000, offline: 0 },
    { day: 'Tue', online: 65000, offline: 0 },
    { day: 'Wed', online: 80000, offline: 0 },
    { day: 'Thur', online: 85000, offline: 0 },
    { day: 'Fri', online: 50000, offline: 0 },
  ];

  const adsRevenueData = [
    { day: 'Sun', value: 80000 },
    { day: 'Sat', value: 30000 },
    { day: 'Mon', value: 60000 },
    { day: 'Tue', value: 40000 },
    { day: 'Wed', value: 70000 },
    { day: 'Thur', value: 45000 },
    { day: 'Fri', value: 35000 },
  ];

  const sourcesData = [
    { name: 'Tickets', value: 40, color: '#3b82f6' },
    { name: 'Ads', value: 30, color: '#ef4444' },
    { name: 'FnB', value: 20, color: '#f59e0b' },
    { name: 'Extras', value: 10, color: '#9ca3af' },
  ];

  const ticketRevenueData = [
    { movie: 'GADAR 2', filmforce: '₹43,259', distributor: '₹43,259', producer: '₹43,259' },
    { movie: 'JAWAN', filmforce: '₹43,259', distributor: '₹43,259', producer: '₹43,259' },
    { movie: 'THE NUN 2', filmforce: '₹43,259', distributor: '₹43,259', producer: '₹43,259' },
    { movie: 'DREAM GIRL 2', filmforce: '₹43,259', distributor: '₹43,259', producer: '₹43,259' },
    { movie: 'BARBIE', filmforce: '₹43,259', distributor: '₹43,259', producer: '₹43,259' },
    { movie: 'A HAUNTING IN VENICE', filmforce: '₹43,259', distributor: '₹43,259', producer: '₹43,259' },
  ];

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      <div className="p-6">

        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-xs text-gray-500 mb-1">Profitability %</h3>
            <p className="text-3xl font-bold text-gray-900 mb-1">45%</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Weekly</span>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-xs text-gray-500 mb-1">Highest revenue from</h3>
            <p className="text-lg font-bold text-gray-900">
              Tickets <span className="text-sm font-normal text-gray-600">(online)</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Weekly</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-xs text-gray-500 mb-1">Least revenue from</h3>
            <p className="text-lg font-bold text-gray-900">Ads</p>
            <p className="text-xs text-gray-500 mt-1">Weekly</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-xs text-gray-500 mb-1">Most profitable source</h3>
            <p className="text-lg font-bold text-gray-900">Ads</p>
            <p className="text-xs text-gray-500 mt-1">This Week</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-xs text-gray-500 mb-1">Least profitable source</h3>
            <p className="text-lg font-bold text-gray-900">Tickets</p>
            <p className="text-xs text-gray-500 mt-1">Weekly</p>
          </div>
        </div>

        <div className="border-b mb-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('revenue')}
              className={`pb-3 text-sm font-medium border-b-2 ${
                activeTab === 'revenue'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Revenue
            </button>
            <button
              onClick={() => setActiveTab('expenses')}
              className={`pb-3 text-sm font-medium border-b-2 ${
                activeTab === 'expenses'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Expenses
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mb-6">

          <div className="flex-1 min-w-[300px] bg-white p-5 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700">Revenue</h3>
              <select className="text-xs border border-gray-300 rounded px-2 py-1 bg-white text-gray-700">
                <option>5 Years</option>
              </select>
            </div>

            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" tick={{ fontSize: 11 }} stroke="#9ca3af" />
                <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex-1 min-w-[300px] bg-white p-5 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700">Sources</h3>
              <select className="text-xs border border-gray-300 rounded px-2 py-1 bg-white text-gray-700">
                <option>This Week</option>
              </select>
            </div>

            <div className="flex">
              <div className="block justify-center gap-3 mt-5">
                {sourcesData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 mt-5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>

              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={sourcesData} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                    {sourcesData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex-1 min-w-[300px] space-y-3">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Annual Revenue FY'23</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold text-gray-900">₹15,23,234</p>
                <span className="text-xs text-green-600 font-medium">+25.6%</span>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Avg. Weekly Revenue</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold text-gray-900">₹23,234</p>
                <span className="text-xs text-green-600 font-medium">+5.6%</span>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Annual Profit FY'23</p>
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold text-gray-900">₹10,23,234</p>
                <span className="text-xs text-green-600 font-medium">+25.6%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mb-6">

          <div className="flex flex-col gap-6 flex-1 min-w-[350px]">

            <div className="bg-white p-5 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-gray-800">Ticket Sales</h3>
                <select className="text-xs border border-gray-300 rounded px-2 py-1 bg-white text-gray-700">
                  <option>This Week</option>
                </select>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded"></div>
                  <span className="text-xs text-gray-600">Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded"></div>
                  <span className="text-xs text-gray-600">Offline</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={ticketSalesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fontSize: 11 }} stroke="#9ca3af" />
                  <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" tickFormatter={(v) => `₹${v / 1000}k`} />
                  <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
                  <Bar dataKey="online" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="offline" fill="#9ca3af" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-gray-800">Ads Revenue</h3>
                <select className="text-xs border border-gray-300 rounded px-2 py-1 bg-white text-gray-700">
                  <option>This Week</option>
                </select>
              </div>

              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={adsRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fontSize: 11 }} stroke="#9ca3af" />
                  <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" tickFormatter={(v) => `${v / 1000}k`} />
                  <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
                  <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex-1 min-w-[350px] bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-800">Ticket Revenue</h3>

                <div className="flex gap-2">
                  {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((w, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1 text-xs rounded ${
                        i === 0 ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-600">Movie</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-gray-600">Filmforce<br/>(20%)</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-gray-600">Distributor<br/>(30%)</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-gray-600">Producer<br/>(50%)</th>
                  </tr>
                </thead>

                <tbody>
                  {ticketRevenueData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">{row.movie}</td>
                      <td className="py-3 px-4 text-sm text-center text-gray-700">{row.filmforce}</td>
                      <td className="py-3 px-4 text-sm text-center text-gray-700">{row.distributor}</td>
                      <td className="py-3 px-4 text-sm text-center text-gray-700">{row.producer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}


export default CostAnalysis;