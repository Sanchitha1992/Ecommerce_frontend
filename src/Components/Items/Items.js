import React from 'react'
import "./items.css"
export const Items = (props) => {
  return (
    <div  className="col-3">
        <img className = "prod_images" src={props.image}></img>
        <p className = "prod_name">{props.name}</p>
        <div className="prod_price">
            <p className="new_price">${props.new_price}<span className="old_price">{props.old_price}</span></p>
        </div>
    </div>
  )
}
