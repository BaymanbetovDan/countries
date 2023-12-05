import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { countries } from '../../../API'


export const fetchCountriesAll = createAsyncThunk(
    'countries/fetchCountriesAll',
    async (_, { rejectWithValue }) => {
        try {
            const res = await countries.getAllCountries()
            if (String(res.status)[0] !== '2') {
                throw new Error('error')
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchByNameCountry = createAsyncThunk(
    'countries/fetchByNameCountry',
    async (name: string, { rejectWithValue }) => {
        try {
            const res = await countries.getByNameCountry(name)
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchFilterRegion = createAsyncThunk(
    'countries/fetchFilterRegion',
    async (region: string, { rejectWithValue }) => {
        try {
            const res = await countries.getRegionCountry(region)
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const fetchDetailCountry = createAsyncThunk(
    'countries/fetchDetailCountry',
    async (name: string, { rejectWithValue }) => {
        try {
            const res = await countries.getByNameCountry(name)
            return res.data[0]
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchCountryNeighbors = createAsyncThunk(
    'countries/fetchCountryNeighbors',
    async (
        code: string, { rejectWithValue }
    ) => {
        try {
            const res = await countries.getCountryByCode(code)
            return res.data[0]
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)