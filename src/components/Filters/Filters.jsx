import React, { useState } from 'react'
import style from "./Filters.module.css"

export const Filters = ({
    handleGender,
    handleColour,
    colorCategories,
    setcolorCategories,
    color,
    setColor,
    gender,
    setGender,
    price,
    setPrice,
    type,
    setType,
    handlePrice
}) => {
   
    

  return (
    <div 
        className={style.FiltersBox} 
        onClick={(e) =>handleColour(e)} 
    >
  
        {/* event delegation applied use on parent  */}
        <div 
        // onClick={(e) =>handleColour(e)} 
        >
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

        <div 
        // onClick={(e) =>handleGender(e)} 
        >
            <text>Gender</text>
            <label> Men
                <input 
                onChange={(e) => {
                    setGender(e.target.value)
                }} 
                type="checkbox" 
                value="Men"
            />
            </label>
            <label> Women
                <input 
                    onChange={(e) => {
                        setGender(e.target.value)
                        console.log(e.checked)
                    }} 
                    type="checkbox" 
                    value="Women"
                />
            </label>
        </div>

        <div onClick={() => {

        }}>
            <text>Price</text>
            <label> 0 - Rs250
                <input type="checkbox" value="Red"  onChange={(e)=>handlePrice(e, '0-250')} />
            </label>
            <label> 251 - Rs450
                <input type="checkbox" value="Red" onChange={(e)=>handlePrice(e, '251-450')}/>
            </label>
            <label> 450
                <input type="checkbox" value="Red" onChange={e => handlePrice(e, '450')}/>
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
