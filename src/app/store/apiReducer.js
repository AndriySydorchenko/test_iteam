import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setLoadingStatus: (state, action) => ({ ...state, isLoading: action.payload }),
    }   
});

export const {
    setLoadingStatus,
} = apiSlice.actions;

