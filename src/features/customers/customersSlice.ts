import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  orders: number;
  totalSpent: number;
  status: 'Active' | 'Inactive';
}

interface CustomersState {
  items: Customer[];
  searchQuery: string;
}

const initialState: CustomersState = {
  items: [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8900', location: 'New York, USA', orders: 12, totalSpent: 1234.50, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8901', location: 'Los Angeles, USA', orders: 8, totalSpent: 856.00, status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 8902', location: 'Chicago, USA', orders: 5, totalSpent: 445.00, status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', phone: '+1 234 567 8903', location: 'Houston, USA', orders: 15, totalSpent: 2145.00, status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', phone: '+1 234 567 8904', location: 'Phoenix, USA', orders: 3, totalSpent: 267.00, status: 'Active' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', phone: '+1 234 567 8905', location: 'Philadelphia, USA', orders: 20, totalSpent: 3456.00, status: 'Active' },
  ],
  searchQuery: '',
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    addCustomer(state, action: PayloadAction<Customer>) {
      state.items.push(action.payload);
    },
    updateCustomer(state, action: PayloadAction<Customer>) {
      const index = state.items.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    toggleCustomerStatus(state, action: PayloadAction<number>) {
      const customer = state.items.find(c => c.id === action.payload);
      if (customer) {
        customer.status = customer.status === 'Active' ? 'Inactive' : 'Active';
      }
    },
  },
});

export const { setSearchQuery, addCustomer, updateCustomer, toggleCustomerStatus } = customersSlice.actions;
export default customersSlice.reducer;
