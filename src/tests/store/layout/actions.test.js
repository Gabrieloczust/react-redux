import Creators from '../../../store/layout/actions';
import Types from '../../../store/layout/types';

describe('Layout Actions', () => {
    describe('Actions Types', () => {
        test('should return the action type equal SHOW_MESSAGE', () => {
            expect(Types.SHOW_MESSAGE).toEqual('SHOW_MESSAGE');
        });

        test('should return the action type equal HIDE_MESSAGE', () => {
            expect(Types.HIDE_MESSAGE).toEqual('HIDE_MESSAGE');
        });
    });

    describe('Actions Creators', () => {
        test('should return the action creator equal showMessage { type: SHOW_MESSAGE }', () => {
            expect(Creators.showMessage('test')).toEqual({
                color: 'success',
                text: 'test',
                type: Types.SHOW_MESSAGE,
            });
        });

        test('should return the action creator equal hideMessage { type: HIDE_MESSAGE }', () => {
            expect(Creators.hideMessage()).toEqual({ type: Types.HIDE_MESSAGE });
        });
    });
});