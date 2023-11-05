import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        addTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.addTrailer = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;