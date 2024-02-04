import { configureStore } from "@reduxjs/toolkit"  // imported from core redux library
import cartSlice from "./cartSlice";

const store = configureStore({   //store will containing the slices
    reducer: {
        cart : cartSlice,
    },
});

export default store;