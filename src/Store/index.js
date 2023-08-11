import { configureStore } from "@reduxjs/toolkit";
import MovieBooking from "../MovieBooking/MovieBooking";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer : rootReducer,
    devTools : true,
})