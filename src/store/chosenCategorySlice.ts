import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

export const chosenCategorySlice = createSlice({
  name: "chosenCategory",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory } = chosenCategorySlice.actions;
