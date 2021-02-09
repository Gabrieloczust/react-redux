import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    message: {
        show: false,
        text: '',
        color: 'success'
    }
}

const checkColors = color => {
    const availableColors = ['success', 'primary', 'danger', 'warning'];
    return availableColors.includes(color) ? color : 'success';
}

export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

export default createReducer(INITIAL_STATE, {
    [showMessage.type]: (state, action) => ({
        ...state,
        message: {
            show: true,
            text: action.payload.text,
            color: checkColors(action.payload.color)
        }
    }),
    [hideMessage.type]: state => ({
        ...state,
        message: {
            show: false,
        }
    }),
});