import React from 'react';

export default function ErrorAlert({ error }) {
    return (
        <div className="container">
            <div className="alert alert-danger w-100 my-3">
                Infelizmente ocorreu um erro!
                <br />
                <small>Erro: {error}</small>
            </div>
        </div>
    );
};
