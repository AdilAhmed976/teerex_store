import React from 'react'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { Filters } from '../components/Filters/Filters'
import { Products } from '../components/Products/Products'


export const ProductListingPage = () => {
  return (
    <div>
      <SearchBar/>
      <div style={{display:"flex" , padding:"0px 30px 0px 30px" }}  > 
          <Filters/>
          <Products/>
      </div>
    </div>
  )
}
