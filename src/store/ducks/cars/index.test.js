import reducer, { addCar } from './index';

describe('Cars Reducer', () => {
    test('should check the initial state', () => {
        expect(reducer(undefined, {}).length).toBe(0);
    });

    test('should check if a new car has been added', () => {
        expect(reducer([], {
            type: addCar.type,
            payload: {
                name: 'Google Car',
                url: 'https://www.google.com/logo.png',
            }
        })).toEqual([
            {
                name: 'Google Car',
                url: 'https://www.google.com/logo.png'
            }
        ])
    });
});

describe('Cars Actions', () => {
    describe('Actions Types', () => {
        test('should return the action type equal ADD_CAR', () => {
            expect(addCar.type).toEqual('ADD_CAR');
        });
    });

    describe('Actions Creators', () => {
        test('should return the action creator equal addCar { type: ADD_CAR }', () => {
            expect(addCar()).toEqual({ type: 'ADD_CAR' })
        });
    });
});