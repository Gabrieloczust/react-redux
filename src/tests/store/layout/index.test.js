import reducer, { hideMessage, showMessage } from '../../../store/layout';

describe('Layout Reducer', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            message: {
                show: false,
                text: '',
                color: 'success'
            }
        });
    });

    test('should return the state with the props equal message{ show: true }', () => {
        expect(reducer({ message: { show: false } }, {
            type: showMessage.type,
            payload: {
                text: 'text test',
                color: 'primary',
            }
        })).toEqual({
            message: {
                show: true,
                text: 'text test',
                color: 'primary'
            }
        });
    });

    test('should return the state with the props equal message{ show: false }', () => {
        expect(reducer({ message: { show: true } }, { type: hideMessage.type })).toEqual({
            message: {
                show: false
            }
        });
    });
});

describe('Layout Actions', () => {
    describe('Actions Types', () => {
        test('should return the action type equal SHOW_MESSAGE', () => {
            expect(showMessage.type).toEqual('SHOW_MESSAGE');
        });

        test('should return the action type equal HIDE_MESSAGE', () => {
            expect(hideMessage.type).toEqual('HIDE_MESSAGE');
        });
    });

    describe('Actions Creators', () => {
        test('should return the action creator equal showMessage { type: SHOW_MESSAGE }', () => {
            expect(showMessage({ text: 'text test' })).toEqual({
                payload: {
                    text: 'text test',
                },
                type: 'SHOW_MESSAGE'
            });
        });

        test('should return the action creator equal hideMessage { type: HIDE_MESSAGE }', () => {
            expect(hideMessage()).toEqual({ type: 'HIDE_MESSAGE' });
        });
    });
});