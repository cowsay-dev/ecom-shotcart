import { createSlice } from "@reduxjs/toolkit";
import { CartInterface, CartProdInterface } from "../interfaces";

const cartDummyData: CartInterface = {
  total: 0,
  product: [],
  discountedTotal: 0,
  totalProducts: 0,
  actualPrice: 0,
};
const initialState = { value: { data: cartDummyData } };

export const cartDataSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.data = action.payload;
    },

    removeFromCart: (state, action) => {
      const product: CartProdInterface = action.payload;
      const newArr = state.value.data.product.filter(
        (val: CartProdInterface) => {
          return val.id !== product.id;
        }
      );
      state.value.data.total -= product.price * product.quantity;
      state.value.data.actualPrice -= product.actualPrice * product.quantity;
      state.value.data.product = newArr;
      state.value.data.discountedTotal -=
        (product.actualPrice - product.price) * product.quantity;
      state.value.data.totalProducts = newArr.length;
    },

    updateCart: (state, action) => {
      const prod: CartProdInterface = action.payload.product;
      const product = { ...prod };
      const qty: number = action.payload.qty;
      product.quantity = qty;
      state.value.data.total += product.price * product.quantity;
      state.value.data.actualPrice += product.actualPrice * product.quantity;
      state.value.data.product = [...state.value.data.product, product];
      state.value.data.discountedTotal +=
        (product.actualPrice - product.price) * product.quantity;
      state.value.data.totalProducts = state.value.data.product.length;
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartDataSlice.actions;
