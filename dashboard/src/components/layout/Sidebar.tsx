import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Database, Activity } from 'lucide-react';
import { clsx } from 'clsx';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: LayoutDashboard },
    { name: 'Data', path: '/data', icon: Database },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800 shadow-xl z-10 hidden md:flex">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="p-2 bg-indigo-600 rounded-lg">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">DashBoard</span>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group',
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">User Admin</span>
            <span className="text-xs text-slate-500">admin@example.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
