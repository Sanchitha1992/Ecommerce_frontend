import React from 'react'
import "./home.css"
import handicon from "../Assets/hand_icon.png";
import rightArrow from "../Assets/arrow.png";
import home_image from "../Assets/hero_image.png";
import { PopularItems } from '../PopularItems/PopularItems';
import { Offers } from '../../Offers/Offers';

export const Home = () => {
  return (
    <div className="container">
        <div className="row">
            <div className ="col col-lg-6 left-panel">
                <p className="new-collection">NEW ARRIVALS ONLY</p>
                <p className="other-text">
                    <h1>new<span><img className="hand-icon" src={handicon}></img></span></h1>
                    <h1>collections</h1>
                    <h1>for everyone</h1>
                </p>
                
                <button className='btn btn-primary latest-Collec'>Latest Collections<span><img className= "right-Arrow" src={rightArrow}/></span></button>
            </div>
            <div className ="col col-lg-6">
                <img className= "home_image" src={home_image}/>
            </div>
        </div>
        <PopularItems />
        <div className="row">
            <div className='col-lg-12'>
                <Offers />
            </div>
        </div>

    </div>
  )
}
