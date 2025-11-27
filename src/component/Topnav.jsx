import { Search, Bell, ChevronDown, Moon, Sun } from 'lucide-react';

export default function TopNav({ darkMode, onToggleDarkMode }) {
  return (
    <header className={`w-full border-b px-6 py-3 flex items-center gap-4 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex-1 max-w-md">
        <div className={`relative flex items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
          <Search className={`absolute left-3 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
          <input
            type="text"
            placeholder="Search anything..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              darkMode 
                ? 'bg-gray-700 text-gray-200 placeholder-gray-400' 
                : 'bg-gray-50 text-gray-800 placeholder-gray-400'
            }`}
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded-lg transition-colors ${
            darkMode 
              ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <button className={`relative p-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Ravi</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
          <ChevronDown className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
      </div>
    </header>
  );
}