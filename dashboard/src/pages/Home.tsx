import React from 'react';
import { Users, FileText, TrendingUp, DollarSign } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: string; icon: any; color: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
    </div>
    <div className="mt-4 flex items-center gap-2 text-sm">
      <span className="text-emerald-500 font-medium flex items-center gap-1">
        <TrendingUp className="w-4 h-4" /> +12.5%
      </span>
      <span className="text-slate-400">from last month</span>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="1,234" icon={Users} color="bg-blue-500 text-blue-500" />
        <StatCard title="Total Posts" value="456" icon={FileText} color="bg-purple-500 text-purple-500" />
        <StatCard title="Revenue" value="$12,345" icon={DollarSign} color="bg-emerald-500 text-emerald-500" />
        <StatCard title="Active Sessions" value="89" icon={TrendingUp} color="bg-orange-500 text-orange-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-64 flex items-center justify-center text-slate-400">
          Chart Placeholder (Revenue)
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-64 flex items-center justify-center text-slate-400">
          Chart Placeholder (User Growth)
        </div>
      </div>
    </div>
  );
};

export default Home;
