import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'lapiscart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: state => {
      state.items = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
