import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideMessage } from '../../store/layout';

import './styles.css';

export default function Message() {

    const dispatch = useDispatch();
    const message = useSelector(state => state.layout.message);

    const title = {
        success: "Sucesso",
        primary: "Aviso",
        danger: "Erro",
        warning: "Alerta"
    };

    const handleClose = () => {
        dispatch(hideMessage());
    }

    return (
        <>
            {message.show && (
                <div className="toast toastCustom" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <span className={`badge badge-${message.color} mr-2`}> </span>
                        <strong className="mr-auto">{title[message.color]}</strong>
                        <button type="button" className="close" data-dismiss="toast" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        {message.text}
                    </div>
                </div>
            )}
        </>
    );
}
