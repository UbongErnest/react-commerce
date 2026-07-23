import '../src/pages/index.css'
import HomePage from './pages/HomePage'
import './App.css'
import { Route, Routes } from 'react-router'
import CheckoutPage from './pages/CheckoutPage'
import Orders from './pages/Orders'
import Trackings from './pages/Trackings'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="checkout" element={<CheckoutPage/>}/>
      <Route path="orders" element = {<Orders/>}/>
      <Route path="tracking" element = {<Trackings/>}/>
    </Routes>
      
    </>
  )
}

export default App
