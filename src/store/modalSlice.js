import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",

  initialState: {
    value: false,
  },
  
  reducers: {
    show: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    },
  },
});

export const { show, hide } = modalSlice.actions;

export default modalSlice.reducer;
