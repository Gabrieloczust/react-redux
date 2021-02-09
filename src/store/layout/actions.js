import Types from './types';

const Creators = {
    showMessage: (text, color = null) => {
        const availableColors = ['success', 'primary', 'danger', 'warning'];
        const availableColor = availableColors.includes(color) ? color : 'success';

        return {
            type: Types.SHOW_MESSAGE,
            text: text,
            color: availableColor
        }
    },
    hideMessage: () => ({
        type: Types.HIDE_MESSAGE,
    })
}

export default Creators;