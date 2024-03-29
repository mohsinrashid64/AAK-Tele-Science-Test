import {configureStore} from "@reduxjs/toolkit";
import populationReducer from './slice/population'

export const store = configureStore({
    reducer: {
        population : populationReducer,
    }
});

