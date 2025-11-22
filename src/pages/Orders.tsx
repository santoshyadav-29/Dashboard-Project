import React, { useState } from "react";
import { Search, Filter, Download, Eye, Package, User } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  items: number;
}

const Orders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const orders: Order[] = [
    {
      id: "1234",
      customer: "John Doe",
      date: "2025-11-22",
      total: 234.0,
      status: "Delivered",
      items: 3,
    },
    {
      id: "1235",
      customer: "Jane Smith",
      date: "2025-11-22",
      total: 156.0,
      status: "Processing",
      items: 2,
    },
    {
      id: "1236",
      customer: "Bob Johnson",
      date: "2025-11-21",
      total: 89.0,
      status: "Pending",
      items: 1,
    },
    {
      id: "1237",
      customer: "Alice Brown",
      date: "2025-11-21",
      total: 445.0,
      status: "Shipped",
      items: 5,
    },
    {
      id: "1238",
      customer: "Charlie Wilson",
      date: "2025-11-20",
      total: 267.0,
      status: "Processing",
      items: 4,
    },
    {
      id: "1239",
      customer: "Diana Prince",
      date: "2025-11-20",
      total: 123.0,
      status: "Delivered",
      items: 2,
    },
    {
      id: "1240",
      customer: "Ethan Hunt",
      date: "2025-11-19",
      total: 567.0,
      status: "Cancelled",
      items: 6,
    },
    {
      id: "1241",
      customer: "Fiona Green",
      date: "2025-11-19",
      total: 345.0,
      status: "Shipped",
      items: 3,
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.id.includes(searchQuery) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-100 text-emerald-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Pending":
        return "bg-orange-100 text-orange-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500 mt-1">
            Manage and track all customer orders
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all w-fit">
          <Download className="w-4 h-4" />
          Export Orders
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by order ID or customer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors bg-white">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-700">Filters</span>
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Order ID
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Customer
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Date
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Items
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Total
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Status
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-blue-50/50 transition-colors"
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <span className="font-mono text-xs sm:text-sm font-medium text-blue-600">
                      #{order.id}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                        <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <span className="font-medium text-gray-900 text-xs sm:text-sm whitespace-nowrap">
                        {order.customer}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                    {order.date}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-1 text-gray-600 text-xs sm:text-sm">
                      <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{order.items}</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-900 text-xs sm:text-sm whitespace-nowrap">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <button className="p-1.5 sm:p-2 hover:bg-blue-100 rounded-lg transition-colors text-blue-600">
                      <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-3 sm:px-6 py-3 sm:py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              Showing {filteredOrders.length} of {orders.length} orders
            </span>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-200 rounded-lg hover:bg-white transition-colors text-xs sm:text-sm font-medium text-gray-700">
                Previous
              </button>
              <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-xs sm:text-sm font-medium">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
