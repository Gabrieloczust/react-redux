import Creators from '../../../store/cars/actions';
import Types from '../../../store/cars/types';

describe('Cars Actions', () => {
    describe('Actions Types', () => {
        test('should return the action type equal ADD_CAR', () => {
            expect(Types.ADD_CAR).toEqual('ADD_CAR');
        });
    });

    describe('Actions Creators', () => {
        test('should return the action creator equal addCar { type: ADD_CAR }', () => {
            expect(Creators.addCar()).toEqual({ type: Types.ADD_CAR })
        });
    });
});