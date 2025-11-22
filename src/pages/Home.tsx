import React, { useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  User,
  type LucideIcon,
} from "lucide-react";
import RevenueChart from "../components/charts/RevenueChart";
import { Link } from "react-router-dom";

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  color,
}: {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: "up" | "down";
  trendValue: string;
  color: string;
}) => (
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
    <div className="flex items-center justify-between mb-3 sm:mb-4">
      <div className={`p-2 sm:p-3 rounded-lg ${color}`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
          trend === "up"
            ? "bg-emerald-50 text-emerald-600"
            : "bg-red-50 text-red-600"
        }`}
      >
        {trend === "up" ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        {trendValue}
      </div>
    </div>
    <div>
      <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
        {title}
      </p>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 break-all">
        {value}
      </h3>
    </div>
  </div>
);

const RecentOrder = ({
  id,
  customer,
  amount,
  status,
}: {
  id: string;
  customer: string;
  amount: string;
  status: string;
}) => (
  <div className="flex items-center justify-between p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
        <User className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
          {customer}
        </p>
        <p className="text-xs sm:text-sm text-gray-500 truncate">Order #{id}</p>
      </div>
    </div>
    <div className="text-right shrink-0 ml-2">
      <p className="font-semibold text-gray-900 text-sm sm:text-base whitespace-nowrap">
        {amount}
      </p>
      <span
        className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
          status === "Completed"
            ? "bg-emerald-100 text-emerald-700"
            : status === "Pending"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {status}
      </span>
    </div>
  </div>
);

const Home: React.FC = () => {
  const { items: orders } = useAppSelector((state) => state.orders);
  const { items: customers } = useAppSelector((state) => state.customers);
  const { items: products } = useAppSelector((state) => state.products);

  // Calculate stats
  const totalRevenue = useMemo(
    () => orders.reduce((sum, order) => sum + order.total, 0),
    [orders]
  );
  const totalOrders = orders.length;
  const totalCustomers = customers.length;
  const totalProducts = products.length;

  // Prepare chart data
  const chartData = useMemo(() => {
    const revenueByDate = orders.reduce((acc, order) => {
      const date = order.date;
      acc[date] = (acc[date] || 0) + order.total;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(revenueByDate)
      .map(([date, revenue]) => ({ date, revenue }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [orders]);

  const recentOrders = orders.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all w-full sm:w-fit shrink-0">
          <ArrowUpRight className="w-4 h-4" />
          View Reports
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
          icon={DollarSign}
          trend="up"
          trendValue="+12.5%"
          color="bg-emerald-500"
        />
        <StatCard
          title="Total Orders"
          value={totalOrders.toString()}
          icon={ShoppingCart}
          trend="up"
          trendValue="+8.2%"
          color="bg-blue-500"
        />
        <StatCard
          title="Total Products"
          value={totalProducts.toString()}
          icon={Package}
          trend="up"
          trendValue="+3.1%"
          color="bg-purple-500"
        />
        <StatCard
          title="Total Customers"
          value={totalCustomers.toString()}
          icon={Users}
          trend="up"
          trendValue="+15.3%"
          color="bg-orange-500"
        />
      </div>

      {/* Charts and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Sales Overview
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Monthly sales performance
              </p>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <RevenueChart data={chartData} />
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              Recent Orders
            </h3>
            <Link
              to="/orders"
              className="text-xs sm:text-sm text-indigo-600 font-medium hover:text-indigo-700 whitespace-nowrap"
            >
              View All
            </Link>
          </div>
          <div className="space-y-1 sm:space-y-2">
            {recentOrders.map((order) => (
              <RecentOrder
                key={order.id}
                id={order.id}
                customer={order.customer}
                amount={`$${order.total.toFixed(2)}`}
                status={order.status}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          to="/products"
          className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left group"
        >
          <Package className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900">Add Product</h3>
          <p className="text-sm text-gray-500">Create new product</p>
        </Link>
        <Link
          to="/orders"
          className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left group"
        >
          <ShoppingCart className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900">New Order</h3>
          <p className="text-sm text-gray-500">Create manual order</p>
        </Link>
        <Link
          to="/customers"
          className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left group"
        >
          <Users className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900">Add Customer</h3>
          <p className="text-sm text-gray-500">Register new customer</p>
        </Link>
        <Link
          to="/data"
          className="p-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all text-left group"
        >
          <TrendingUp className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-gray-900">View Data</h3>
          <p className="text-sm text-gray-500">Detailed insights</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
