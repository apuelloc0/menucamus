import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import "../cssfolder/ItemCart.css";


const ItemCart = ({ item }) => {

    const { deleteItemToCart, addItemToCart } = useContext(CartContext)


    return (
        <div className='cartItem'>
            <img src={item.img} alt={item.name} />

            <div className='data-Container'>
                <div className='cartItem-left'>
                    <p>{item.name}</p>
                    <div className='cartItem-buttons'>
                        <button onClick={() => {
                            deleteItemToCart(item)
                        }}>-</button>
                        <button onClick={() => addItemToCart(item)}>+</button>
                    </div>
                </div>
                <div className='cartItem-right'>
                    <div className='right-container'>
                        {item.amount}
                        <p>${item.amount * item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart
