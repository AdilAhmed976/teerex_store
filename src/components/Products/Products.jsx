import React, { useContext, useEffect, useState } from 'react'
import style from "./Product.module.css"
import { RiLoader2Fill } from "react-icons/ri";
import { ProductCard } from '../ProductCard/ProductCard';
import { AuthContext } from '../../context/AuthContext';

export const Products = ({
    productsData,
    setProductData,
    filteredData,
    setFilteredData,
    getProductsData,
    colorCategories
}) => {
  return (
    productsData.length==0 ? <div className={style.Loader} >
       <RiLoader2Fill fontSize={'34px'} /> Loading...
    </div>
    : 
    <div className={style.Products} >
        {filteredData?.map((element,index) => {
        return <ProductCard key={element.id} element={element} index={element.id} />
    })
    }
    </div>
  )
}
