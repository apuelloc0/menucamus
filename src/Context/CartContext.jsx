import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        try {
            const productLocalStorage = localStorage.getItem("cartProducts")
            return productLocalStorage ? JSON.parse(productLocalStorage) : []
        } catch (error) {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems))
        console.log(cartItems)
        // cada vez que se modificque el carrito, setée el localstorage,lo pasamos en string porque solo se puede en string
    }, [cartItems])

    const addItemToCart = (product) => {
        const inCart = cartItems.find(
            (productsInCart) => productsInCart.id === product.id
        );

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else return productInCart
                })
            )
        } else {
            setCartItems([...cartItems, { ...product, amount: 1 }])
        }

    }

    // ------------DELETE-------------------

    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        )

        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            )
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount - 1 }
                    } else return productInCart
                })
            )
        }
    }

    // ------------DELETE-------------------


    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, deleteItemToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
