import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [
    {
        name: 'Ferrari',
        url: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
];

export const addCar = createAction('ADD_CAR');

export default createReducer(INITIAL_STATE, {
    [addCar.type]: (state, action) => ([
        ...state,
        action.payload.car
    ])
});