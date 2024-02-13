import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modelings: [],
    modeling: {name : ""},
};

export const modelingSlice = createSlice({
    name: 'modeling',
    initialState,
    reducers: {
        setModelings: (state, { payload }) => {
            state.modelings = payload.modelings;
        },
        setModeling: (state, { payload }) => {
            console.log(payload)
            state.modeling = payload;
        },
        resetModeling: (state) => {
            state.modeling = {};
        },
    },
});

export const modelingReducer = modelingSlice.reducer;

export const { setModelings, setModeling, resetModeling } = modelingSlice.actions;
