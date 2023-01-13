import React from 'react'
import style from "./ProductCard.module.css"
export const ProductCard = ({element}) => {
  return (
    <div className={style.ProductCard} >
        <text>{element.name}</text>
        <div>
            <img src={element.imageURL} alt="" srcset="" />            
        </div>
        <div>
            <text>{element.price}</text>
            <button>Add</button>
        </div>
    </div>
  )
}
