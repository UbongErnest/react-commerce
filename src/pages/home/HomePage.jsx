import Header from "../../pages/Header"
import '../../pages/header.css'
import './HomePage.css'


import axios from "axios"
import { useEffect, useState } from 'react'
import ProductsGrid from "./ProductsGrid"

function HomePage({cart, loadCart}) {
    const [products, setProducts] = useState([])
   
    useEffect(() => {
        axios.get('/api/products').then((response) => {
            setProducts(response.data)
        })
    }, [])


    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
               <ProductsGrid products={products} loadCart = {loadCart}/>
            </div>
        </>
    )
}

export default HomePage
