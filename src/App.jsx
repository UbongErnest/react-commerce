import '../src/pages/index.css'
import HomePage from '../src/pages/home/HomePage'
import './App.css'
import { Route, Routes } from 'react-router'
import CheckoutPage from './pages/CheckoutPage'
import Orders from './pages/Orders'
import Trackings from './pages/Trackings'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {

  const [cart, setCart] = useState([])

  const loadCart = async () => {
    axios.get('/api/cart-items?expand=product').then((response) => {
      setCart(response.data)

    })
  }

  useEffect(() => {
    loadCart()
  }, [])



  return (
    <>
      {/* <Headers/> */}
      <Routes>

        <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<Orders cart={cart} />} />
        <Route path="tracking" element={<Trackings />} />
      </Routes>

    </>
  )
}

export default App
