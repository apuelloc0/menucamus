import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import "../cssfolder/Cart.css";
import close from "../icons/x.png";
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';

const Cart = ({ cartOpen, setCartOpen }) => {

    const { cartItems } = useContext(CartContext);
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

    const [selectedOption, setSelectedOption] = useState(null);
    const [shippingMethod, setShippingMethod] = useState('local');
    const shippingCost = 3;

    const toggleCart = () => {
        setCartOpen(!cartOpen);
        document.body.style.overflow = cartOpen ? 'auto' : 'hidden';
    };

    const handleShippingChange = (method) => {
        setShippingMethod(method);
    };

    // ----Enviar pedido a Whatsapp---------
    const realizarPedido = (e) => {
        e.preventDefault();

        // const datosUsuario = { nombre, apellido, correo, metodoPago, ubicacion, entrega };
        const numeroTelefonico = "573023602591";
        // Crear mensaje con los productos
        const mensaje = `Hola, me gustaría realizar el siguiente pedido: ${cartItems.map((producto) => `${producto.name} - $${producto.price} - Cantidad: ${producto.amount}`)}`;

        const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir a Whatsapp
        window.open(enlaceWha, "_blank");
    };

    return (
        <div className={cartOpen ? "cart open" : "cart"}>
            <img className='Close-cart' onClick={toggleCart} src={close} alt="close Icon" />
            <h2 className='Title-cart'>Tu carrito</h2>
            {cartItems.length === 0 ? <p className='cart-vacio'>Tu carrito está vacío.</p> : (
                <div className='productsContainer'>
                    {cartItems.map((item, i) => (
                        <ItemCart key={i} item={item} />
                    ))}
                </div>
            )}
            <div className="Ordering">
                {/* <div >
                    <div className="envio-p">
                        <p className='envio'>Envio</p>
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
                </div> */}
                <div className="Ordering-total">
                    <p className='cart-total'>Subtotal</p>
                    <p className='cart-total'>${total}</p>
                </div>
                <p className='p-enviar'>Nota: Para procesar tu pedido haz Click en Enviar a whatsapp</p>
                <button disabled={cartItems.length === 0}>
                    <Link className={cartItems.length === 0 && "disabled-link"} to="/checkout">Ir a Checkout</Link>
                </button>
            </div>
        </div>
    );
};

export default Cart;













// import React, { useContext, useEffect, useState } from 'react'
// import { CartContext } from '../Context/CartContext'
// import "../cssfolder/Cart.css";
// // import close from "../icons/x.png";
// // import cart from "../icons/shopping.svg";
// import ItemCart from './ItemCart';
// import { Link } from 'react-router-dom';

// const Cart = ({ cartOpen, setProductsLength }) => {

//     const { cartItems } = useContext(CartContext)

//     useEffect(() => {
//         setProductsLength(
//             cartItems.reduce((previous, current) => previous + current.amount, 0)
//         )
//     }, [cartItems])

//     const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0)

//     return (
//         <div className={cartItems && cartOpen ? "cart" : "cart-Close"}>


//             <h2 className='Title-cart'>Tu carrito</h2>

//             {cartItems.length === 0 ? <p className='cart-vacio'>Tu carrito esta vacío.</p> : (
//                 <div className='productsContainer'>
//                     {cartItems.map((item, i) => (
//                         <ItemCart key={i} item={item} />
//                     ))}
//                 </div>
//             )}

//             <div className="Ordering">
//                 <div className="Ordering-total">
//                     <p className='cart-total'>Subtotal</p>
//                     <p className='cart-total'>${total}</p>
//                 </div>
//                 <p>El costo de envío es totalmente GRATIS!</p>
//                 <button><Link to="/checkout">Ir a Checkout</Link></button>
//             </div>
//         </div>
//     )
// }

// export default Cart

