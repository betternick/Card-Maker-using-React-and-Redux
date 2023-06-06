import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  items: data,
};

export const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = [...state.items, action.payload];
    },
    removeItem(state, action) {
      state.items = state.items.filter((el) => el.name !== action.payload);
    },
    removeAllItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeAllItems } = itemSlice.actions;

export default itemSlice.reducer;
