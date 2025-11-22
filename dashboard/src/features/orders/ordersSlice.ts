import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: number;
}

interface OrdersState {
  items: Order[];
  searchQuery: string;
  statusFilter: string;
}

const initialState: OrdersState = {
  items: [
    { id: '1234', customer: 'John Doe', date: '2025-11-22', total: 234.00, status: 'Delivered', items: 3 },
    { id: '1235', customer: 'Jane Smith', date: '2025-11-22', total: 156.00, status: 'Processing', items: 2 },
    { id: '1236', customer: 'Bob Johnson', date: '2025-11-21', total: 89.00, status: 'Pending', items: 1 },
    { id: '1237', customer: 'Alice Brown', date: '2025-11-21', total: 445.00, status: 'Shipped', items: 5 },
    { id: '1238', customer: 'Charlie Wilson', date: '2025-11-20', total: 267.00, status: 'Processing', items: 4 },
    { id: '1239', customer: 'Diana Prince', date: '2025-11-20', total: 123.00, status: 'Delivered', items: 2 },
    { id: '1240', customer: 'Ethan Hunt', date: '2025-11-19', total: 567.00, status: 'Cancelled', items: 6 },
    { id: '1241', customer: 'Fiona Green', date: '2025-11-19', total: 345.00, status: 'Shipped', items: 3 },
  ],
  searchQuery: '',
  statusFilter: 'All',
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<string>) {
      state.statusFilter = action.payload;
    },
    updateOrderStatus(state, action: PayloadAction<{ id: string; status: Order['status'] }>) {
      const order = state.items.find(o => o.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
      }
    },
    addOrder(state, action: PayloadAction<Order>) {
      state.items.unshift(action.payload);
    },
  },
});

export const { setSearchQuery, setStatusFilter, updateOrderStatus, addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
