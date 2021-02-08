const INITIAL_STATE = {
    message: {
        show: false,
        color: 'success'
    }
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SHOW_MESSAGE':
            return {
                ...state,
                message: {
                    show: true,
                    text: action.text,
                    color: action.color
                }
            }
        case 'HIDE_MESSAGE':
            return {
                ...state,
                message: {
                    show: false,
                    text: '',
                }
            }
        default:
            return state
    }
}