import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        userSlice
    }
});

export default store;
