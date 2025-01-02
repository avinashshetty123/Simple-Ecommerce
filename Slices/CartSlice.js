import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addtocart: (state, action) => {
      const { productId, Product } = action.payload;
      if (state.items[productId]) {
        state.items[productId].count += 1;
      } else {
        state.items[productId] = { count: 1, Product };
      }
    },
    removefromcart: (state, action) => {
      const { productId } = action.payload;
      if (state.items[productId]) {
        if (state.items[productId].count === 1) {
          delete state.items[productId];
        } else {
          state.items[productId].count -= 1;
        }
      }
    },
    addmutipletocart: (state, action) => {
      const { productId, Product, quantity } = action.payload;
      if (state.items[productId]) {
        state.items[productId].count += quantity;
      } else {
        state.items[productId] = { count: quantity, Product };
      }
    },
    removeallfromcart: (state, action) => {
      const { productId } = action.payload;
      if (state.items[productId]) {
        delete state.items[productId];
      }
    },
  },
});

export const {
  addtocart,
  removefromcart,
  removeallfromcart,
  addmutipletocart,
} = cartSlice.actions;
export default cartSlice.reducer;
