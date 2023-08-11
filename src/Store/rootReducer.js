import { combineReducers } from "redux";
import { MovieBookingReducer } from "./MovieBooking/slice";
export const rootReducer = combineReducers({
    movieBooking: MovieBookingReducer,
})