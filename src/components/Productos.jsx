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

const Productos = () => {
    const { addItemToCart } = useContext(CartContext);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(30); // Fijamos la cantidad de items por página
    const containerRef = useRef(null);

    const { data, loading, error } = useSheets(
        'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg',
        '1I9-znBWD0kn6pRlctgprPgYZySOjTlOeHdA9hfGLfaw',
        'Hoja1!A2:G',
        filter
    );


    const productosConId = data ? data.map(product => ({ ...product, id: uuidv4() })) : [];

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productosConId.slice(indexOfFirstItem, indexOfLastItem);
    console.log(currentItems)

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
                    loading ? <Loading /> : currentItems.length === 0 ? (<p className='no-results'>Sin resultados...</p>) :
                    currentItems.map((product, i) => 
                    
                        <Link key={i} to="">

                       <div key={i} className="pro">
                           <img src={product.img} alt={product.name} />
                           <div className="des">
                               <h5>{product.name}</h5>
                               <p>
                                   {product.description}
                               </p>
                               <h4>${product.price}</h4>
                           </div>
                           <Link className="a-contain" onClick={() => addItemToCart(product)}>
                               <img className="shopping" src={cart} alt="Shopping Cart" />
                           </Link>
                       </div>
                       </Link>
                   
                   )
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









// import React, { useContext, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import ReactPaginate from 'react-paginate';
// import "../cssfolder/Productos.css";
// import star from "../icons/staryellow.png";
// import cart from "../icons/shop-cart.svg";
// import { CartContext } from '../Context/CartContext';
// import Loading from './Loading';
// import useSheets from '../useSheets';
// import ButtonCategories from './ButtonCategories';
// import SearchBar from './SearchBar';

// const Productos = () => {
//     const { addItemToCart } = useContext(CartContext);
//     const [filter, setFilter] = useState('');
//     const [currentPage, setCurrentPage] = useState(0);
//     const [itemsPerPage] = useState(30); // Fijamos la cantidad de items por página
//     const containerRef = useRef(null);

//     const { data, loading, error } = useSheets(
//         'AIzaSyBpHDI9OLva3Ed1ANXi27__yYzcjfm85Dg',
//         '1I9-znBWD0kn6pRlctgprPgYZySOjTlOeHdA9hfGLfaw',
//         'Hoja1!A2:G',
//         filter
//     );


//     const productosConId = data ? data.map(product => ({ ...product, id: uuidv4() })) : [];

//     const indexOfLastItem = (currentPage + 1) * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = productosConId.slice(indexOfFirstItem, indexOfLastItem);
//     console.log(currentItems)

//     const totalPages = Math.ceil(productosConId.length / itemsPerPage);

//     const handlePageClick = (event) => {
//         setCurrentPage(event.selected);
//         if (containerRef.current) {
//             containerRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="shirts-container">
//             <ButtonCategories setFilter={setFilter} />
//             <SearchBar setFilter={setFilter} />

//             <div ref={containerRef} className="Pro-Container">
//                 {
//                     loading ? <Loading /> :  currentItems.map((product, i) => 
                    
//                          <Link key={i} to="">

//                         <div key={i} className="pro">
//                             <img src={product.img} alt={product.name} />
//                             <div className="des">
//                                 <h5>{product.name}</h5>
//                                 <p>
//                                     {product.description}
//                                 </p>
//                                 <h4>${product.price}</h4>
//                             </div>
//                             <Link className="a-contain" onClick={() => addItemToCart(product)}>
//                                 <img className="shopping" src={cart} alt="Shopping Cart" />
//                             </Link>
//                         </div>
//                         </Link>
                    
//                     )
//                 }
//             </div>

//             <ReactPaginate
//                 previousLabel={'<'}
//                 nextLabel={'>'}
//                 breakLabel={'...'}
//                 pageCount={totalPages}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={5}
//                 onPageChange={handlePageClick}
//                 containerClassName={'pagination'}
//                 activeClassName={'active'}
//             />
//         </div>
//     );
// }

// export default Productos;
