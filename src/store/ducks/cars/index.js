import { createAction, createReducer } from '@reduxjs/toolkit';

export const addCar = createAction('ADD_CAR');
export const addCars = createAction('ADD_CARS');
export const hasError = createAction('ERROR_CARS');
export const startLoad = createAction('LOAD_CARS');
export const startUpdate = createAction('UPDATE_CARS');

export default createReducer({
    cars: [],
    isLoading: false,
    isUpdating: false,
    error: false,
}, {
    [addCar.type]: (state, action) => ({
        ...state,
        isUpdating: false,
        cars: [
            ...state.cars,
            action.payload
        ]
    }),
    [addCars.type]: (state, action) => ({
        ...state,
        isLoading: false,
        cars: [...action.payload]
    }),
    [hasError.type]: (state, action) => {
        console.error(action.payload);

        return {
            ...state,
            isLoading: false,
            isUpdating: false,
            error: action.payload
        }
    },
    [startLoad.type]: state => ({
        ...state,
        isLoading: true
    }),
    [startUpdate.type]: state => ({
        ...state,
        isUpdating: true
    }),
});