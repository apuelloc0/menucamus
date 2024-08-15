import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../cssfolder/Productos.css";
import star from "../icons/staryellow.png";
import cart from "../icons/shop-cart.svg";
import { CartContext } from '../Context/CartContext';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ButtonCategories from './ButtonCategories';
import Loading from './Loading';

const Productos = ({ routeCategory }) => {


    const { addItemToCart } = useContext(CartContext)

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { routeId = routeCategory } = useParams();


    useEffect(() => {

        const productosRef = collection(db, "productos")
        const q = routeId ? query(productosRef, where("marca", "==", routeId)) : productosRef

        getDocs(q)
            .then((res => {
                setProducts(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            }))

    }, [products])

    return (
        <div className="shirts-container">

            {
                routeId && <div className={`Banner-${routeId}`}></div>
            }

            <ButtonCategories />

            <div className="Pro-Container">
                {
                    products.map((shirt, i) => {
                        return <Link to={`/${shirt.marca}/${shirt.id}`}>
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
                products.length === 0 && <div className="No-products">
                    <Loading />
                </div>
            }

        </div>
    )
}

export default Productos
