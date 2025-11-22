import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';
import productsReducer from '../features/products/productsSlice';
import ordersReducer from '../features/orders/ordersSlice';
import customersReducer from '../features/customers/customersSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    products: productsReducer,
    orders: ordersReducer,
    customers: customersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
