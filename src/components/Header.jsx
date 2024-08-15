import React, { useContext, useState } from 'react'
import "../cssfolder/Header.css";
// import { Link } from 'react-router-dom';
import logo from "../icons/logoBlessed.png";
// import Cart from './Cart'
import close from "../icons/x.png";
import cart from "../icons/shopping.svg";
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { CartContext } from '../Context/CartContext';

const Header = () => {

    const [cartOpen, setCartOpen] = useState(false)
    const [productsLength, setProductsLength] = useState(0)

    const { cartItems } = useContext(CartContext)

    return (
        <div className='Header'>

            <Link to="/"><img className="logo" src={logo} alt="" /> </Link>

            <div className='ul-container'>
                <ul className="navbar">

                    <li><Link className="active" to="/">Home</Link></li>

                    <li className={!cartOpen ? "handbag-close" : "handbag"}>
                        <div className='buttonCartContainer'>
                            <div className='buttonCart'>
                                {!cartOpen ? (
                                    <img onClick={() => setCartOpen(!cartOpen)} src={cart} alt="cart Icon" />
                                ) : (
                                    <div className='Header-cart'>
                                        <img className='Close-cart' onClick={() => setCartOpen(!cartOpen)} src={close} alt="close Icon" />
                                        <div onClick={() => setCartOpen(!cartOpen)} className={cartOpen ? "Overlay-visible" : "Overlay"}></div>
                                        <Cart cartOpen={cartOpen} setProductsLength={setProductsLength} />
                                    </div>
                                )}
                            </div>
                            <div>
                                {!cartOpen && cartItems.length != 0 && (
                                    <div className='productsNumber'>{cartItems.length}</div>
                                )}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header


{/* <div className='Header'>

<Link to="/"><img className="logo" src={logo} alt="" /> </Link>

<div className='ul-container'>
    <ul className="navbar">

        <li><Link className="active" to="/">Home</Link></li>

        <li className={!cartOpen ? "handbag-close" : "handbag"}>
            <div className='buttonCartContainer'>
                <div className='buttonCart'>
                    {!cartOpen ? (
                        <img onClick={() => setCartOpen(!cartOpen)} src={cart} alt="cart Icon" />
                    ) : (
                        <div className='Header-cart'>
                            <img className='Close-cart' onClick={() => setCartOpen(!cartOpen)} src={close} alt="close Icon" />
                            <div onClick={() => setCartOpen(!cartOpen)} className={cartOpen ? "Overlay-visible" : "Overlay"}></div>
                            <Cart cartOpen={cartOpen} setProductsLength={setProductsLength} />
                        </div>
                    )}
                </div>
                <div>
                    {!cartOpen && cartItems.length != 0 && (
                        <div className='productsNumber'>{cartItems.length}</div>
                    )}
                </div>
            </div>
        </li>
    </ul>
</div>
</div> */}