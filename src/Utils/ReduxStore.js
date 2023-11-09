import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieReducer from "./MoviesSlice";
import gptReducer from "../Utils/GptSlice"

const appStore = configureStore({
    reducer: {
        user: UserSlice,
        movies: movieReducer,
        Gpt: gptReducer
    }
});

export default appStore;