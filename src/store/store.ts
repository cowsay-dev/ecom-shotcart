import { configureStore } from "@reduxjs/toolkit";
import { cartDataSlice } from "./cartDataSlice";
import { chosenCategorySlice } from "./chosenCategorySlice";
import { productsDataSlice } from "./productsDataSlice";

export const store = configureStore({
  reducer: {
    productsData: productsDataSlice.reducer,
    chosenCategory: chosenCategorySlice.reducer,
    cartData: cartDataSlice.reducer,
  },
});
