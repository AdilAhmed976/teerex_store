import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductListingPage } from '../pages/ProductListingPage'
import { CartPage } from '../pages/CartPage'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            {/* // if user want to got to home we'll navigate him forcefully to product page so if in future we have to so something on the homePage We can do that & we dont have a homepage right now   */} 
            <Route path='/' element={<Navigate to="/products" replace />} /> 
            <Route path='/products' element={<ProductListingPage/>} /> 
            <Route path='/cart' element={<CartPage/>} /> 
        </Routes>
    </div>
  )
}
