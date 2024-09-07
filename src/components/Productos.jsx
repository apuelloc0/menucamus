import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ReactPaginate from 'react-paginate';
import "../cssfolder/Productos.css";
import star from "../icons/staryellow.png";
import cart from "../icons/shop-cart.svg";
import { CartContext } from '../Context/CartContext';
import Loading from './Loading';
import useSheets from '../useSheets';
import ButtonCategories from './ButtonCategories';
import SearchBar from './SearchBar';

const Productos = ({ routeCategory }) => {
    const { addItemToCart } = useContext(CartContext);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(30); // Fijamos la cantidad de items por página
    const containerRef = useRef(null);

    const { data, loading, error } = useSheets(
        'AIzaSyCLsHC4bgV6pZEr-IVI2ZCQhh_2aqT6WgQ',
        '1t2LTL1etnEbydgflTZ6b82vTTs1UOUhDFS8Hl3XlDyA',
        'Class Data!A2:F',
        filter
    );

    const productosConId = data ? data.map(product => ({ ...product, id: uuidv4() })) : [];

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productosConId.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(productosConId.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="shirts-container">
            <ButtonCategories setFilter={setFilter} />
            <SearchBar setFilter={setFilter} />

            <div ref={containerRef} className="Pro-Container">
                {
                    loading ? <Loading /> : currentItems.map((shirt, i) => (
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
                                <Link className="a-contain" onClick={() => addItemToCart(shirt)}>
                                    <img className="shopping" src={cart} alt="Shopping Cart" />
                                </Link>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}

export default Productos;









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
//     const [filter, setFilter] = useState(''); // Estado para el filtro

//     const { data, loading, error } = useSheets(
//         'AIzaSyCLsHC4bgV6pZEr-IVI2ZCQhh_2aqT6WgQ',
//         '1t2LTL1etnEbydgflTZ6b82vTTs1UOUhDFS8Hl3XlDyA',
//         'Class Data!A2:F',
//         filter // Pasar el filtro al custom hook
//     );

//     // Asignar IDs únicos a cada producto
//     const productosConId = data.map(product => ({ ...product, id: uuidv4() }));

//     return (
//         <div className="shirts-container">
//             <ButtonCategories setFilter={setFilter} /> {/* Incluye ButtonCategories */}

//             <div className="Pro-Container">
//                 {
//                     productosConId.map((shirt, i) => (
//                         <Link key={i} to={""}>
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

