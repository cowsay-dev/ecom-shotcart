import { createSlice } from "@reduxjs/toolkit";
import { ProductInterface } from "../interfaces";

const dummyVal: ProductInterface[] = [
  {
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: ["", ""],
  },
];

const initialState = { value: { data: dummyVal } };

export const productsDataSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.value.data = action.payload;
    },
  },
});

export const { getData } = productsDataSlice.actions;
export default productsDataSlice.reducer;
