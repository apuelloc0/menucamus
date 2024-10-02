import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
// import AddToCart from './pages/AddToCart';
import CartProvider from './Context/CartContext';
import StoreOpenClose from './components/StoreOpenClose';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Loader from './components/Loading';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula un tiempo de carga de 3 segundos
  }, []);

  return (
    <CartProvider>
      {loading ? (
        <Loader />
      ) : (
        <HashRouter>
          <Header />
          <StoreOpenClose />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/:id" element={<AddToCart />} /> */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </HashRouter>
      )}
    </CartProvider>
  );
}

export default App;





// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Home from './pages/Home';
// import CartProvider from './Context/CartContext';
// import StoreOpenClose from './components/StoreOpenClose';
// import Footer from './components/Footer';
// import Checkout from './components/Checkout';
// import Loader from './components/Loading';
// import { useState, useEffect } from 'react';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Simula un tiempo de carga de 2 segundos
//   }, []);

//   return (
//     <CartProvider>
//       {loading ? (
//         <Loader />
//       ) : (
//         <BrowserRouter>
//           <Header />
//           <StoreOpenClose />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/checkout" element={<Checkout />} />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       )}
//     </CartProvider>
//   );
// }

// export default App;