import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../cssfolder/Productos.css";
import star from "../icons/staryellow.png";
import cart from "../icons/shop-cart.svg";
import { CartContext } from '../Context/CartContext';
import Loading from './Loading';
import { useFetch } from '../UseFetch';

// http://localhost:4000/productos

const Productos = ({ routeCategory }) => {

    const { addItemToCart } = useContext(CartContext)
    const { routeId = routeCategory } = useParams();

    const { products, loading } = useFetch(`http://localhost:4000/productos/${routeId}`)

    return (
        <div className="shirts-container">

            {
                routeId && <div className={`Banner-${routeId}`}></div>
            }

            <div className="Pro-Container">
                {
                    products.map((shirt, i) => {
                        return <Link key={i} to={`/${shirt.marca}/${shirt.id}`}>
                            <div key={i} className="pro">
                                <img src={shirt.img} alt={shirt.name} />
                                <div className="des">
                                    <span>{shirt.marca}</span>
                                    <h5>{shirt.name}</h5>
                                    <div className="star">
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                    </div>
                                    <h4>${shirt.price}</h4>
                                </div>
                                <Link onClick={() => {

                                    addItemToCart(shirt)
                                }}><img className="shopping" src={cart} alt="" /></Link>
                            </div>
                        </Link>
                    })
                }
            </div>

            {
                loading && <Loading />
            }

        </div>
    )
}

export default Productos


{/* <div className="shirts-container">

{
    routeId && <div className={`Banner-${routeId}`}></div>
}

<div className="Pro-Container">
    {
        products.map((shirt, i) => {
            return <Link key={i} to={`/${shirt.marca}/${shirt.id}`}>
                <div key={i} className="pro">
                    <img src={shirt.img} alt={shirt.name} />
                    <div className="des">
                        <span>{shirt.marca}</span>
                        <h5>{shirt.name}</h5>
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <h4>${shirt.price}</h4>
                    </div>
                    <Link onClick={() => {

                        addItemToCart(shirt)
                    }}><img className="shopping" src={cart} alt="" /></Link>
                </div>
            </Link>
        })
    }
</div>

{
    loading && <Loading />
}

</div> */}