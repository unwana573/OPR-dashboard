import { useState } from 'react';
import Sidebar from '../component/Sidebar';
import TopNav from '../component/Topnav';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar darkMode={darkMode} />
      
      <div className="flex-1 flex flex-col">
        <TopNav 
          darkMode={darkMode} 
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />
        
        <main className={`flex-1 overflow-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}