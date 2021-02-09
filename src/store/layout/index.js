import Types from './types';

const INITIAL_STATE = {
    message: {
        show: false,
        color: 'success'
    }
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SHOW_MESSAGE:
            return {
                ...state,
                message: {
                    show: true,
                    text: action.text,
                    color: action.color
                }
            }
        case Types.HIDE_MESSAGE:
            return {
                ...state,
                message: {
                    show: false,
                }
            }
        default:
            return state
    }
}