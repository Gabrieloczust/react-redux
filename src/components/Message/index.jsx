import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css';

export default function Message() {

    const message = useSelector(state => state.layout.message);

    const title = {
        success: "Sucesso",
        primary: "Aviso",
        danger: "Erro",
        warning: "Alerta",
    };

    return (
        <>
            {message.show && (
                <div className="toast toastCustom" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <span className={`badge badge-${message.color} mr-2`}> </span>
                        <strong className="mr-auto">{title[message.color]}</strong>
                    </div>
                    <div className="toast-body">
                        {message.text}
                    </div>
                </div>
            )}
        </>
    );
}
