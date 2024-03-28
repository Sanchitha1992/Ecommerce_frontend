
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ShopCategories} from './Components/ShopCategories/ShopCategories';
import { Products } from './Components/Products/Products';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { ShoppingCart } from './Components/Cart/ShoppingCart';
import { Footer } from './Components/Footer/Footer';
import React from 'react';
import all_product from './Components/Assets/all_product';
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";


export const ShopContext = React.createContext();
const shopContextValue = {all_product};

function App() {
  return (
    <div className="App">
      <ShopContext.Provider value={all_product}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element = {<Home />}/>
              <Route path='/men' element= {<ShopCategories banner = {men_banner} categType="men"/>}/>
              <Route path='/women' element= {<ShopCategories banner = {women_banner} categType = "women"/>}/>
              <Route path='/kids' element= {<ShopCategories banner = {kids_banner} categType="kid"/>}/>
              <Route path='/products' element= {<Products />}/>
                  <Route path=":productId" element = {<Products />}/>
              <Route path='/login' element= {<Login />}/>
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </BrowserRouter>
          <Footer />
      </ShopContext.Provider>
      
    </div>
  );
}

export default App;
