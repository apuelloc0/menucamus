import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import "../cssfolder/Productos.css";
import star from "../icons/staryellow.png";
import cart from "../icons/shop-cart.svg";
import { CartContext } from '../Context/CartContext';
import Loading from './Loading';
import useSheets from '../useSheets';
import ButtonCategories from './ButtonCategories'; // Importa ButtonCategories

const Productos = ({ routeCategory }) => {
    const { addItemToCart } = useContext(CartContext);
    const [filter, setFilter] = useState(''); // Estado para el filtro

    const { data, loading, error } = useSheets(
        'AIzaSyCLsHC4bgV6pZEr-IVI2ZCQhh_2aqT6WgQ',
        '1t2LTL1etnEbydgflTZ6b82vTTs1UOUhDFS8Hl3XlDyA',
        'Class Data!A2:F',
        filter // Pasar el filtro al custom hook
    );

    // Asignar IDs únicos a cada producto
    const productosConId = data.map(product => ({ ...product, id: uuidv4() }));

    return (
        <div className="shirts-container">
            <ButtonCategories setFilter={setFilter} /> {/* Incluye ButtonCategories */}

            <div className="Pro-Container">
                {
                    productosConId.map((shirt, i) => (
                        <Link key={i} to={""}>
                            <div key={i} className="pro">
                                <img src={shirt.img} alt={shirt.name} />
                                <div className="des">
                                    <span>{shirt.marca}</span>
                                    <span>{shirt.capacidad}</span>
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
                                <Link onClick={() => addItemToCart(shirt)}>
                                    <img className="shopping" src={cart} alt="" />
                                </Link>
                            </div>
                        </Link>
                    ))
                }
            </div>

            {loading && <Loading />}
        </div>
    );
}

export default Productos;




// const { data, loading, error } = useSheets(
//     'AIzaSyCLsHC4bgV6pZEr-IVI2ZCQhh_2aqT6WgQ',
//     '1t2LTL1etnEbydgflTZ6b82vTTs1UOUhDFS8Hl3XlDyA',
//     'Class Data!A2:F'
// );


// {
//     data.map((shirt, i) => {
//         return <Link key={i} to={`/${shirt.marca}/${shirt.id}`}>
//             <div key={i} className="pro">
//                 <img src={shirt.img} alt={shirt.name} />
//                 <div className="des">
//                     <span>{shirt.marca}</span>
//                     <span>{shirt.capacidad}</span>
//                     <h5>{shirt.name}</h5>
//                     <div className="star">
//                         <img src={star} alt="" />
//                         <img src={star} alt="" />
//                         <img src={star} alt="" />
//                         <img src={star} alt="" />
//                         <img src={star} alt="" />
//                     </div>
//                     <h4>${shirt.price}</h4>
//                 </div>
//                 <Link onClick={() => addItemToCart(shirt)}><img className="shopping" src={cart} alt="" /></Link>
//             </div>
//         </Link>
//     })
// }



// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import "../cssfolder/Productos.css";
// import star from "../icons/staryellow.png";
// import cart from "../icons/shop-cart.svg";
// import { CartContext } from '../Context/CartContext';
// import Loading from './Loading';
// import useSheets from '../useSheets';
// import ButtonCategories from './ButtonCategories'; // Importa ButtonCategories

// const Productos = ({ routeCategory }) => {
//     const { addItemToCart } = useContext(CartContext);
//     const { data, loading, error } = useSheets(
//         'API_KEY',
//         'SHEET_ID',
//         'Class Data!A2:F'
//     );

//     const [filter, setFilter] = useState(''); // Estado para el filtro

//     // Asignar IDs únicos a cada producto
//     const productosConId = data.map(product => ({ ...product, id: uuidv4() }));

//     // Filtrar productos según el filtro seleccionado
//     const filteredProducts = productosConId.filter(product => {
//         if (filter === '') return true; // Mostrar todos los productos si no hay filtro
//         return product.category === filter; // Filtrar por categoría
//     });

//     return (
//         <div className="shirts-container">
//             <ButtonCategories setFilter={setFilter} /> {/* Incluye ButtonCategories */}

//             <div className="Pro-Container">
//                 {
//                     filteredProducts.map((shirt, i) => (
//                         <Link key={i} to={`/${shirt.marca}/${shirt.id}`}>
//                             <div key={i} className="pro">
//                                 <img src={shirt.img} alt={shirt.name} />
//                                 <div className="des">
//                                     <span>{shirt.marca}</span>
//                                     <span>{shirt.capacidad}</span>
//                                     <h5>{shirt.name}</h5>
//                                     <div className="star">
//                                         <img src={star} alt="" />
//                                         <img src={star} alt="" />
//                                         <img src={star} alt="" />
//                                         <img src={star} alt="" />
//                                         <img src={star} alt="" />
//                                     </div>
//                                     <h4>${shirt.price}</h4>
//                                 </div>
//                                 <Link onClick={() => addItemToCart(shirt)}>
//                                     <img className="shopping" src={cart} alt="" />
//                                 </Link>
//                             </div>
//                         </Link>
//                     ))
//                 }
//             </div>

//             {loading && <Loading />}
//         </div>
//     );
// }

// export default Productos;
// // 