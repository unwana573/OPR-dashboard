import { useState } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw, Edit2, Download, X } from 'lucide-react';

function ScreenScheduling() {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDate, setSelectedDate] = useState(22);
  
  const dates = [
    { date: 22, day: 'Fri', month: 'Sept' },
    { date: 23, day: 'Sat', month: 'Sept' },
    { date: 24, day: 'Sun', month: 'Sept' },
    { date: 25, day: 'Mon', month: 'Sept' },
    { date: 26, day: 'Tue', month: 'Sept' },
    { date: 27, day: 'Wed', month: 'Sept' },
    { date: 28, day: 'Thu', month: 'Sept' }
  ];

  const shows = [
    { id: 1, name: 'Show 1', time: '[7:00 am - 10:30am]' },
    { id: 2, name: 'Show 2', time: '[12:00 pm - 3:00pm]' },
    { id: 3, name: 'Show 3', time: '[4:00 pm - 06:30pm]' },
    { id: 4, name: 'Show 4', time: '[8:00 pm - 10:30pm]' },
    { id: 5, name: 'Show 5', time: '[12:00 am - 3:30am]' }
  ];

  const [scheduleData, setScheduleData] = useState([
    { screen: 'Screen 1', shows: ['Gadar 2', 'Gadar 2', 'Gadar 2', 'Gadar 2', 'Gadar 2'] },
    { screen: 'Screen 2', shows: ['Jawan', 'Jawan', 'Jawan', 'Jawan', 'Jawan'] },
    { screen: 'Screen 3', shows: ['Talk to Me (Hindi)', 'Talk to Me (Hindi)', 'Talk to Me (Hindi)', 'Talk to Me (Hindi)', 'Talk to Me (Hindi)'] },
    { screen: 'Screen 4', shows: ['Talk to Me (Eng)', 'Talk to Me (Eng)', 'Talk to Me (Eng)', 'Talk to Me (Eng)', 'Talk to Me (Eng)'] }
  ]);

  const handleCellChange = (screenIndex, showIndex, value) => {
    const newData = [...scheduleData];
    newData[screenIndex].shows[showIndex] = value;
    setScheduleData(newData);
  };

  return (
    <div className="h-full bg-white overflow-auto">
      <div className="p-4 md:p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Screen Scheduling</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-sm text-gray-500 mb-2">Upcoming Movies</h3>
            <div className="flex justify-between items-end">
              <p className="text-2xl font-bold text-gray-800">Gadar 2, Jawan</p>
              <button className="text-sm text-indigo-600 hover:underline">View All →</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-sm text-gray-500 mb-2">Most preferred Genre</h3>
            <div className="flex justify-between items-end">
              <p className="text-2xl font-bold text-gray-800">Thriller, Action</p>
              <span className="text-sm text-gray-500">Weekly</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-sm text-gray-500 mb-2">Most preferred time</h3>
            <div className="flex justify-between items-end">
              <p className="text-2xl font-bold text-gray-800">8pm - 01am</p>
              <span className="text-sm text-gray-500">Weekly</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border mb-6 p-4">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex-1 flex gap-2 overflow-x-auto">
            {dates.map((d) => (
              <div key={d.date} className="flex flex-col items-center">
              <button
              onClick={() => setSelectedDate(d.date)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg transition-colors ${
              selectedDate === d.date
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              >
            <div className="text-center">
              <div className="text-xl font-bold">{d.date}</div>
              <div className="text-xs">{d.month}</div>
          </div>
          </button>

          <div className="text-xs text-gray-600 mt-1">{d.day}</div>
        </div>
      ))}
    </div>


            <button className="p-2 hover:bg-gray-100 rounded">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            <button className="ml-4 flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <RefreshCw className="w-4 h-4" />
              Auto Schedule
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 bg-gray-50">Screens</th>
                  {shows.map((show) => (
                    <th key={show.id} className="text-center py-3 px-4 text-sm font-medium text-gray-700 bg-gray-50">
                      <div>{show.name}</div>
                      <div className="text-xs font-normal text-gray-500 mt-1">{show.time}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, screenIndex) => (
                  <tr key={screenIndex} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">{row.screen}</td>
                    {row.shows.map((movie, showIndex) => (
                      <td key={showIndex} className="py-3 px-4">
                        {isEditing ? (
                          <input
                            type="text"
                            value={movie}
                            onChange={(e) => handleCellChange(screenIndex, showIndex, e.target.value)}
                            className="w-full px-2 py-1 text-sm text-center border border-indigo-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                        ) : (
                          <div className="text-sm text-center text-gray-700 bg-gray-50 py-2 px-3 rounded">{movie}</div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-end gap-3">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    alert('Schedule saved successfully!');
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Set Pricing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenScheduling;