import React, { useContext, useState } from 'react'
import style from "./Navbar.module.css"
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Navbar = () => {

  const {cartItems} = useContext(AuthContext)

  return (
    <div className={style.MainNavbar}>

      <div>
        <text> TeeRex Store</text>
      </div>

      <div>
        <Link to={"/products"} >
          <button className={style.ProductButton} >
            Products
            <div style={{border:'0.1px solid black' , width:"70%"}} ></div>
          </button>
        </Link>

        <Link to={"/cart"} >
          <button className={style.CartButton} > 
            <FiShoppingCart fontSize={"20px"} />
             {cartItems}
          </button>
        </Link>
      </div>

    </div>
  )
}
