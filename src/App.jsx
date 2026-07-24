import '../src/pages/index.css'
import HomePage from './pages/HomePage'
import './App.css'
import { Route, Routes } from 'react-router'
import CheckoutPage from './pages/CheckoutPage'
import Orders from './pages/Orders'
import Trackings from './pages/Trackings'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {

  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('/api/cart-items?expand=product').then((response) => {
      setCart(response.data)
      
    })
  },[])



  return (
    <>
      {/* <Headers/> */}
      <Routes>

        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<Orders />} />
        <Route path="tracking" element={<Trackings />} />
      </Routes>

    </>
  )
}

export default App
