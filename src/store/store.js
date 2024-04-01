import { configureStore } from "@reduxjs/toolkit";

//importing reducer function
import counterReducer from "./counterSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    
    modal: modalReducer,
  },
});
