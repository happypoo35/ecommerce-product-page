import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    id: 1,
    name: "fall limited edition sneakers",
    brand: "sneaker company",
    text: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    price: 250,
    discount: 0.5,
    images: [
      {
        id: 1,
        img: require("images/image-product-1.jpg"),
        thumb: require("images/image-product-1-thumbnail.jpg"),
      },
      {
        id: 2,
        img: require("images/image-product-2.jpg"),
        thumb: require("images/image-product-2-thumbnail.jpg"),
      },
      {
        id: 3,
        img: require("images/image-product-3.jpg"),
        thumb: require("images/image-product-3-thumbnail.jpg"),
      },
      {
        id: 4,
        img: require("images/image-product-4.jpg"),
        thumb: require("images/image-product-4-thumbnail.jpg"),
      },
    ],
  },
  cart: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      if (!state.cart) {
        state.cart = payload;
      } else {
        state.cart.amount = state.cart.amount + payload.amount;
      }
    },
    clear: (state) => {
      state.cart = null;
    },
  },
});

export const selectProduct = (state) => state.shop.product;
export const selectCart = (state) => state.shop.cart;

export const { add, clear } = shopSlice.actions;

export default shopSlice.reducer;
