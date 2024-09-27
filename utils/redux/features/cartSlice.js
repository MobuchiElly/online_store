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
      const itemToRemove = state.items.find(item => item._id === action.payload.id);
      
      if(itemToRemove){
        state.quantity -= 1;
        state.total -= itemToRemove.price * itemToRemove.quantity;

        state.items = state.items.filter(item => item._id !== action.payload.id)
      }

      state.items = state.items.filter(item => item._id !== action.payload.id);
      if (state.items.length === 0) {
        state.quantity = 0;
        state.total = 0;
      }
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
