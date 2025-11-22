import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';
import Home from '../pages/Home';

describe('Home Component', () => {
  const store = configureStore({
    reducer: {
      data: dataReducer,
    },
  });

  it('renders dashboard overview heading', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    
    expect(screen.getByText('Dashboard Overview')).toBeDefined();
  });

  it('renders stat cards', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    
    expect(screen.getByText('Total Users')).toBeDefined();
    expect(screen.getByText('Total Posts')).toBeDefined();
    expect(screen.getByText('Revenue')).toBeDefined();
  });
});
