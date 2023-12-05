import {IState } from "../types/types";
import {createSlice} from '@reduxjs/toolkit'
import { fetchByNameCountry, fetchCountriesAll, fetchCountryNeighbors, fetchDetailCountry, fetchFilterRegion } from "./ActionCreators/ActionCreators";


const initialState: IState = {
    countries: [],
    loading: 'idle',
    error: 'error',
}

const CountriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountriesAll.pending, (state) => {
                state.loading = 'loading'
                state.error = null
            })
            .addCase(fetchCountriesAll.fulfilled, (state, action) => {
                state.loading = 'finished'
                state.error = null
                state.countries = action.payload
            })
            .addCase(fetchCountriesAll.rejected, (state) => {
                state.loading = 'rejected'
                state.error = 'error'
            })
            .addCase(fetchByNameCountry.fulfilled, (state, action) => {
                state.loading = 'finished'
                state.countries = action.payload
            })
            .addCase(fetchFilterRegion.fulfilled, (state, action) => {
                state.countries = action.payload
            })
            .addCase(fetchDetailCountry.fulfilled, (state, action) => {
                state['detail'] = action.payload
            })
            .addCase(fetchCountryNeighbors.fulfilled, (state, action) => {
                state['detail'] = action.payload
            })

    }
})

export default CountriesSlice.reducer

