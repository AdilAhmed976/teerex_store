import React, { useContext, useEffect, useState } from 'react'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { Filters } from '../components/Filters/Filters'
import { Products } from '../components/Products/Products'
import { useSearchParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const ProductListingPage = () => {
  const {
    cartData
  } = useContext(AuthContext)
    //hooks for products
    const [ productsData,setProductData ] = useState([])
    const [ filteredData,setFilteredData ] = useState([])

    // hooks for filters
    const [colorCategories,setcolorCategories] = useState([])
    const [color,setColor] = useState([])
    const [gender,setGender] = useState('')
    const [price,setPrice] = useState([])
    const [type,setType] = useState([])
    
    // console.log("colorCategories" ,colorCategories)
    //  state for serch
    const [search,setSearch] = useState([])

  
    // functions for getting products 
    const getProductsData = async () => {
      try {
          const res  = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
          const data = await res.json();

          // checking if we have item in the cart  while page toggling & creating a object to check for the alredy increased qty
          const pIdToQuantity = cartData?.reduce( (ac, product) => {
            ac[product.id] = product.qty
            return ac
          }, {})

          // checking here here which items are present in the cart & adding qty to it 
          const productsData = data?.map( product => {
            if( product?.id in pIdToQuantity ) {
              return {...product, qty: pIdToQuantity[product?.id]}
            }
            return product
           })

          console.table(data)
          setProductData(productsData)
          setFilteredData(productsData)
      } catch (error) {
          console.log(error)
      }
  } 
  
  // functions for filter
    const handleColour = (e) => {

      setcolorCategories(prevColorCategories => {
        let val = e.target.value
        if (e.target.checked == true) {
          let ans  = [...prevColorCategories,val]
          return ans
          }
          else {
            let ind = prevColorCategories.indexOf(val)
            prevColorCategories.splice(ind,1)
            return prevColorCategories
          }
      })
      
    }
    const handleGender = (e) => {
    
       
    }

    const handlePrice = (e, price) => {
      
    }
    const handleType = (e) => {
       
    }

    // function to search data for all the categories 
    const handleSearch = () => {
      let data = productsData.filter((element) => {
        return element.color.includes(search) || element.name.includes(search) || element.gender.includes(search)
      })
      setFilteredData([...data])
    }

    // function to filter data for all the categories & invoking it on filter parent
    const filterData = () => {
      let newColorData;
  
      newColorData = productsData.filter((element) => {
        return colorCategories.includes(element.color) || colorCategories.includes(element.type) || colorCategories.includes(element.gender)
      })
      console.log("colorCategories",newColorData)
      if (colorCategories.length==0) {
        
        setFilteredData([...productsData])
      }
      else {
        setFilteredData([...newColorData])
      }

    }

    useEffect(() => {
      getProductsData()
    }, [])

    useEffect(() => {
      filterData()
    }, [
      colorCategories,color
    ])
  
  
  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <div style={{display:"flex" , padding:"0px 30px 0px 30px" }}  > 
          
          <Filters
            handleGender={handleGender} // passed all state & functions as props in component
            handleColour={handleColour}
            colorCategories={colorCategories}
            setcolorCategories={setcolorCategories}
            color={color}
            setColor={setColor} 
            gender={gender}
            setGender={setGender}
            price={price}
            setPrice={setPrice}
            type={type}
            setType={setType}
            handlePrice={handlePrice}
          />
          <Products 
            productsData={productsData} // passed all state & functions as props in component
            setProductData={setProductData}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            getProductsData={getProductsData}
            colorCategories={colorCategories}
          />
      </div> 
    </div>
  )
}
