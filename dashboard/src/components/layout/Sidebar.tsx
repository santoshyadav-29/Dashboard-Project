import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  ShoppingCart, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';
import { clsx } from 'clsx';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Products', path: '/products', icon: Package },
    { name: 'Orders', path: '/orders', icon: ShoppingCart },
    { name: 'Customers', path: '/customers', icon: Users },
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
    <aside className="w-64 bg-white flex flex-col h-screen fixed left-0 top-0 border-r border-gray-200 z-10 hidden md:flex">
      <div className="p-6 flex items-center gap-3 border-b border-gray-200">
        <div className="p-2 bg-indigo-600 rounded-lg">
          <ShoppingBag className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="text-xl font-bold tracking-tight text-gray-900">ShopAdmin</span>
          <p className="text-xs text-gray-500">E-Commerce Panel</p>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group',
                isActive
                  ? 'bg-indigo-50 text-indigo-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg bg-gray-50">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{userName}</p>
            <p className="text-xs text-gray-500 truncate">{userEmail}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
