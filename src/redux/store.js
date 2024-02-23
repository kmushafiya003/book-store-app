import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './slices/darkModeSlice'

export default configureStore({
    reducer : {
      mode : darkModeReducer,
    }
})