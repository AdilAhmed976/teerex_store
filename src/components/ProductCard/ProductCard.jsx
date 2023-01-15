import React, { useContext, useState } from 'react'
import style from "./ProductCard.module.css"
import { AuthContext } from '../../context/AuthContext'

export const ProductCard = ({element,index}) => {
  const {
    cartData,setCartData,
    cartQuantity,setCartQuantity,
    cartAdd,
    cartdelete
  } = useContext(AuthContext)

  const [quantity,setQuantity] = useState(element.qty || 0)


  const handleAddToCart = (e) => {
    if ( e.target.value == 0) {
      alert("Cannot add Item, It is out of Stock")
    }
    else {
      setQuantity(prev => prev + 1)
      setCartData(prev => [...prev, {...element,"qty":quantity + 1}])
      setCartQuantity(prev=>prev+1)
    }
  }

 const handlePlus = (e, id) => {
  
  setCartData(prevCartData => {
    let currentProduct = prevCartData?.filter(elm => elm.id === id )[0];  
    let currentProductMaxQty = currentProduct.quantity;
    const allProducts = prevCartData?.filter(elm => elm.id !== id )

    if(currentProduct.qty  < currentProductMaxQty) {
      currentProduct.qty += 1;
      setQuantity(prev => prev+1)
      setCartQuantity(prev=>prev+1)
      return [...allProducts, currentProduct]
    }
      alert('Max Quantity Limit Reached')
      return prevCartData

  })
 }

 const handleMinus = (e, id) => {
  setCartData(prevCartData => {
    let currentProduct = prevCartData?.filter(elm => elm.id === id )[0];  
    const allProducts = prevCartData?.filter(elm => elm.id !== id )

    setQuantity(prev => prev-1)
    setCartQuantity(prev=>prev-1)

    if(currentProduct.qty  > 1 ) {
      currentProduct.qty -= 1;
      return [...allProducts, currentProduct]
    }
      return allProducts
  })
 }

  return (
    <div className={style.ProductCard} >
        
        <div>
            <img src={element.imageURL} alt="" srcset={element.name} />            
        </div>
        <text>{element.name}</text>
        <br/>
        <text>{`category : ${element.gender}`}</text>
        <br/>
        <text>{`color : ${element.color}`}</text>
        <div>
            <text>{`${element.price} ${element.currency}`} </text>
            <div>
              { quantity == 0 ? 
              <button 
                value={element.quantity} 
                className={style.AddItemButton} 
                onClick={(e) => handleAddToCart(e)} 
              >
                Add to cart
              </button> 
                :
              <div >
                <button 
                  onClick={(e) =>handleMinus(e, index)} 
                  className={style.Button} 
                >
                  -
                </button> 
                <text 
                  style={{margin:"10px"}} 
                > 
                  {quantity}
                </text>
                <button 
                  onClick={(e) =>handlePlus(e, index)} 
                  className={style.Button} 
                  >
                    +
                </button>

              </div> 
              }
            </div>
        </div>
    </div>
  )
}
