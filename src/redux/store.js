import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
