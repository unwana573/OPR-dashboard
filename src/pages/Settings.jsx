function Settings() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Settings
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Manage your account and application preferences
      </p>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Profile Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                defaultValue="Ravi"
                className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input 
                type="email" 
                defaultValue="ravi@example.com"
                className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Role
              </label>
              <input 
                type="text" 
                defaultValue="Operations Manager"
                disabled
                className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
          
          <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
            Save Changes
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Notifications
          </h2>
          
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Email notifications</span>
            </label>
            
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-3" />
              <span className="text-gray-700 dark:text-gray-300">Push notifications</span>
            </label>
            
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-700 dark:text-gray-300">SMS notifications</span>
            </label>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Security
          </h2>
          
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;