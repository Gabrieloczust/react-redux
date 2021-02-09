import reducer from '../../../store/layout';
import Types from '../../../store/layout/types';

describe('Layout Reducer', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            message: {
                show: false,
                color: 'success'
            }
        });
    });

    test('should return the state with the props equal message{ show: true }', () => {
        expect(reducer(undefined, { type: Types.SHOW_MESSAGE, text: 'test', color: 'success' })).toEqual({
            message: {
                show: true,
                text: 'test',
                color: 'success',
            }
        });
    });

    test('should return the state with the props equal message{ show: false }', () => {
        expect(reducer({ message: { show: true } }, { type: Types.HIDE_MESSAGE })).toEqual({
            message: {
                show: false
            }
        });
    });
});