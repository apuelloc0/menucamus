import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import AddToCart from './pages/AddToCart'
import CartProvider from './Context/CartContext'
import Whatsapp from './components/Whatsapp'
import Productos from './components/Productos'
import Footer from './components/Footer'
import AdditionaInfo from './components/AdditionaInfo'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <AdditionaInfo />
        <Header />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:routeId" element={<Productos />} />
          <Route path="/:category/:id" element={<AddToCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
