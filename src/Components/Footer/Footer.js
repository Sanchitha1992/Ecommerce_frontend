import React from 'react'
import footerImage from "../Assets/logo.png"
import "./footer.css"
import instagramIcon from "../Assets/instagram_icon.png"
import whatsappIcon from "../Assets/whatsapp_icon.png"
import pintesterIcon from "../Assets/pintester_icon.png"


export const Footer = () => {
  return (
    <div className = "footer row">
        <div className = "col-3"></div>
        <div className = "col-6">
            <div>
                    <img src = {footerImage}/><h5>SHOP ONLINE</h5>
            </div>
            <div className="footerItems">
                <nav className="navbar navbar-default">
                    <ul className="nav">
                        <li className="nav-item">Company</li>
                        <li className="nav-item">Products</li>
                        <li className="nav-item">Offices</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                </nav>
            </div>
            <div className="footerIcons">
                <nav className = "navbar navbar-default">
                    <ul className="nav">
                        <li className = "nav-item"><img className = "instaIcon" src = {instagramIcon}></img></li>
                        <li className = "nav-item"><img className = "pintesterIcon" src = {pintesterIcon}></img></li>
                        <li className = "nav-item"> <img className = "whatsappIcon" src = {whatsappIcon}></img></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className = "col-3"></div> 
    </div>
  )
}
