import React, { useContext, useState } from 'react'
import style from "./Cartcards.module.css"
import { AuthContext } from '../../context/AuthContext'

export const CartCards = ({element,index}) => {

    const {
        cartData,setCartData,
        cartQuantity,setCartQuantity,
        cartAdd,
        cartdelete
      } = useContext(AuthContext)

    const [cartQnty,setCartQnty] = useState(element.qty || 0)
   

    const cartDelete = (e, id) => {
        setCartData(prevCartData => {
            let currentProduct = prevCartData?.filter(elm => elm.id === id )[0];  
            let currentProductMaxQty = currentProduct.quantity;
            const allProducts = prevCartData?.filter(elm => elm.id !== id )
        
              setCartQuantity(prev=> prev - cartQnty)
              return [...allProducts]
           
            
        
          })
    }

const handlePlus = (e, id) => {
  
    setCartData(prevCartData => {
      let currentProduct = prevCartData?.filter(elm => elm.id === id )[0];  
      let currentProductMaxQty = currentProduct.quantity;
      const allProducts = prevCartData?.filter(elm => elm.id !== id )
  
      if(currentProduct.qty  < currentProductMaxQty) {
        currentProduct.qty += 1;
        setCartQnty(prev => prev+1)
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
  
      setCartQnty(prev => prev-1)
      setCartQuantity(prev=>prev-1)
  
      if(currentProduct.qty  > 1 ) {
        currentProduct.qty -= 1;
        return [...allProducts, currentProduct]
      }
        return allProducts
    })
   }

const handleCartQnty = () => {
    console.log("handleCartQnty")
}

  return (
    <div>
        <div className={style.Cards} >

            <div className={style.CardsImg} >
                <img src={element.imageURL} alt="" srcset={element.name} />
            </div>
            
            <div>
                <text>{element.name}</text>
                <br/>
                <text>Rs {element.price}</text>
            </div>

            <div>
                <button 
                  onClick={(e) =>handleMinus(e, index)} 
                  className={style.DeleteButton} 
                >
                  -
                </button> 
                <text 
                  style={{margin:"10px"}} 
                > 
                  {cartQnty}
                </text>
                <button style={{marginRight:"10px"}} 
                  onClick={(e) =>handlePlus(e, index)} 
                  className={style.DeleteButton} 
                  >
                    +
                </button>

                <button onClick={(e) =>cartDelete(e, index)}  className={style.DeleteButton} >Delete</button>
            </div>
        
        </div>


    </div>
  )
}
