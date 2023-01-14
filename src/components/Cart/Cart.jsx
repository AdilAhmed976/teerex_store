import React, { useContext, useEffect, useState } from 'react'
import style from "./Cart.module.css"
import { AuthContext } from '../../context/AuthContext'
import { CartCards } from './CartCards'
export const Cart = () => {

    const {
        cartData,setCartData,
        cartQuantity,setCartQuantity,
        cartAdd,
        cartdelete
    } = useContext(AuthContext)

    // this will calculate the cart value
    const [cartTotal,setCartTotal] = useState( cartData?.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.qty, 0  ) )

    // this useffect will run when the cart qty changes & it retotal cart value
    useEffect(() => {
      let changingCartData =   cartData?.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.qty, 0  )
      setCartTotal(changingCartData)
    }, [cartQuantity])
    
  return (

    <div>
        {cartData?.length!==0?
        <div>
            <div className={style.MainCart} >
                {cartData?.map((element,index) => <CartCards key={element.id} element={element} index={element.id} />  )}
            </div>
            <div>
                {`Your Cart Total is ${cartTotal}`}
            </div>
        </div>
        :
        <div className={style.EmptyCart} >
            <text>Your cart is empty</text>
        </div>
        }
    </div>
  )
}
