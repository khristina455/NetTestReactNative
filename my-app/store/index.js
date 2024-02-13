import { configureStore } from '@reduxjs/toolkit';
import { modelingReducer } from './modelingSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
    reducer: {
        modeling: modelingReducer,
        filter: filterReducer,
    },
});
