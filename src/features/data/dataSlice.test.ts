import { describe, it, expect } from 'vitest';
import dataReducer, { setSearchQuery, setCurrentPage } from './dataSlice';

describe('dataSlice', () => {
  const initialState = {
    items: [],
    status: 'idle' as const,
    error: null,
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 10,
  };

  it('should handle initial state', () => {
    expect(dataReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setSearchQuery', () => {
    const actual = dataReducer(initialState, setSearchQuery('test'));
    expect(actual.searchQuery).toEqual('test');
    expect(actual.currentPage).toEqual(1); // Should reset page
  });

  it('should handle setCurrentPage', () => {
    const actual = dataReducer(initialState, setCurrentPage(2));
    expect(actual.currentPage).toEqual(2);
  });
});
