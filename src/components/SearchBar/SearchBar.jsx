import React from 'react'
import style from "./SearchBar.module.css"
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";

export const SearchBar = () => {
  return (
    <div className={style.SearchBar} >
        <input placeholder='serch for products' />
        <button className={style.SearchBarButton} ><BiSearch/></button>
        <button className={style.FilterButton} ><FiFilter/></button>
    </div>
  )
}
