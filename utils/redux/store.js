// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn('Could not load state', e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (e) {
    console.warn('Could not save state', e);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;

