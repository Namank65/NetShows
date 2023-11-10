import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieReducer from "./MoviesSlice";
import gptReducer from "../Utils/GptSlice";
import LangReducer from "../Utils/Config";

const appStore = configureStore({
    reducer: {
        user: UserSlice,
        movies: movieReducer,
        Gpt: gptReducer,
        Config: LangReducer
    }
});

export default appStore;