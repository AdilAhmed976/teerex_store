import React from 'react'
import style from "./SearchBar.module.css"
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";

export const SearchBar = ({search,setSearch}) => {

  return (
    <div className={style.SearchBar} >
        <input 
          placeholder='serch for products' 
          value={search} 
          onChange={(e) => setSearch( e.target.value)} 
        />
        <button className={style.SearchBarButton} ><BiSearch/></button>
        <button className={style.FilterButton} ><FiFilter/></button>
    </div>
  )
}
