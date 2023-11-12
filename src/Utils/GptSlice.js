import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        showGptSearch: false,
        MovieResults: null,
        MovieNames: null
    },
    reducers: {
        toggleGpt: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        AddGptSearchResults: (state, action) => {
            const {MovieNames, MovieResults} = action.payload;
            state.MovieNames = MovieNames;
            state.MovieResults = MovieResults;
        }
    }
});

export const {toggleGpt, AddGptSearchResults} = GptSlice.actions;
export default GptSlice.reducer; 