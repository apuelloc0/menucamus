import React from 'react'
import star from "../icons/staryellow.png";
import cart from "../icons/shop-cart.svg";
import { Link } from 'react-router-dom'
import { useFetch } from '../UseFetch';
import "../cssfolder/ProductosHome.css";

const ProductosHome = () => {

    const { products, loading } = useFetch(`http://localhost:4000/`)
    const { arabe, disenador, nicho } = products

    return (
        <div className="shirts-container">


            <div className="Banner-arabe"></div>
            <div className="Pro-Container">
                {
                    arabe?.map((shirt, i) => {
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
            <div className="See-more">
                <button className='See-more-button'><Link to={"/productos/arabe"}>Ver más</Link></button>
            </div>

            <div className="Banner-disenador"></div>
            <div className="Pro-Container">

                {
                    disenador?.map((shirt, i) => {
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
            <div className="See-more">
                <button className='See-more-button'><Link to={"/productos/disenador"}>Ver más</Link></button>
            </div>

            <div className="Banner-nicho"></div>
            <div className="Pro-Container">
                {
                    nicho?.map((shirt, i) => {
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
            <div className="See-more">
                <button className='See-more-button'><Link to={"/productos/nicho"}>Ver más</Link></button>
            </div>

            {/* {
                loading && <Loading />
            } */}

        </div>
    )
}

export default ProductosHome
