import React from 'react';
import { useSelector } from 'react-redux';

export default function Message() {

    const message = useSelector(state => state.layout.message);

    return (
        <>
            {message.show && (
                <div className="container">
                    <div className={`alert alert-${message.color} mt-3 mb-0`} role="alert">
                        {message.text}
                    </div>
                </div>
            )}
        </>
    );
}
