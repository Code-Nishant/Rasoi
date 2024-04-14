import { configureStore } from "@reduxjs/toolkit";

//importing reducer function
import counterReducer from "./counterSlice";
import modalReducer from "./modalSlice";
import idReducer from "./idSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    
    modal: modalReducer,

    id: idReducer,
  },
});
