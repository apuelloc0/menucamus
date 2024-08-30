import React from 'react';
import "../cssfolder/ButtonCategories.css";

const ButtonCategories = ({ setFilter }) => {
    return (
        <div className="shirts-section1">
            <div className="Button-category">
                <button onClick={() => setFilter('')}>Mostrar Todos</button> {/* Botón para mostrar todos */}
                <button onClick={() => setFilter('Cerveza')}>Cervezas</button>
                <button onClick={() => setFilter('Ron')}>Ron</button>
                <button onClick={() => setFilter('Aguardiente')}>Aguardiente</button>
            </div>
        </div>
    );
}

export default ButtonCategories;
