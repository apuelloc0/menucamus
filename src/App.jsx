import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import CartProvider from './Context/CartContext'
import Whatsapp from './components/Whatsapp'
import Footer from './components/Footer'
import Checkout from './components/Checkout'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
