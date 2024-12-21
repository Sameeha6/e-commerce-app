// import {Routes, Route } from "react-router-dom";
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
// import Home from '../pages/Home';
// import ProductDetail from "../pages/ProductDetail";
import Cart from '../pages/Cart';
import Order from '../pages/Order';
// import Login from '../../auth/pages/Login';
// import Signup from '../../auth/pages/Signup';
import Checkout from "../pages/Checkout";

// function UserRouter() {
//   return (
//         <div className="flex flex-col min-h-screen">
//             <Navbar/>
//             <div className="flex-grow">
//               <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/Cart" element={<Cart/>}/>
//                 <Route path="/Checkout" element={<Checkout/>}/>
//                 <Route path="/Order" element={<Order/>}/>
//                 <Route path="/Login" element={<Login/>}/>
//                 <Route path="/Signup" element={<Signup/>}/>
//                 <Route path="/Product/:id" element={<ProductDetail/>} />
//               </Routes>
//             </div>
//             <Footer/>
//           </div>
//   );
// }

const UserRouter =[
  {path:'/cart',element:<Cart/>},
  {path:'/checkout',element:<Checkout/>},
  {path:'/orders',element:<Order/>}
]

export default UserRouter;