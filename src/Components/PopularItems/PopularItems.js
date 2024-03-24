import React from 'react'
import data_product from "../Assets/data"
import { Items } from '../Items/Items'
import "./popularItems.css"

export const PopularItems = () => {
  return (
    <div className="row popularItems">
        <h3>POPULAR IN WOMEN</h3>
           {data_product.map((item)=>{  
            return <Items id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }) }      
    </div>

    
    
  )
}
