import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Package } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: number;
}

const Orders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const orders: Order[] = [
    { id: '1234', customer: 'John Doe', date: '2025-11-22', total: 234.00, status: 'Delivered', items: 3 },
    { id: '1235', customer: 'Jane Smith', date: '2025-11-22', total: 156.00, status: 'Processing', items: 2 },
    { id: '1236', customer: 'Bob Johnson', date: '2025-11-21', total: 89.00, status: 'Pending', items: 1 },
    { id: '1237', customer: 'Alice Brown', date: '2025-11-21', total: 445.00, status: 'Shipped', items: 5 },
    { id: '1238', customer: 'Charlie Wilson', date: '2025-11-20', total: 267.00, status: 'Processing', items: 4 },
    { id: '1239', customer: 'Diana Prince', date: '2025-11-20', total: 123.00, status: 'Delivered', items: 2 },
    { id: '1240', customer: 'Ethan Hunt', date: '2025-11-19', total: 567.00, status: 'Cancelled', items: 6 },
    { id: '1241', customer: 'Fiona Green', date: '2025-11-19', total: 345.00, status: 'Shipped', items: 3 },
  ];

  const filteredOrders = orders.filter(order =>
    order.id.includes(searchQuery) ||
    order.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-100 text-emerald-700';
      case 'Shipped':
        return 'bg-blue-100 text-blue-700';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500 mt-1">Manage and track all customer orders</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/30 w-fit">
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
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Order ID</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Customer</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Items</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Total</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono font-medium text-blue-600">#{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                        {order.customer.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Package className="w-4 h-4" />
                      <span>{order.items}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors text-blue-600">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-blue-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Showing {filteredOrders.length} of {orders.length} orders
            </span>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-white transition-colors text-sm font-medium text-gray-700">
                Previous
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-sm font-medium">
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
