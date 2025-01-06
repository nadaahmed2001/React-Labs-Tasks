import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: [], // movies in the watchlist
  };
  const watchlistReducer = createSlice({ //watchlist slice means the slice that contains the watchlist
    name: "watchlist",
    initialState,
    reducers: {
      addToWatchlist: (state, action) => { //state is the current state of the slice (current watchlist), action is the payload that is dispatched

        const exists = state.movies.find((movie) => movie.id === action.payload.id);
        if (!exists) {
          state.movies.push(action.payload);
        }
      },
      removeFromWatchlist: (state, action) => {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
      },
    },
  });
  
  // Export the actions
  export const { addToWatchlist, removeFromWatchlist } = watchlistReducer.actions;
// Export the reducer
  export default watchlistReducer.reducer;