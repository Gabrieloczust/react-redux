import api from '../../../services/api';
import { startLoad, startUpdate, hasError, addCar, addCars } from './index';

export const getAllCars = () => dispatch => {
    dispatch(startLoad());

    api
        .get('/cars')
        .then(response => dispatch(addCars(response.data)))
        .catch(error => dispatch(hasError(error)));
};

export const addCarFetch = car => dispatch => {
    dispatch(startUpdate());

    api
        .post('/cars', car)
        .then(response => dispatch(addCar(response.data)))
        .catch(error => dispatch(hasError(error)));
};