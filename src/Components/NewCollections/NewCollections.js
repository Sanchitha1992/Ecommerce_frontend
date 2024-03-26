import React from 'react'
import new_products from "../Assets/new_collections"
import { Items } from '../Items/Items'
import "./newCollections.css"

export const NewCollections = () => {
  return (
    <div className="new_collections row">
        <h2>NEW COLLECTIONS</h2>
        {new_products.map((new_Product)=>{
            return <Items id={new_Product.id} name={new_Product.name} image={new_Product.image} 
                new_price={new_Product.new_price} old_price = {new_Product.old_price}/>
        })}
    </div>
  )
}
