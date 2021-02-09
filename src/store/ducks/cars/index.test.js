import reducer, { addCar, addCars, hasError, startLoad, startUpdate } from './index';

describe('Cars Reducer', () => {
    test('should check the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            cars: [],
            isLoading: false,
            isUpdating: false,
            error: false
        });
    });

    test('should check if a new car has been added', () => {
        expect(reducer(undefined, {
            type: addCar.type,
            payload: {
                name: 'Google Car',
                url: 'https://www.google.com/logo.png',
            }
        })).toEqual({
            error: false,
            isLoading: false,
            isUpdating: false,
            cars: [
                {
                    name: 'Google Car',
                    url: 'https://www.google.com/logo.png'
                }
            ]
        });
    });

    test('should check if the cars have been added', () => {
        expect(reducer(undefined, {
            type: addCars.type,
            payload: [
                {
                    name: 'Google Car',
                    url: 'https://www.google.com/logo.png',
                },
                {
                    name: 'Google Car2',
                    url: 'https://www.google.com/logo2.png',
                }
            ]
        })).toEqual({
            error: false,
            isLoading: false,
            isUpdating: false,
            cars: [
                {
                    name: 'Google Car',
                    url: 'https://www.google.com/logo.png',
                },
                {
                    name: 'Google Car2',
                    url: 'https://www.google.com/logo2.png',
                }
            ]
        });
    });

    test('should check if an error has been defined', () => {
        expect(reducer(undefined, {
            type: hasError.type,
            payload: 'Error!'
        })).toEqual({
            cars: [],
            isLoading: false,
            isUpdating: false,
            error: 'Error!'
        });
    });

    test('should check if isLoading is true', () => {
        expect(reducer(undefined, {
            type: startLoad.type
        })).toEqual({
            cars: [],
            isUpdating: false,
            error: false,
            isLoading: true
        });
    });

    test('should check if isUpdating is true', () => {
        expect(reducer(undefined, {
            type: startUpdate.type
        })).toEqual({
            cars: [],
            error: false,
            isLoading: false,
            isUpdating: true
        });
    });
});

describe('Cars Actions', () => {
    describe('Actions Types', () => {
        test('should return the action type equal ADD_CAR', () => {
            expect(addCar.type).toEqual('ADD_CAR');
        });
        test('should return the action type equal ADD_CARS', () => {
            expect(addCars.type).toEqual('ADD_CARS');
        });
        test('should return the action type equal ERROR_CARS', () => {
            expect(hasError.type).toEqual('ERROR_CARS');
        });
        test('should return the action type equal LOAD_CARS', () => {
            expect(startLoad.type).toEqual('LOAD_CARS');
        });
        test('should return the action type equal UPDATE_CARS', () => {
            expect(startUpdate.type).toEqual('UPDATE_CARS');
        });
    });

    describe('Actions Creators', () => {
        test('should return the action creator equal addCar { type: ADD_CAR }', () => {
            expect(addCar()).toEqual({ type: 'ADD_CAR' })
        });
        test('should return the action creator equal addCars { type: ADD_CARS }', () => {
            expect(addCars()).toEqual({ type: 'ADD_CARS' })
        });
        test('should return the action creator equal hasError { type: ERROR_CARS }', () => {
            expect(hasError()).toEqual({ type: 'ERROR_CARS' })
        });
        test('should return the action creator equal startLoad { type: LOAD_CARS }', () => {
            expect(startLoad()).toEqual({ type: 'LOAD_CARS' })
        });
        test('should return the action creator equal startUpdate { type: UPDATE_CARS }', () => {
            expect(startUpdate()).toEqual({ type: 'UPDATE_CARS' })
        });
    });
});