import React, { useState } from "react";
import { Search, Mail, Phone, MapPin, MoreVertical, User } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  orders: number;
  totalSpent: number;
  status: "Active" | "Inactive";
}

const Customers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const customers: Customer[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      location: "New York, USA",
      orders: 12,
      totalSpent: 1234.5,
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234 567 8901",
      location: "Los Angeles, USA",
      orders: 8,
      totalSpent: 856.0,
      status: "Active",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+1 234 567 8902",
      location: "Chicago, USA",
      orders: 5,
      totalSpent: 445.0,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "+1 234 567 8903",
      location: "Houston, USA",
      orders: 15,
      totalSpent: 2145.0,
      status: "Active",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      phone: "+1 234 567 8904",
      location: "Phoenix, USA",
      orders: 3,
      totalSpent: 267.0,
      status: "Active",
    },
    {
      id: 6,
      name: "Diana Prince",
      email: "diana@example.com",
      phone: "+1 234 567 8905",
      location: "Philadelphia, USA",
      orders: 20,
      totalSpent: 3456.0,
      status: "Active",
    },
  ];

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Customers
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Manage your customer relationships
          </p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200 p-4 sm:p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                    {customer.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                      customer.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </div>
              </div>
              <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0">
                <MoreVertical className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="space-y-2 sm:space-y-3 mb-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span className="truncate">{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span className="truncate">{customer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span className="truncate">{customer.location}</span>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Orders</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">
                    {customer.orders}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Spent</p>
                  <p className="text-base sm:text-lg font-bold text-blue-600">
                    ${customer.totalSpent.toFixed(2)}
                  </p>
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
