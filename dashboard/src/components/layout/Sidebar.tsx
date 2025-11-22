import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  LogOut,
  Tag,
  Truck
} from 'lucide-react';
import { clsx } from 'clsx';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Products', path: '/products', icon: Package },
    { name: 'Orders', path: '/orders', icon: ShoppingCart },
    { name: 'Customers', path: '/customers', icon: Users },
    { name: 'Categories', path: '/categories', icon: Tag },
    { name: 'Shipping', path: '/shipping', icon: Truck },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const userName = localStorage.getItem('userName') || 'Admin User';
  const userEmail = localStorage.getItem('userEmail') || 'admin@example.com';

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 text-white flex flex-col h-screen fixed left-0 top-0 shadow-2xl z-10 hidden md:flex">
      <div className="p-6 flex items-center gap-3 border-b border-blue-700/50">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg">
          <ShoppingBag className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="text-xl font-bold tracking-tight">ShopAdmin</span>
          <p className="text-xs text-blue-300">E-Commerce Panel</p>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group',
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-900/30'
                  : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-blue-700/50">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-400 flex items-center justify-center text-white font-bold text-sm">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{userName}</p>
            <p className="text-xs text-blue-300 truncate">{userEmail}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-blue-100 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
