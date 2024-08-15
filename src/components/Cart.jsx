import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import "../cssfolder/Cart.css";
// import close from "../icons/x.png";
// import cart from "../icons/shopping.svg";
import ItemCart from './ItemCart';

const Cart = ({ cartOpen, setProductsLength }) => {

    const { cartItems } = useContext(CartContext)


    // ----Enviar pedido a Whatsapp---------
    const realizarPedido = () => {
        // crear mensaje con los productos
        const mensaje = `Hola me gustaria realizar el pedido: ${cartItems.map((producto) => `${producto.name} - ${producto.price} - ${producto.amount}`)}`

        const numeroTelefonico = "4266934611"

        // const enlaceWha = `https://wa.me/${numeroTelefonico}?text=Hola,%20me%20gustaria%20realizar%20el%20pedido:%0A${mensaje}`

        const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${mensaje}`
        // console.log(mensaje)

        // Redirigir a Whatsapp
        window.open(enlaceWha, "_blank")
    }

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems])

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0)

    return (
        <div className={cartItems && cartOpen ? "cart" : "cart-Close"}>


            <h2 className='Title-cart'>Tu carrito</h2>

            {cartItems.length === 0 ? <p className='cart-vacio'>Tu carrito esta vacío.</p> : (
                <div className='productsContainer'>
                    {cartItems.map((item, i) => (
                        <ItemCart key={i} item={item} />
                    ))}
                </div>
            )}

            <div className="Ordering">
                <div className="Ordering-total">
                    <p className='cart-total'>Subtotal</p>
                    <p className='cart-total'>${total}</p>
                </div>
                <p>El costo de envío es totalmente GRATIS!</p>
                <button onClick={() => realizarPedido()}>REALIZAR PEDIDO</button>
            </div>
        </div>
    )
}

export default Cart

// {/* <div className={cartItems && cartOpen ? "cart" : "cart-Close"}>


// <h2 className='Title-cart'>Tu carrito</h2>

// {cartItems.length === 0 ? <p className='cart-vacio'>Tu carrito esta vacío.</p> : (
//     <div className='productsContainer'>
//         {cartItems.map((item, i) => (
//             <ItemCart key={i} item={item} />
//         ))}
//     </div>
// )}

// <div className="Ordering">
//     <div className="Ordering-total">
//         <p className='cart-total'>Subtotal</p>
//         <p className='cart-total'>${total}</p>
//     </div>
//     <p>El costo de envío es totalmente GRATIS!</p>
//     <button>REALIZAR PEDIDO</button>
// </div>
// </div> */}
