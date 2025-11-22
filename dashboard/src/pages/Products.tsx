import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, Edit, Trash2, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
}

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const products: Product[] = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, stock: 45, status: 'In Stock', image: '🎧' },
    { id: 2, name: 'Smart Watch', category: 'Electronics', price: 199.99, stock: 12, status: 'Low Stock', image: '⌚' },
    { id: 3, name: 'Laptop Stand', category: 'Accessories', price: 49.99, stock: 0, status: 'Out of Stock', image: '💻' },
    { id: 4, name: 'USB-C Cable', category: 'Accessories', price: 19.99, stock: 156, status: 'In Stock', image: '🔌' },
    { id: 5, name: 'Mechanical Keyboard', category: 'Electronics', price: 149.99, stock: 34, status: 'In Stock', image: '⌨️' },
    { id: 6, name: 'Wireless Mouse', category: 'Electronics', price: 39.99, stock: 8, status: 'Low Stock', image: '🖱️' },
    { id: 7, name: 'Phone Case', category: 'Accessories', price: 24.99, stock: 89, status: 'In Stock', image: '📱' },
    { id: 8, name: 'Screen Protector', category: 'Accessories', price: 14.99, stock: 234, status: 'In Stock', image: '🛡️' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-emerald-100 text-emerald-700';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-700';
      case 'Out of Stock':
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
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">Manage your product inventory</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/30 w-fit">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200 overflow-hidden group"
          >
            {/* Product Image */}
            <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-6xl relative">
              {product.image}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50">
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>Stock: <span className="font-semibold">{product.stock}</span></span>
                <span>ID: #{product.id}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex items-center justify-center px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-12 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Products;
