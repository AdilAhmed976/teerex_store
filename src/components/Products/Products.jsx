import React, { useEffect, useState } from 'react'
import style from "./Product.module.css"
import { RiLoader2Fill } from "react-icons/ri";
import { ProductCard } from '../ProductCard/ProductCard';

export const Products = () => {

    const [ productsData,setProductData ] = useState([])


    const getProductsData = async () => {
        try {
            const res  = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
            const data = await res.json();
            console.table(data)
            setProductData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])
    
  return (
    productsData.length==0 ? <div className={style.Loader} >
       <RiLoader2Fill fontSize={'34px'} /> Loading...
    </div>
    : 
    <div className={style.Products} >
        {productsData?.map((element) => {
        return <ProductCard key={element.id} element={element} />
    })
    }
    </div>
  )
}
