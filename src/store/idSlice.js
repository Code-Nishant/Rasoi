import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: "id",
  
    initialState: {
      value: "",
    },
    
    reducers: {
      set: (state,payload) => {
        state.value = payload;
      },
      reset: (state) => {
        state.value = "";
      },
    },
  });
  
  export const { set, get } = idSlice.actions;
  
  export default idSlice.reducer;
  