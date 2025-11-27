import { TrendingUp, TrendingDown } from 'lucide-react';

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

  const maxRevenue = Math.max(...profitabilityData.map(d => Math.max(d.revenue, d.expense)));
  const maxFootfall = Math.max(...footfallData.map(d => d.count));

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="grid grid-cols-16 gap-5 ">
        <div className="col-span-12 md:col-span-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Gross Revenue</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">₹1,13,458</p>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">Weekly</span>
              <TrendingUp className="w-4 h-4 text-green-600 ml-auto" />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Gross Profit</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">₹13,458</p>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">Weekly</span>
              <TrendingUp className="w-4 h-4 text-green-600 ml-auto" />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Total Expenses</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">₹83,458</p>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">Weekly</span>
              <TrendingDown className="w-4 h-4 text-red-600 ml-auto" />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Total Expenses</h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">₹83,458</p>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">Weekly</span>
              <TrendingDown className="w-4 h-4 text-red-600 ml-auto" />
            </div>
          </div>
        </div>

        <div className="col-span-0 lg:col-span-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Profitability</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sept, 2023</p>
              </div>
              <select className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
              </select>
            </div>
            
            <div className="relative h-64">
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 pr-2">
                <span>₹50k</span>
                <span>₹10k</span>
                <span>₹2k</span>
                <span>₹0</span>
              </div>
              
              <div className="ml-12 h-full flex items-end justify-around gap-2">
                {profitabilityData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex items-end justify-center gap-1 h-52">
                      <div 
                        className="w-3 bg-blue-500 rounded-t"
                        style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                      ></div>
                      <div 
                        className="w-3 bg-gray-300 dark:bg-gray-600 rounded-t"
                        style={{ height: `${(item.expense / maxRevenue) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Expense</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Expenses</h3>
            
            <div className="flex justify-center mb-4">
              <div className="relative w-40 h-40">
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: `conic-gradient(
                      #10b981 0deg 126deg,
                      #3b82f6 126deg 216deg,
                      #ef4444 216deg 288deg,
                      #f59e0b 288deg 324deg,
                      #e5e7eb 324deg 360deg
                    )`
                  }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Staff Salary</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Inventory Purchase</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Bills</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Server Cost</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Extras</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Ads</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-green-600">13.5%</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">₹5,400</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Screen Schedule</h3>
              <select className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <option>Current</option>
              </select>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600 dark:text-gray-400 border-b dark:border-gray-700">
                  <th className="pb-2">Screen</th>
                  <th className="pb-2">Movie</th>
                  <th className="pb-2">Occupancy%</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b dark:border-gray-700">
                  <td className="py-3 text-gray-700 dark:text-gray-300">S1</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-blue-500 rounded"></div>
                      <span className="text-gray-700 dark:text-gray-300">Gadar 2</span>
                      <span className="text-xs text-gray-500">10:15 pm</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">94%</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-3 text-gray-700 dark:text-gray-300">S2</td>
                  <td className="py-3">
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      No Screening <span className="text-xs">1:15 pm</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">0%</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-3 text-gray-700 dark:text-gray-300">S3</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-1 bg-blue-500 rounded"></div>
                      <span className="text-gray-700 dark:text-gray-300">Jawan</span>
                      <span className="text-xs text-gray-500">10:30 pm</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">98%</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700 dark:text-gray-300">S4</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1 bg-blue-500 rounded"></div>
                      <span className="text-gray-700 dark:text-gray-300">Jawan</span>
                      <span className="text-xs text-gray-500">9:45 pm</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">97%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Concession Purchase</h3>
              <select className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <option>This Week</option>
              </select>
            </div>

            <div className="flex justify-center mb-4">
              <div className="relative w-40 h-40">
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: `conic-gradient(
                      #10b981 0deg 120deg,
                      #f59e0b 120deg 240deg,
                      #ef4444 240deg 360deg
                    )`
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">₹13,494</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Total FnB Purchase</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Before Movie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Interval</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">After Movie</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">18°C</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Projector Room Temperature</p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                Stable
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">High</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Security Status</p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                Check
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">46%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Inventory Stock</p>
              </div>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-sm">
                Refill
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Customer Retention Metrics</h3>
              <select className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <option>This Week</option>
              </select>
            </div>

            <div className="flex justify-center mb-4">
              <div className="relative w-48 h-48">
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: `conic-gradient(
                      #3b82f6 0deg 204deg,
                      #f59e0b 204deg 292deg,
                      #ef4444 292deg 360deg
                    )`
                  }}
                ></div>
                <div className="absolute top-0 right-0 flex flex-col items-end text-sm">
                  <span className="text-gray-700 dark:text-gray-300">Charned</span>
                  <span className="text-gray-500 dark:text-gray-400">(24.5%)</span>
                </div>
                <div className="absolute bottom-0 left-0 flex flex-col items-start text-sm">
                  <span className="text-gray-700 dark:text-gray-300">Retain</span>
                  <span className="text-gray-500 dark:text-gray-400">(21.2%)</span>
                </div>
                <div className="absolute bottom-0 right-0 flex flex-col items-end text-sm">
                  <span className="text-gray-700 dark:text-gray-300">CLV</span>
                  <span className="text-gray-500 dark:text-gray-400">(56.7%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Footfall Analysis</h3>
              <select className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <option>This Week</option>
              </select>
            </div>

            <div className="relative h-48">
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>100k</span>
                <span>50k</span>
                <span>10k</span>
                <span>2k</span>
                <span>0</span>
              </div>

              <div className="ml-10 h-full flex items-end justify-around gap-2">
                {footfallData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div 
                      className="w-full bg-blue-500 rounded-t"
                      style={{ height: `${(item.count / maxFootfall) * 100}%` }}
                    ></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Infra. Audit</h3>
              <select className="text-sm border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <option>Screen1</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300">Electricity (Light)</span>
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300">Sound</span>
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300">Projector</span>
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <span className="text-sm text-gray-700 dark:text-gray-300">Seating Occupancy</span>
                <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;