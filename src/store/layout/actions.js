import Types from './types';

function checkColors(color) {
    const availableColors = ['success', 'primary', 'danger', 'warning'];
    return availableColors.includes(color) ? color : 'success';
}

const Creators = {
    showMessage: (text, color = null) => ({
        type: Types.SHOW_MESSAGE,
        text: text,
        color: checkColors(color)
    }),
    hideMessage: () => ({
        type: Types.HIDE_MESSAGE,
    })
}

export default Creators;