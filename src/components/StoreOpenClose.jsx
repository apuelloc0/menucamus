import React, { useState, useEffect } from 'react';
import "../cssfolder/StoreOpenClose.css"
import reloj from '../icons/reloj.svg';

const StoreOpenClose = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkStoreStatus = () => {
            const currentHour = new Date().getHours();
            const openHour = 9; // Hora de apertura
            const closeHour = 18; // Hora de cierre

            if (currentHour >= openHour && currentHour < closeHour) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkStoreStatus();
        const interval = setInterval(checkStoreStatus, 60000); // Verifica cada minuto

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`store-status ${isOpen ? 'open' : 'closed'}`}>
            <span>{isOpen ? 'Abierto' : 'Cerrado'}             <img className="reloj-icon" src={reloj} alt="reloj" />
            </span>
            {!isOpen && <small>Pedir para luego</small>}
        </div>
    );
};

export default StoreOpenClose;
