import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieReducer from "./MoviesSlice";

const appStore = configureStore({
    reducer: {
        user: UserSlice,
        movies: movieReducer,
    }
});

export default appStore;