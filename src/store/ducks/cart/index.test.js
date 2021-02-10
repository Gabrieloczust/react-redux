import reducer, { addItem, removeItem } from './index';

describe('Cart Reducer', () => {
    test('should check initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            cart: []
        });
    });

    describe('addItem', () => {
        test('should check if a new product has been added to the cart', () => {
            expect(reducer({
                cart: [
                    { name: 'Yellow Car' },
                ]
            }, {
                type: addItem.type,
                payload: { name: 'Red Car' }
            })).toEqual({
                cart: [
                    { name: 'Yellow Car' },
                    { name: 'Red Car' }
                ]
            });
        });
    });

    describe('removeItem', () => {
        test('should check if a product has been removed to the cart', () => {
            expect(reducer({
                cart: [
                    {
                        id: 1,
                        name: 'Yellow Car'
                    },
                    {
                        id: 2,
                        name: 'Red Car'
                    },
                ]
            }, {
                type: removeItem.type,
                payload: 2
            })).toEqual({
                cart: [
                    {
                        id: 1,
                        name: 'Yellow Car'
                    }
                ]
            });
        });
    });
});