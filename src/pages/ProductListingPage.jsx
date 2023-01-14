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
    
    // hooks , state for serch
    const [search,setSearch] = useState([])

    // handlePrice,handleType
    // functions for products 
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
        let val = e.target.value
        if (e.target.checked===true) {
          let ans  = [...colorCategories,val]
          setcolorCategories(ans)
          }
          else {
            let ind = colorCategories.indexOf(val)
            let ans = colorCategories.splice(ind,1)
            setcolorCategories(colorCategories)
            
        } 
        
    }
    const handleGender = (e) => {
        let val = e.target.value
        if (e.target.checked==true) {
           colorCategories.push(val)
        }
        else {
            let ind = colorCategories.indexOf(val)
            colorCategories.splice(ind,1)
        } 
    }
    const handlePrice = (e, price) => {
      const { checked } = e.target;
      let priceRange = {
        '0-250': (value) => value <= 250,
        '251-450': (value) => value > 250 && value <= 450,
        '450': (value) => value > 450  
      }

      setPrice(prevPrice => {
        if(checked) {
          return [...prevPrice, price]
        }
        
        return prevPrice.filter(p => p !== price)
      })
    }
    const handleType = (e) => {
       
    }

    // functions for search
    const handleSearch = () => {
      
      // productsData
    }

    // function to filter data 
    const filterData = () => {
      let newColorData;
console.log(colorCategories)
      // if(colorCategories?.length) {
        newColorData = productsData.filter((element) => {
          return colorCategories.includes(element.color)
        })
        setFilteredData([...newColorData])
      // }
      // else {

      // }

      // if(gender.length?.length) {
      //   newColorData = productsData.filter((element) => {
      //     return element.gender == gender
      //   })
      // }

      // if(price.length?.length) {
      //   newColorData = productsData.filter((element) => {
      //     return element.price == price
      //   })
      // }

    }

    useEffect(() => {
      getProductsData()
    }, [])

    useEffect(() => {
      filterData()
    }, [colorCategories,gender,price,type])
    console.log("colorCategories",colorCategories)
    
    
  
  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <div style={{display:"flex" , padding:"0px 30px 0px 30px" }}  > 
          
          <Filters
            handleGender={handleGender} // passed all hooks,state & functions as props in component
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
            productsData={productsData} // passed all hooks ,state & functions as props in component
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
