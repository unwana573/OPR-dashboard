export default function HallManagement() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Hall Management
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Manage cinema halls, screens, and seating arrangements
      </p>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Active Halls
        </h2>
        
        <div className="space-y-4">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Hall 1</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Capacity: 250 seats</p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                Active
              </span>
            </div>
          </div>
          
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Hall 2</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Capacity: 180 seats</p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                Active
              </span>
            </div>
          </div>
          
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Hall 3</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Capacity: 120 seats</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                Maintenance
              </span>
            </div>
          </div>
        </div>
        
        <button className="mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
          Add New Hall
        </button>
      </div>
    </div>
  );
}