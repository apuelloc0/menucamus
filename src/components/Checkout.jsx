import React, { useContext } from 'react'
import "../cssfolder/Checkout.css";
import { CartContext } from '../Context/CartContext'
import Formulario from './Formulario';

const Checkout = () => {

    const { cartItems } = useContext(CartContext)
    // console.log(cartItems)

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0)

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

        </div>
    )
}

export default Checkout
