import api from '../../../services/api';
import { addCar, addCars } from './index';

export const getAllCars = () =>
    dispatch => {
        api
            .get('/cars')
            .then(response => dispatch(addCars(response.data)))
            .catch(console.log);
    }

export const addCarFetch = car =>
    dispatch => {
        api
            .post('/cars', car)
            .then(response => dispatch(addCar(response.data)))
            .catch(console.log);
    }