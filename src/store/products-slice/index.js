import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.filteredProducts = action.payload.products;
    },
    filterProducts: (state, action) => {
      state.filteredProducts = action.payload.products;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
