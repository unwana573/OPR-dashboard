import { TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
    { name: 'Extras', value: 10, color: '#e5e7eb' }
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
    <div className="h-full bg-gray-50 overflow-hidden">
      <div className="h-full p-2 sm:p-3 md:p-4 flex flex-col gap-2 sm:gap-3">
        
        {/* Row 1: Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 min-h-[15%]">

          <div className="bg-white p-3 sm:p-4 rounded-lg shadow flex flex-col justify-between min-h-[80px]">
            <h3 className="text-xs text-gray-500">Gross Revenue</h3>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">₹1,13,458</p>
            <div className="flex items-center text-xs">
              <span className="text-gray-500">Weekly</span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-auto" />
            </div>
          </div>

          <div className="bg-white p-3 sm:p-4 rounded-lg shadow flex flex-col justify-between min-h-[80px]">
            <h3 className="text-xs text-gray-500">Gross Profit</h3>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">₹13,458</p>
            <div className="flex items-center text-xs">
              <span className="text-gray-500">Weekly</span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-auto" />
            </div>
          </div>

          <div className="bg-white p-3 sm:p-4 rounded-lg shadow flex flex-col justify-between min-h-[80px]">
            <h3 className="text-xs text-gray-500">Total Expenses</h3>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">₹83,458</p>
            <div className="flex items-center text-xs">
              <span className="text-gray-500">Weekly</span>
              <TrendingDown className="w-3 h-3 text-red-600 ml-auto" />
            </div>
          </div>

          <div className="bg-white p-3 sm:p-4 rounded-lg shadow flex flex-col justify-between min-h-[80px]">
            <h3 className="text-xs text-gray-500">Net Profit</h3>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">₹30,000</p>
            <div className="flex items-center text-xs">
              <span className="text-gray-500">Weekly</span>
              <TrendingUp className="w-3 h-3 text-green-600 ml-auto" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 min-h-[28%]">

          <div className="lg:col-span-4 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[200px]">
            <h3 className="text-sm font-semibold text-gray-800">Profitability</h3>
            <p className="text-xs text-gray-500 mb-2">Sept, 2023</p>
            <div className="h-[calc(100%-3rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={profitabilityData}>
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expense" fill="#9ca3af" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[200px]">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Expenses</h3>
            <div className="h-[calc(100%-2rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expensesData}
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {expensesData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[200px]">
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Total Expenses</h3>
            <p className="text-xl font-bold text-gray-800">₹83,458</p>
            <p className="text-xs text-gray-500 mb-2">Weekly</p>
            <div className="h-[calc(100%-5rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 min-h-[28%]">

          <div className="lg:col-span-5 bg-white p-3 sm:p-4 rounded-lg shadow overflow-hidden min-h-[200px]">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Screen Schedule</h3>
            <div className="overflow-auto h-[calc(100%-2rem)]">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="pb-1">Screen</th>
                    <th className="pb-1">Movie</th>
                    <th className="pb-1">Occ%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 text-gray-700">S1</td>
                    <td className="py-2 text-gray-700">
                      Gadar 2 <span className="text-gray-500">10:15pm</span>
                    </td>
                    <td className="py-2 text-gray-700">94%</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-2 text-gray-700">S2</td>
                    <td className="py-2 text-gray-500">No Screening</td>
                    <td className="py-2 text-gray-700">0%</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-2 text-gray-700">S3</td>
                    <td className="py-2 text-gray-700">
                      Jawan <span className="text-gray-500">10:30pm</span>
                    </td>
                    <td className="py-2 text-gray-700">98%</td>
                  </tr>

                  <tr>
                    <td className="py-2 text-gray-700">S4</td>
                    <td className="py-2 text-gray-700">
                      Jawan <span className="text-gray-500">9:45pm</span>
                    </td>
                    <td className="py-2 text-gray-700">97%</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[200px]">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Concession Purchase</h3>
            <div className="h-[calc(100%-2rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={concessionData}
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="70%"
                    dataKey="value"
                    label={({ value }) => `${value}%`}
                  >
                    {concessionData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2">

            <div className="flex-1 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[60px]">
              <div className="flex justify-between items-start h-full">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">18°C</p>
                  <p className="text-xs text-gray-500 mt-1">Projector Room<br />Temperature</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-xs">Stable</span>
              </div>
            </div>

            <div className="flex-1 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[60px]">
              <div className="flex justify-between items-start h-full">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">High</p>
                  <p className="text-xs text-gray-500 mt-1">Security Status</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-xs">Check</span>
              </div>
            </div>

            <div className="flex-1 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[60px]">
              <div className="flex justify-between items-start h-full">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800">46%</p>
                  <p className="text-xs text-gray-500 mt-1">Inventory Stock</p>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded text-xs">Refill</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 min-h-[28%]">

          <div className="lg:col-span-4 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[200px]">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Customer Retention</h3>
            <div className="h-[calc(100%-2rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={retentionData}
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {retentionData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[200px]">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Footfall Analysis</h3>
            <div className="h-[calc(100%-2rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={footfallData}>
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-3 sm:p-4 rounded-lg shadow min-h-[200px]">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Infra. Audit</h3>
            <div className="space-y-2 overflow-auto h-[calc(100%-2rem)]">
              {['Electricity (Light)', 'Sound', 'Projector', 'Seating Occupancy'].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded text-xs">
                  <span className="text-gray-700">{item}</span>
                  <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
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