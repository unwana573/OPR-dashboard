import { useState, useRef, useEffect } from "react";
import { Search, Bell, ChevronDown, Moon, Sun } from "lucide-react";

export default function TopNav({ darkMode, onToggleDarkMode }) {
  const [openNotif, setOpenNotif] = useState(false);
  const notifRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setOpenNotif(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`border-b px-6 py-3 flex items-center gap-4 ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex-1 max-w-md">
        <div
          className={`relative flex items-center ${
            darkMode ? "bg-gray-700" : "bg-gray-50"
          } rounded-lg`}
        >
          <Search
            className={`absolute left-3 w-5 h-5 ${
              darkMode ? "text-gray-400" : "text-gray-400"
            }`}
          />
          <input
            type="text"
            placeholder="Search anything..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              darkMode
                ? "bg-gray-700 text-gray-200 placeholder-gray-400"
                : "bg-gray-50 text-gray-800 placeholder-gray-400"
            }`}
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {/* <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded-lg transition-colors ${
            darkMode
              ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button> */}

      <div className="relative" ref={notifRef}>
          <button
            onClick={() => setOpenNotif(!openNotif)}
            className={`relative p-2 hover:scale-105 transition ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {openNotif && (
            <div
              className={`absolute right-0 mt-3 w-84 rounded-xl shadow-lg border z-50 overflow-hidden ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
            >

              <div className="flex justify-between items-center px-4 py-2 text-xs font-semibold border-b">
                <button className="text-blue-500 hover:underline">✔ Mark all read</button>
                <button className="text-red-500 hover:underline">✖ Clear All</button>
              </div>

              <div className="max-h-80 overflow-y-auto text-sm divide-y">
                
                <div className="flex justify-between items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 cursor-pointer">
                  <p className="text-gray-700 ">
                    <span className="text-red-500 font-bold">!</span>{" "}
                    <span className="font-semibold text-red-600">Gadar 2</span> releases next week, 25 Sept’ 23.
                  </p>
                  <span className="text-gray-500 text-xs whitespace-nowrap">01:09 PM</span>
                </div>

                <div className="flex justify-between items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 cursor-pointer">
                  <p className="text-gray-700 ">
                    <span className="text-red-500 font-bold">!</span>{" "}
                    <span className="font-semibold text-red-600">JAWAN</span> releases next week, 25 Sept’ 23.
                  </p>
                  <span className="text-gray-500 text-xs whitespace-nowrap">10:38 AM</span>
                </div>

                <div className="flex justify-between items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 cursor-pointer">
                  <p className="font-semibold text-blue-600 dark:text-blue-400">
                    DREAM GIRL 2 releases next week, 15 Sept’ 23.
                  </p>
                  <span className="text-gray-500 text-xs whitespace-nowrap">11/06/22</span>
                </div>

                <div className="flex justify-between items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 cursor-pointer">
                  <p className="text-gray-700 ">Concession Area requires staff</p>
                  <span className="text-gray-500 text-xs whitespace-nowrap">10/06/22</span>
                </div>

                <div className="flex justify-between items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 cursor-pointer">
                  <p className="text-gray-700 ">
                    <span className="text-red-500 font-bold">!</span> Projector S2 heating up
                  </p>
                  <span className="text-gray-500 text-xs whitespace-nowrap">07/06/22</span>
                </div>
              </div>

              <button
                className={`w-full py-3 text-center text-sm font-semibold ${
                  darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-50 text-blue-600 hover:bg-gray-100"
                }`}
              >
                View All Notifications
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-medium ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Ravi
          </span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
          <ChevronDown
            className={`w-4 h-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          />
        </div>
      </div>
    </header>
  );
}
