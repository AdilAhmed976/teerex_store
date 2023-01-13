import React, { useState } from 'react'
import style from "./Filters.module.css"

export const Filters = () => {
    const [colorCategories,setcolorCategories] = useState([])
    const [color,setColor] = useState([])
    const [gender,setGender] = useState('')
    const [price,setPrice] = useState([])
    const [type,setType] = useState([])

    const handleColour = (e) => {
        let val = e.target.value
        if (e.target.checked==true) {
            colorCategories.push(val)
            console.log('colorCategories INNNN',colorCategories)
        }
        else {
            let ind = colorCategories.indexOf(val)
            colorCategories.splice(ind,1)
        } 
    }

    const handleGender = (e) => {
        let val = e.target.value
        if (e.target.checked==true) {
            colorCategories.push(val)
            console.log('colorCategories INNNN',colorCategories)
        }
        else {
            let ind = colorCategories.indexOf(val)
            colorCategories.splice(ind,1)
        } 
    }
    

  return (
    <div className={style.FiltersBox} >
  
        {/* event delegation applied use on parent  */}
        <div onClick={(e) =>handleColour(e)} >
            <text>Color ; {color}</text>
            <label> Red
                <input type="checkbox" onChange={(e) => setColor(e.target.value)} value="Red"/>
            </label>
            <label> Blue
                <input type="checkbox" onChange={(e) => setColor(e.target.value)} value="Blue"/>
            </label>
            <label> Green
                <input type="checkbox" onChange={(e) => setColor(e.target.value)} value="Green"/>
            </label>
        </div>

        <div onClick={(e) =>handleGender(e)} >
            <text>Gender</text>
            <label> Male
                <input onChange={(e) => setGender(e.target.value)} type="checkbox" value="Male"/>
            </label>
            <label> Female
                <input onChange={(e) => setGender(e.target.value)} type="checkbox" value="Female"/>
            </label>
        </div>

        <div>
            <text>Price</text>
            <label> 0 - Rs250
                <input type="checkbox" value="Red"/>
            </label>
            <label> 251 - Rs450
                <input type="checkbox" value="Red"/>
            </label>
            <label> 450
                <input type="checkbox" value="Red"/>
            </label>
        </div>

        <div>
            <text>Type</text>
            <label> Polo
                <input type="checkbox" value="Polo"/>
            </label>
            <label> Hoodie
                <input type="checkbox" value="Hoodie"/>
            </label>
            <label> Basic
                <input type="checkbox" value="Basic"/>
            </label>
        </div>
            
    </div>
  )
}
