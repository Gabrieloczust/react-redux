import { configureStore } from '@reduxjs/toolkit';

import layoutReducer from './ducks/layout';
import carsReducer from './ducks/cars';
import cartReducer from './ducks/cart';

export default configureStore({
    reducer: {
        cars: carsReducer,
        layout: layoutReducer,
        cart: cartReducer,
    }
});