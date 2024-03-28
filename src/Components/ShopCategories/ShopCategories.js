import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../App'
import { Items } from '../Items/Items'
import "./shopCategories.css"
export const ShopCategories = (props) => {

  const all_products = useContext(ShopContext)

  return (
    <>
      <div className="banner row">
          <img src={props.banner}/>
      </div>
      <div  className="row">
        {all_products && all_products.map((product)=>{
          if(props.categType == product.category) {
            return <Items id={product.id} name={product.name} image={product.image} 
                  new_price={product.new_price} old_price = {product.old_price}/>
          }
          })}
      </div>
    </>
    
  ) 
}
