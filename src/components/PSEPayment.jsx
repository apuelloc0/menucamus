import React, { useState } from 'react';
import axios from 'axios';
import '../cssfolder/PSEPayment.css';

const PSEPayment = ({ total }) => {
    const [bank, setBank] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [customer, setCustomer] = useState({ name: '', id: '' });
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/iniciar-pago', {
                monto: total, // Usar el monto total pasado como prop
                descripcion: description,
                cliente: {
                    name: customer.name,
                    id: customer.id,
                    email: email,
                    bank: bank
                }
            });
            window.open(response.data.paymentUrl, '_blank');
        } catch (error) {
            console.error('Error processing payment:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="PSEPayment">
            <h2>Pagar con PSE</h2>
            <div>
                <label>Banco:</label>
                <select value={bank} onChange={(e) => setBank(e.target.value)}>
                    <option value="">Selecciona tu banco</option>
                    <option value="banco1">Banco 1</option>
                    <option value="banco2">Banco 2</option>
                    {/* Agrega más opciones de bancos aquí */}
                </select>
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Nombre del Cliente:</label>
                <input
                    type="text"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>ID del Cliente:</label>
                <input
                    type="text"
                    value={customer.id}
                    onChange={(e) => setCustomer({ ...customer, id: e.target.value })}
                    required
                />
            </div>
            <div>
                <label>Monto:</label>
                <input
                    type="number"
                    value={total()}
                    readOnly
                />
            </div>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? 'Procesando...' : `Pedir ( US$${total()} )`}
            </button>
        </div>
    );
};

export default PSEPayment;







