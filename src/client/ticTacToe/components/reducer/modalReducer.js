import {createSlice} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalOpen: true
    },
    reducers: {
        toggleModal: (state) => ({...state, modalOpen: !state.modalOpen })
    }
});

export const {
    toggleModal
} = modalSlice.actions;