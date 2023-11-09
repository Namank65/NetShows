import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "Gpt",
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleGpt: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const {toggleGpt} = GptSlice.actions;
export default GptSlice.reducer; 