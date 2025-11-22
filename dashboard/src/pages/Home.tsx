import React from 'react';
import { DollarSign, ShoppingCart, Package, Users, TrendingUp, TrendingDown, ArrowUpRight, BarChart3, User } from 'lucide-react';

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendValue, 
  color 
}: { 
  title: string; 
  value: string; 
  icon: any; 
  trend: 'up' | 'down'; 
  trendValue: string; 
  color: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
        trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
      }`}>
        {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {trendValue}
      </div>
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
  </div>
);

const RecentOrder = ({ id, customer, amount, status }: { id: string; customer: string; amount: string; status: string }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
        <User className="w-5 h-5" />
      </div>
      <div>
        <p className="font-medium text-gray-900">{customer}</p>
        <p className="text-sm text-gray-500">Order #{id}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-semibold text-gray-900">{amount}</p>
      <span className={`text-xs px-2 py-1 rounded-full ${
        status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
        status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
        'bg-blue-100 text-blue-700'
      }`}>
        {status}
      </span>
    </div>
  </div>
);

const Home: React.FC = () => {
  const recentOrders = [
    { id: '1234', customer: 'John Doe', amount: '$234.00', status: 'Completed' },
    { id: '1235', customer: 'Jane Smith', amount: '$156.00', status: 'Processing' },
    { id: '1236', customer: 'Bob Johnson', amount: '$89.00', status: 'Pending' },
    { id: '1237', customer: 'Alice Brown', amount: '$445.00', status: 'Completed' },
    { id: '1238', customer: 'Charlie Wilson', amount: '$267.00', status: 'Processing' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your store today.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all w-fit">
          <ArrowUpRight className="w-4 h-4" />
          View Reports
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$45,231" 
          icon={DollarSign} 
          trend="up" 
          trendValue="+12.5%" 
          color="bg-emerald-500" 
        />
        <StatCard 
          title="Total Orders" 
          value="1,234" 
          icon={ShoppingCart} 
          trend="up" 
          trendValue="+8.2%" 
          color="bg-blue-500" 
        />
        <StatCard 
          title="Total Products" 
          value="456" 
          icon={Package} 
          trend="up" 
          trendValue="+3.1%" 
          color="bg-purple-500" 
        />
        <StatCard 
          title="Total Customers" 
          value="8,234" 
          icon={Users} 
          trend="up" 
          trendValue="+15.3%" 
          color="bg-orange-500" 
        />
      </div>

      {/* Charts and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Sales Overview</h2>
              <p className="text-sm text-gray-500">Monthly sales performance</p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Chart visualization would go here</p>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h2>
          <div className="space-y-2">
            {recentOrders.map((order) => (
              <RecentOrder key={order.id} {...order} />
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium text-sm">
            View All Orders
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left group">
          <Package className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900">Add Product</h3>
          <p className="text-sm text-gray-500">Create new product</p>
        </button>
        <button className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left group">
          <ShoppingCart className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900">New Order</h3>
          <p className="text-sm text-gray-500">Create manual order</p>
        </button>
        <button className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left group">
          <Users className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900">Add Customer</h3>
          <p className="text-sm text-gray-500">Register new customer</p>
        </button>
        <button className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left group">
          <TrendingUp className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900">View Analytics</h3>
          <p className="text-sm text-gray-500">Detailed insights</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
