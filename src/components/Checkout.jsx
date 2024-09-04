import React, { useContext, useState } from 'react'
import axios from 'axios';
import "../cssfolder/Checkout.css";
import { CartContext } from '../Context/CartContext'
import Formulario from './Formulario';

const Checkout = () => {

    const { cartItems } = useContext(CartContext)
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0)


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
        <div className='Checkout'>

            {/* <div className="banner-Checkout"></div> */}

            <div className="Checkout-info">

                <Formulario />

            </div>

            <div className="Checkout-products">
                <div className='productsCheckout'>
                    {cartItems.map((item, i) => (
                        <div key={i} className='cartItem-Checkout'>

                            <div className='Checkout-items'>
                                <div className='Checkout-items-left'>
                                    <img src={item.img} alt={item.name} />
                                    <p>{item.name}</p>
                                </div>

                                <div className='Checkout-items-right'>
                                    <div className='right-container'>
                                        {item.amount}
                                        <p>${item.amount * item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="Checkout-total">
                    <div>
                        <p className='total'>Subtotal</p>
                        <p className='total'>${total}</p>
                    </div>
                    <div>
                        <p className='total'>Total</p>
                        <p className='total'>USD ${total}</p>
                    </div>
                </div>
            </div>

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

export default Checkout




// Ejemplo en React
// import React, { useState } from 'react';
// import axios from 'axios';

// const Checkout = () => {
//     const [loading, setLoading] = useState(false);

//     const iniciarPago = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post('/iniciar-pago', {
//                 monto: 10000, // Monto del pago
//                 descripcion: 'Compra en mi tienda',
//                 cliente: { name: 'Juan Pérez', email: 'juan.perez@example.com' }
//             });
//             // Redirige al usuario a la URL proporcionada por PSE
//             window.location.href = response.data.payment_url;
//         } catch (error) {
//             console.error('Error iniciando el pago:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h1>Checkout</h1>
//             {/* Otros elementos del checkout */}
//             <button onClick={iniciarPago} disabled={loading}>
//                 {loading ? 'Procesando...' : 'Pagar con PSE'}
//             </button>
//         </div>
//     );
// };

// export default Checkout;
