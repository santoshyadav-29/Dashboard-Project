import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
}

interface ProductsState {
  items: Product[];
  searchQuery: string;
  selectedCategory: string;
}

const initialState: ProductsState = {
  items: [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, stock: 45, status: 'In Stock', image: '🎧' },
    { id: 2, name: 'Smart Watch', category: 'Electronics', price: 199.99, stock: 12, status: 'Low Stock', image: '⌚' },
    { id: 3, name: 'Laptop Stand', category: 'Accessories', price: 49.99, stock: 0, status: 'Out of Stock', image: '💻' },
    { id: 4, name: 'USB-C Cable', category: 'Accessories', price: 19.99, stock: 156, status: 'In Stock', image: '🔌' },
    { id: 5, name: 'Mechanical Keyboard', category: 'Electronics', price: 149.99, stock: 34, status: 'In Stock', image: '⌨️' },
    { id: 6, name: 'Wireless Mouse', category: 'Electronics', price: 39.99, stock: 8, status: 'Low Stock', image: '🖱️' },
    { id: 7, name: 'Phone Case', category: 'Accessories', price: 24.99, stock: 89, status: 'In Stock', image: '📱' },
    { id: 8, name: 'Screen Protector', category: 'Accessories', price: 14.99, stock: 234, status: 'In Stock', image: '🛡️' },
  ],
  searchQuery: '',
  selectedCategory: 'All',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const index = state.items.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
  },
});

export const { setSearchQuery, setSelectedCategory, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
