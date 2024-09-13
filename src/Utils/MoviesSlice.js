import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addTopRatedMovies: null,
    addPopularMovies: null,
    addUpcomingMovies: null,
    addTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.addTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
