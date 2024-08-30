import React from 'react'
import cart from "../icons/shop-cart.svg";
import { Link } from 'react-router-dom'
import "../cssfolder/ProductosHome.css";
import useSheets from '../useSheets';


const ProductosHome = () => {

    const { data, loading, error } = useSheets(
        'AIzaSyCLsHC4bgV6pZEr-IVI2ZCQhh_2aqT6WgQ',
        '1t2LTL1etnEbydgflTZ6b82vTTs1UOUhDFS8Hl3XlDyA',
        'Class Data!A2:F'
    );

    // console.log(data[0])

    return (
        // <GoogleSheetsComponent />

        <div className="shirts-container">

            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <p>Name: {item.name}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Grade: {item.grade}</p>
                    </div>
                ))}
            </div>
            <div className="Pro-Container">
                {
                    data?.map((shirt, i) => {
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
            {/* {
                loading && <Loading />
            } */}
        </div>
    )
}

export default ProductosHome
