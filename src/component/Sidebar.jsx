import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, LayoutDashboard, Wrench, BarChart3, Target, Settings, LogOut, Menu } from 'lucide-react';

export default function Sidebar({ darkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [expandedSections, setExpandedSections] = useState({
    management: false,
    analysis: false,
    strategy: false
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard'
    },
    {
      id: 'management',
      label: 'Management Tool',
      icon: Wrench,
      expandable: true,
      subItems: [
        { id: 'hall-management', label: 'Hall Management', path: '/management/hall' },
        { id: 'infrastructure-audit', label: 'Infrastructure Audit', path: '/management/infrastructure' },
        { id: 'projector-room', label: 'Projector Room', disabled: true },
        { id: 'staff-management', label: 'Staff Management', path: '/management/staff' },
        { id: 'inventory-management', label: 'Inventory Management', path: '/management/inventory' }
      ]
    },
    {
      id: 'analysis',
      label: 'Analysis Tool',
      icon: BarChart3,
      expandable: true,
      subItems: [
        { id: 'cost-analysis', label: 'Cost Analysis', path: '/analysis/cost' },
        { id: 'footfall-analysis', label: 'Footfall Analysis', path: '/analysis/footfall' },
        { id: 'projector-room-analysis', label: 'Projector Room', disabled: true },
        { id: 'spatial-analysis', label: 'Spatial Analysis', path: '/analysis/spatial' }
      ]
    },
    {
      id: 'strategy',
      label: 'Strategy Tool',
      icon: Target,
      expandable: true,
      subItems: [
        { id: 'screen-scheduling', label: 'Screen Scheduling', path: '/strategy/scheduling' },
        { id: 'pricing-strategy', label: 'Pricing Strategy', path: '/strategy/pricing' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      path: '/settings'
    }
  ];

  const isActive = (path) => {
    if (!path) return false;
    return location.pathname === path || location.pathname === path.replace(/^\//, '');
  };

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <aside className={`border-r flex flex-col transition-all duration-300 ${
      sidebarCollapsed ? 'w-20' : 'w-64'
    } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className={`p-4 border-b flex items-center gap-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center flex-shrink-0">
          <Menu className="w-5 h-5 text-white" />
        </div>
        {!sidebarCollapsed && (
          <span className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Opr. Manager</span>
        )}
        <button 
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={`${sidebarCollapsed ? '' : 'ml-auto'} ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <ChevronRight className={`w-5 h-5 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-1">
            <button
              onClick={() => {
                if (item.expandable) {
                  if (sidebarCollapsed) {
                    setSidebarCollapsed(false);
                  }
                  toggleSection(item.id);
                } else {
                  handleNavigation(item.path);
                }
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive(item.path)
                  ? darkMode 
                    ? 'bg-indigo-900 text-indigo-300 font-medium' 
                    : 'bg-indigo-50 text-indigo-700 font-medium'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-50'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
              title={sidebarCollapsed ? item.label : ''}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.expandable && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections[item.id] ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </>
              )}
            </button>

            {item.expandable && expandedSections[item.id] && !sidebarCollapsed && (
              <div className="mt-1 ml-4 space-y-1">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    disabled={subItem.disabled}
                    onClick={() => !subItem.disabled && handleNavigation(subItem.path)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      subItem.disabled
                        ? darkMode 
                          ? 'text-gray-600 cursor-not-allowed'
                          : 'text-gray-400 cursor-not-allowed'
                        : isActive(subItem.path)
                        ? darkMode
                          ? 'bg-gray-700 text-gray-100 font-medium'
                          : 'bg-gray-100 text-gray-900 font-medium'
                        : darkMode
                        ? 'text-gray-400 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className={`p-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button 
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
            darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
          } ${sidebarCollapsed ? 'justify-center' : ''}`}
          title={sidebarCollapsed ? 'Logout' : ''}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!sidebarCollapsed && <span>Logout</span>}
        </button>
        {!sidebarCollapsed && (
          <p className={`text-xs text-center mt-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            15 September 2023, 4:50 pm
          </p>
        )}
      </div>
    </aside>
  );
}