import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import "../cssfolder/Header.css";
import cartIcon from "../icons/shopping.svg";
import logo from "../icons/logocamus.webp"; // Asegúrate de importar el logo
import whatsappIcon from "../icons/WhatsApp.png.webp"; // Asegúrate de importar el icono de WhatsApp
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Header = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const { cartItems } = useContext(CartContext);
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`Header ${shrink ? 'shrink' : ''}`}>
            <div className='LogoContainer'>
                <Link to={"/"}><img src={logo} alt="Logo" className='Logo' /></Link>
            </div>

            <div className='buttonCartContainer'>
                <button className='cta-button'>
                    <p>Contáctanos</p>
                    <Link to="https://wa.link/0gz26y"><img src={whatsappIcon} alt="WhatsApp Logo" className='whatsapp-logo' /></Link>
                </button>
                <div className='buttonCart'>
                    <img onClick={() => setCartOpen(!cartOpen)} src={cartIcon} alt="cart Icon" />
                    {cartItems.length !== 0 && (
                        <div className='productsNumber'>{cartItems.length}</div>
                    )}
                    {cartOpen && <div className="Overlay" onClick={() => setCartOpen(false)}></div>}
                    <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
                </div>
                {/* <div className='buttonCart'>
                    <img onClick={() => setCartOpen(!cartOpen)} src={cartIcon} alt="cart Icon" />
                    {cartItems.length !== 0 && (
                        <div className='productsNumber'>{cartItems.length}</div>
                    )}
                    {cartOpen && <div className="Overlay" onClick={() => setCartOpen(false)}></div>}
                    <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
                </div> */}

            </div>

        </header>
    );
};

export default Header;









// import React, { useState, useContext, useEffect } from 'react';
// import { CartContext } from '../Context/CartContext';
// import "../cssfolder/Header.css";
// import cartIcon from "../icons/shopping.svg";
// import logo from "../icons/logonissysin.webp"; // Asegúrate de importar el logo
// import whatsappIcon from "../icons/WhatsApp.png.webp"; // Asegúrate de importar el icono de WhatsApp
// import Cart from './Cart';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const [cartOpen, setCartOpen] = useState(false);
//     const { cartItems } = useContext(CartContext);
//     const [shrink, setShrink] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setShrink(true);
//             } else {
//                 setShrink(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <header className={`Header ${shrink ? 'shrink' : ''}`}>
//             <div className='LogoContainer'>
//                 <Link to={"/"}><img src={logo} alt="Logo" className='Logo' /></Link>
//             </div>

//             <div className='buttonCartContainer'>
//                 <button className='cta-button'>
//                     Contáctanos
//                     <img src={whatsappIcon} alt="WhatsApp Logo" className='whatsapp-logo' />
//                 </button>
//                 <div className='buttonCart'>
//                     <img onClick={() => setCartOpen(!cartOpen)} src={cartIcon} alt="cart Icon" />
//                     {cartItems.length !== 0 && (
//                         <div className='productsNumber'>{cartItems.length}</div>
//                     )}
//                     {cartOpen && <div className="Overlay" onClick={() => setCartOpen(false)}></div>}
//                     <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
//                 </div>

//             </div>

//             {/* <div className='cta-container'>
//                 <button className='cta-button'>
//                     Contáctanos
//                     <img src={whatsappIcon} alt="WhatsApp Logo" className='whatsapp-logo' />
//                 </button>
//             </div> */}
//         </header>
//     );
// };

// export default Header;



// ORIGINAL-------------
// import React, { useState, useContext, useEffect } from 'react';
// import { CartContext } from '../Context/CartContext';
// import "../cssfolder/Header.css";
// import cartIcon from "../icons/shopping.svg";
// import logo from "../icons/logonissysin.webp"; // Asegúrate de importar el logo
// import Cart from './Cart';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const [cartOpen, setCartOpen] = useState(false);
//     const { cartItems } = useContext(CartContext);
//     const [shrink, setShrink] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setShrink(true);
//             } else {
//                 setShrink(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <header className={`Header ${shrink ? 'shrink' : ''}`}>
//             <div className='LogoContainer'>
//                 <Link to={"/"}><img src={logo} alt="Logo" className='Logo' /></Link>
//             </div>

//             <div className='buttonCartContainer'>
//                 <div className='buttonCart'>
//                     <img onClick={() => setCartOpen(!cartOpen)} src={cartIcon} alt="cart Icon" />
//                     {cartItems.length !== 0 && (
//                         <div className='productsNumber'>{cartItems.length}</div>
//                     )}
//                     {cartOpen && <div className="Overlay" onClick={() => setCartOpen(false)}></div>}
//                     <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;