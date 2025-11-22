import React, { useState } from 'react';
import { Search, Mail, Phone, MapPin, MoreVertical } from 'lucide-react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  orders: number;
  totalSpent: number;
  status: 'Active' | 'Inactive';
}

const Customers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const customers: Customer[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8900', location: 'New York, USA', orders: 12, totalSpent: 1234.50, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8901', location: 'Los Angeles, USA', orders: 8, totalSpent: 856.00, status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 8902', location: 'Chicago, USA', orders: 5, totalSpent: 445.00, status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '+1 234 567 8903', location: 'Houston, USA', orders: 15, totalSpent: 2145.00, status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', phone: '+1 234 567 8904', location: 'Phoenix, USA', orders: 3, totalSpent: 267.00, status: 'Active' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', phone: '+1 234 567 8905', location: 'Philadelphia, USA', orders: 20, totalSpent: 3456.00, status: 'Active' },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-500 mt-1">Manage your customer relationships</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
        />
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                  {customer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    customer.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {customer.status}
                  </span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="truncate">{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{customer.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Orders</p>
                  <p className="text-lg font-bold text-gray-900">{customer.orders}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Spent</p>
                  <p className="text-lg font-bold text-blue-600">${customer.totalSpent.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
