import React from 'react'
import "./offers.css"
import offersImages from "../Assets/exclusive_image.png"
export const Offers = () => {
  return (
    <div className=" row">
          <div className = "col-2"></div>
          <div className="offer-window col-4">
                <p>Exclusive</p>
                <p> Offers For You</p>
                <h6>ONLY ON BEST SELLER PRODUCTS</h6>
                <button className="btn btn-primary">Check Now</button>
            </div>
            <div className="offer-window col-4">
                <img className = "offers-Images" src={offersImages}></img>
            </div>
            <div className = "col-2"></div>
    </div>
            
  )
}
