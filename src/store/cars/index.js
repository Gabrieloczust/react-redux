import Types from './types';

const INITIAL_STATE = [
    {
        name: 'Ferrari',
        url: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
];

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_CAR:
            return [
                ...state,
                action.car
            ];
        default:
            return state;
    }
}