import { Download, Plus, Info } from 'lucide-react';

function HallManagement() {
  const scheduleData = [
    { screen: 'Screen 1', runningMovie: 'GADAR 2', showTime: '9:45 - 12:00', nextMovie: 'GADAR 2', nextShowTime: '1:30 - 3:00', seatOcc: '96%', amountCollected: '₹20,902' },
    { screen: 'Screen 2', runningMovie: 'JAWAN', showTime: '9:45 - 12:00', nextMovie: 'JAWAN', nextShowTime: '1:30 - 3:00', seatOcc: '96%', amountCollected: '₹20,902' },
    { screen: 'Screen 3', runningMovie: 'TALK TO ME (Hindi)', showTime: '9:30 - 11:45', nextMovie: 'TALK TO ME (Hindi)', nextShowTime: '1:30 - 3:00', seatOcc: '96%', amountCollected: '₹20,902' },
    { screen: 'Screen 4', runningMovie: 'TALK TO ME (Eng)', showTime: '9:30 - 11:45', nextMovie: 'TALK TO ME (Eng)', nextShowTime: '1:30 - 3:00', seatOcc: '96%', amountCollected: '₹20,902' }
  ];

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      <div className="p-4 md:p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Hall Management</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 mb-2">Running Screens</h3>
            <p className="text-4xl font-bold text-gray-800">4/4</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 mb-2">Avg. Earning/screen</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-bold text-gray-800">₹88,458</p>
              <span className="text-sm text-gray-500">Weekly</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 mb-2">Avg. Seat Occupancy</h3>
            <p className="text-4xl font-bold text-gray-800">84%</p>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-sm text-gray-500">15 September '23, Friday</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Hall No.</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Running Movie</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Show time</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Next Movie</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Show time</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Seat Occ.</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-1">
                      Amount collected
                      <Info className="w-4 h-4 text-gray-400" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">{row.screen}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{row.runningMovie}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{row.showTime}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{row.nextMovie}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{row.nextShowTime}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{row.seatOcc}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{row.amountCollected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="p-4 flex justify-end gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Schedule Screen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HallManagement;