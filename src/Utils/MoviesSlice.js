import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        addTopRatedMovies: null,
        addPopularMovies: null,
        addTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.addTopRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.addPopularMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.addTrailer = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailer, addTopRatedMovies, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;