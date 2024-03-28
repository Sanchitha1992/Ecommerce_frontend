import React from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"
import { Link, NavLink } from 'react-router-dom'
import { Login } from '../Login/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-default" style={{backgroundColor: "#C5C6C7"}}>
      <div className = "nav navbar-header"> 
        <img src={logo}></img>
        <h3>SHOP ONLINE</h3>
      </div>
        <ul className = "nav">
          <li className="nav-item">
            <NavLink to="/" className = "nav-link active" href="#"><span className="menu-items">Home</span></NavLink>
          </li>
          <li className= "nav-item">
            <NavLink to="/men" className = "nav-link" href="#"><span className="menu-items"> Men</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/women" className= "nav-link" href="#"><span className="menu-items">Women</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/kids" className = "nav-link" href="#"><span className="menu-items">Kids</span></NavLink>
          </li>
        </ul>
      <div className="nav navbar navbar-right">
          <NavLink to="/login"><button class="btn btn-dark "><span>login</span></button></NavLink>
          <div className="cart-logo">
            <NavLink to="/cart"><img src={cart}></img></NavLink>
            <span class="cart-count">0</span>
          </div>
      </div>
      

    </nav>
  )
}
