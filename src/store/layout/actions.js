export const showMessage = (text, color = null) => {
    const availableColors = ['success', 'primary', 'danger', 'warning'];
    const availableColor = availableColors.includes(color) ? color : 'success';

    return {
        type: 'SHOW_MESSAGE',
        text: text,
        color: availableColor
    }
}

export const hideMessage = () => {
    return {
        type: 'HIDE_MESSAGE',
    }
}