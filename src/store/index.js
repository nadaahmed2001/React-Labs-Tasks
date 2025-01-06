import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./slices/watchlistReducer"; // Import the watchlist slice


const store = configureStore({
    reducer: {
      watchlist: watchlistReducer, // Register the watchlist slice
    },
  });
  
export default store;