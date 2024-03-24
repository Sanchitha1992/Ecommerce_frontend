
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ShopCategories} from './Components/ShopCategories/ShopCategories';
import { Products } from './Components/Products/Products';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { ShoppingCart } from './Components/Cart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/men' element= {<ShopCategories categType="men"/>}/>
          <Route path='/women' element= {<ShopCategories categType = "women"/>}/>
          <Route path='/kids' element= {<ShopCategories categType="kids"/>}/>
          <Route path='/products' element= {<Products />}/>
              <Route path=":productId" element = {<Products />}/>
          <Route path='/login' element= {<Login />}/>
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
