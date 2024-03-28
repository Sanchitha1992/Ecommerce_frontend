import React from 'react'
import "./newsLetter.css"

export const NewsLetter = () => {
  return (
    <div className ="newsletter row">
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
            <h1>Get Exclusive Offers on your Email</h1>
            <h8>Subscribe to our newsletter and stay updated</h8>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Your Email id"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary">Subscribe</button>
                </div>
            </div>
        </div>
        <div className='col-lg-3'></div>
    </div>
  )
}
