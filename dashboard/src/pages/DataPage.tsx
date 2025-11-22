import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchData, setSearchQuery, setCurrentPage } from '../features/data/dataSlice';
import { Search, ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';

const DataPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, error, searchQuery, currentPage, itemsPerPage } = useAppSelector((state) => state.data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  // Filter logic
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  if (status === 'failed') {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-red-500">
        <AlertCircle className="w-12 h-12 mb-4" />
        <h2 className="text-xl font-bold">Error Loading Data</h2>
        <p>{error}</p>
        <button 
          onClick={() => dispatch(fetchData())}
          className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Data Management</h1>
          <p className="text-slate-500 mt-1">Manage and view system posts.</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64 transition-all"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {status === 'loading' ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-slate-700 w-20">ID</th>
                    <th className="px-6 py-4 font-semibold text-slate-700">Title</th>
                    <th className="px-6 py-4 font-semibold text-slate-700">Content</th>
                    <th className="px-6 py-4 font-semibold text-slate-700 w-24">User ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedItems.length > 0 ? (
                    paginatedItems.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-slate-500">#{item.id}</td>
                        <td className="px-6 py-4 font-medium text-slate-900 max-w-xs truncate" title={item.title}>
                          {item.title}
                        </td>
                        <td className="px-6 py-4 text-slate-600 max-w-md truncate" title={item.body}>
                          {item.body}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium">
                            User {item.userId}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                        No results found matching "{searchQuery}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
              <span className="text-sm text-slate-500">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredItems.length)} of {filteredItems.length} entries
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    // Simple pagination logic to show closest pages
                    let pageNum = i + 1;
                    if (totalPages > 5) {
                      if (currentPage > 3) {
                        pageNum = currentPage - 2 + i;
                      }
                      if (pageNum > totalPages) {
                        pageNum = totalPages - (4 - i);
                      }
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={clsx(
                          'w-8 h-8 rounded-lg text-sm font-medium transition-all',
                          currentPage === pageNum
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                            : 'text-slate-600 hover:bg-white hover:border hover:border-slate-200'
                        )}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DataPage;
