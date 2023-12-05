import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CountriesSlice from "./CountriesSlice/CountriesSlice";

const rootReducer = combineReducers({
    countries: CountriesSlice
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type addDispatch = typeof store.dispatch

export default store

