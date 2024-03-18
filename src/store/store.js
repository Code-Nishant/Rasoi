import { configureStore } from '@reduxjs/toolkit'

//importing reducer function
import counterReducer from "./counterSlice"

export default configureStore({
  reducer: {
    counter: counterReducer
  },
})