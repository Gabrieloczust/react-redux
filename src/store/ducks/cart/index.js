import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        }
    }
});

export const { addItem, removeItem } = slice.actions;
export default slice.reducer;