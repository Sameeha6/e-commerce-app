import {Routes, Route } from "react-router-dom";

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../user/pages/Home';
import ProductDetail from "../user/pages/ProductDetail";
import Cart from '../user/pages/Cart';
import Order from '../user/pages/Order';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Checkout from "../user/pages/Checkout";

function UserRouter() {
  return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Checkout" element={<Checkout/>}/>
                <Route path="/Order" element={<Order/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/Product/:id" element={<ProductDetail/>} />
              </Routes>
            </div>
            <Footer/>
          </div>
  );
}

export default UserRouter;