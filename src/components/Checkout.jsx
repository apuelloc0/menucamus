import React, { useContext, useState } from 'react';
import "../cssfolder/Checkout.css";
import { CartContext } from '../Context/CartContext';
import flechaiz from "../icons/flechaiz.svg";
import Formulario from './Formulario';
import PSEPayment from './PSEPayment';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const subtotal = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [shippingMethod, setShippingMethod] = useState('local');
    const shippingCost = 3;

    const handleShippingChange = (method) => {
        setShippingMethod(method);
    };

    const calculateTotal = () => {
        if (shippingMethod === 'domicilio') {
            return subtotal + shippingCost;
        }
        return subtotal;
    };

    const handleBackClick = () => {
        setSelectedOption(null);
    };

    return (
        <div className='Checkout'>
            {!selectedOption && (
                <div className="Checkout-selection">
                    {/* <button onClick={() => setSelectedOption('pse')}>Métodos de Pago</button> */}
                    <button onClick={() => setSelectedOption('whatsapp')}>Finalizar Pedido</button>
                </div>
            )}

            {selectedOption && (

                <div className="Checkout-info">
                    <button className="back-button" onClick={handleBackClick}>
                        <img src={flechaiz} alt="" />
                    </button>

                    {selectedOption === 'whatsapp' && <Formulario />}
                    {selectedOption === 'pse' && <PSEPayment total={calculateTotal} />}

                    <div className="Checkout-products">
                        <div className="Checkout-list">
                            <div className='Checkout-title'>
                                <h2 className='title'>Resumen de Pedido</h2>
                            </div>
                        </div>

                        <div className='productsCheckout'>
                            {cartItems.length === 0 ? (<p>Tu carrito esta vacío.</p>) : (cartItems.map((item, i) => (
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
                            )))}
                        </div>
                        <div className="Checkout-total">
                            <div>
                                <p className='total'>Subtotal</p>
                                <p className='total'>$ {subtotal}</p>
                            </div>
                            <div>
                                <div className="envio-p">
                                    <p className='envio'>Entrega</p>
                                </div>
                                <div className="envio-option">
                                    <div className='input-1'>
                                        <input
                                            type="radio"
                                            id="local"
                                            name="shipping"
                                            value="local"
                                            checked={shippingMethod === 'local'}
                                            onChange={() => handleShippingChange('local')}
                                        />
                                        <label htmlFor="local">Recoger en tienda</label>
                                    </div>
                                    <div className='input-2'>
                                        <input
                                            type="radio"
                                            id="domicilio"
                                            name="shipping"
                                            value="domicilio"
                                            checked={shippingMethod === 'domicilio'}
                                            onChange={() => handleShippingChange('domicilio')}
                                        />
                                        <label htmlFor="domicilio">Domicilio <span>$3</span></label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className='total'>Total</p>
                                <p className='total'>USD $ {calculateTotal()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;









































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
