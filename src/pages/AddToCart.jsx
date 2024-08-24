import React, { useContext, useEffect, useState } from 'react'
import "../cssfolder/AddToCart.css";
import star from "../icons/staryellow.png";
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
// import Productos from '../components/Productos';
import { useFetch } from '../UseFetch';


const AddToCart = () => {

    const { addItemToCart, cartItems } = useContext(CartContext)

    const { category, id } = useParams();
    const { products, loading } = useFetch(`http://localhost:4000/${category}/${id}`)
    console.log(products.name)

    // ----Enviar pedido a Whatsapp---------
    const realizarPedido = () => {
        // crear mensaje con los productos
        const mensaje = `Hola me gustaria realizar el pedido: ${item.name} - $ ${item.price}`

        const numeroTelefonico = "4266934611"

        // const enlaceWha = `https://wa.me/${numeroTelefonico}?text=Hola,%20me%20gustaria%20realizar%20el%20pedido:%0A${mensaje}`

        const enlaceWha = `https://wa.me/${numeroTelefonico}?text=${mensaje}`
        // console.log(mensaje)

        // Redirigir a Whatsapp
        window.open(enlaceWha, "_blank")
    }

    // const productoParseado = parseInt(id)
    // const filtrarProductosId = products.find(product => product.id === productoParseado)

    return (
        <div className='AddToCart'>

            <div className="AddToCart page-header about-header">
                <h2>#let`s_talk</h2>
                <p>LEAVE A MESSAGE, We love to hear from you!</p>
            </div>

            <section className="AddToCart section-p1">
                <div className="Detail-container">

                    <div className="img-product">
                        <img src={products.img} alt="" />
                    </div>

                    <div className="Detail-product">

                        <div className="Details">
                            <h5>{products.name}</h5>
                            <span>{products.marca}</span>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur reprehenderit esse repellendus quasi omnis aliquam a impedit doloremque ut illo accusamus eos corrupti, temporibus debitis quas, ex eveniet culpa nisi.</p>
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <h4>U$S {products.price}</h4>
                            <button onClick={() => { addItemToCart(filtrarProductosId) }} className='AddToCart-Item' >Añadir al Carrito</button>
                            <button onClick={() => realizarPedido()} className='Whatsapp-Button'>Realizar Pedido</button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default AddToCart



{/* <table >
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="./img/x.png" alt="" />
                            </td>
                            <td>
                                <img className="tshirt" src="./img/products/f1.jpg" alt="" />
                            </td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1" /></td>
                            <td>$118.19</td>
                        </tr>

                        <tr>
                            <td>
                                <img src="./img/x.png" alt="" />
                            </td>
                            <td>
                                <img className="tshirt" src="./img/products/f2.jpg" alt="" />
                            </td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1" /></td>
                            <td>$118.19</td>
                        </tr>

                        <tr>
                            <td>
                                <img src="./img/x.png" alt="" />
                            </td>
                            <td>
                                <img className="tshirt" src="./img/products/f3.jpg" alt="" />
                            </td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1" /></td>
                            <td>$118.19</td>
                        </tr>

                        <tr>
                            <td>
                                <img src="./img/x.png" alt="" />
                            </td>
                            <td>
                                <img className="tshirt" src="./img/products/f4.jpg" alt="" />
                            </td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>$118.19</td>
                            <td><input type="number" value="1" /></td>
                            <td>$118.19</td>
                        </tr>
                    </tbody>
                </table> */}



{/* <Productos routeCategory={category} /> */ }
{/* <section className="AddToCart-add section-p1">

                <div className="subtotal">
                    <h3>Card Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>

                            <td>$ </td>
                        </tr>

                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$ 335</strong></td>

                        </tr>
                    </table>

                    <button className="normal">Proceed to checkout</button>
                </div>
            </section> */}