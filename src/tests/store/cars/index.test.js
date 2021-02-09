import reducer from '../../../store/cars';
import Types from '../../../store/cars/types';

describe('Cars Reducer', () => {
    test('should check the initial state', () => {
        expect(reducer(undefined, {}).length).toBe(1);
        expect(reducer(undefined, {})[0]).toHaveProperty('name', 'Ferrari');
        expect(reducer(undefined, {})[0]).toHaveProperty('url');
    });

    test('should check if a new car has been added', () => {
        expect(reducer([], {
            type: Types.ADD_CAR,
            car: {
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
