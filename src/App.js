import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './user/pages/Home';
import ProductDetail from "./user/pages/ProductDetail";
import Cart from './user/pages/Cart';
import Order from './user/pages/Order';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserProvider } from "./contexts/UserContext";


function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Product/:id" element={<ProductDetail/>} />
        </Routes>
        <Footer/>
      </Router>
    </UserProvider>
  );
}

export default App;
