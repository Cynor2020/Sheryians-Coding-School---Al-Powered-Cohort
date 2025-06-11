import React from 'react'
import About from './About'
import Services from './Services'
import Product from './Product'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import ServiceDetails from './ServiceDetails'


function Mainrouts() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>

        <Route path="/services" element={<Services/>} >
            <Route path="/services/detail" element={<ServiceDetails/>} />
        </Route>

        <Route path="/product" element={<Product/>} />
        <Route path="/product/detail/:name" element={<ProductDetails/>} />
      </Routes>
  )
}

export default Mainrouts
