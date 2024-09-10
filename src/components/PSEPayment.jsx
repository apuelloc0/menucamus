import React, { useState } from 'react'
import "../cssfolder/PSEPayment.css";

const PSEcom = () => {


    // PSE------------------
    const [loading, setLoading] = useState(false);

    const iniciarPago = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/iniciar-pago', {
                monto: 10000, // Monto del pago
                descripcion: 'Compra en mi tienda',
                cliente: { name: 'Juan Pérez', email: 'juan.perez@example.com' }
            });
            // Redirige al usuario a la URL proporcionada por PSE
            window.location.href = response.data.payment_url;
        } catch (error) {
            console.error('Error iniciando el pago:', error);
        } finally {
            setLoading(false);
        }
    };
    // PSE------------------

    return (
        <div>
            <div>
                <h1>Checkout</h1>
                {/* Otros elementos del checkout */}
                <button onClick={iniciarPago} disabled={loading}>
                    {loading ? 'Procesando...' : 'Pagar con PSE'}
                </button>
            </div>
        </div>
    )
}

export default PSEcom
