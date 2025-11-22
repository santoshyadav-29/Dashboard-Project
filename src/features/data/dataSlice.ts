import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface DataState {
  items: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: DataState = {
  items: [],
  status: 'idle',
  error: null,
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 10,
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return (await response.json()) as Post[];
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Reset to first page on search
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { setSearchQuery, setCurrentPage } = dataSlice.actions;
export default dataSlice.reducer;
