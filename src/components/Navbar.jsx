import React,{useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; 
import { useCart } from "../contexts/CartContext";
import { getAllProduct } from '../api/productApi';

function Navbar() {
    const { handleLogout } = useUser(); 
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const userName = localStorage.getItem("userName")
    const [showModal, setShowModal] = useState(false)
    const [searchTerm,setSearchTerm] = useState("")
    const [products,setProducts] = useState([])
    const navigate = useNavigate()

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(()=>{
      const fetchProducts = async () =>{
        if(searchTerm.trim()===''){
          setProducts([]);
          setShowModal(false);
          return;
        }
        try{
          const res = await getAllProduct();
          const searchProducts = res.data.filter(product=>(
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          ));
          setProducts(searchProducts);
          setShowModal(true);
        }
        catch(error){
          console.error("Error while searching Products", error);
        }
      }
  
      const delaySearch = setTimeout(() => {
        fetchProducts();
      }, 300);
  
      return () => clearTimeout(delaySearch);
    },[searchTerm])
  
    const handleProductClick = (productId)=>{
      setShowModal(false)
      setSearchTerm("");
      navigate(`/product/${productId}`)
    }
    const handleOutsideClick = (e) => {
      if (e.target.id === 'menu-overlay') {
        setIsMenuOpen(false);
      }
    }

  return (

    <div className='Navbar  sticky top-0 w-full h-[86px] p-4 bg-gray-900 text-white flex items-center z-50 justify-between shadow-xl'>
        <div className='flex items-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/12517/12517190.png" alt="logo" className='w-14 h-14'/>
            <p className='font-bold text-2xl md:2xl'>.com</p>
        </div>
        <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
            <ul className='flex space-x-4 '>
                <NavLink to="/" className="hover:text-orange-500"><li>Home</li></NavLink>
                <NavLink to="/Cart" className="hover:text-orange-500"><li>Cart {cart.length >0 && (<span className='text-sm px-1 rounded-full bg-orange-400'>{cart.length}</span>)}</li></NavLink>
                <NavLink to="/Order" className="hover:text-orange-500"><li>Order</li></NavLink>
            </ul>
        </div>
        <div className=' relative items-center space-x-4 hidden md:block'>
            <input onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} type="search" placeholder='Search here...' 
                className=' p-2 border rounded-md w-[200px] sm:w-[200px] md:w-[300px] lg:w-[400px] outline-none text-black' />
            {showModal && products.length>0 && (
              <div className='absolute top-7 right-0 mt-3 overflow-y-auto z-50 w-full max-h-60 bg-white rounded-lg border-b-2 text-black text-sm'>
                <ul className='divide-y divide-gray-300'>
                  {products.map(product=>(
                    <li key={product.id} onClick={()=>handleProductClick(product.id)} className='cursor-pointer p-2'>{product.name}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
        <div className="flex items-center space-x-2">
        {userName ? (
          <>
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8 hidden md:block' />
                
              
                <span className="font-normal text-sm hidden md:block">{userName}</span>
                <button
                  className='bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-800 text-white hidden md:block'
                  onClick={handleLogout} 
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className='hidden md:block'>
                <NavLink to="/login">
                  <button className='bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-800'>
                    Login
                  </button>
                </NavLink>
              </div>
            )}
        </div>

        <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/15178/15178747.png"
            alt="menu-icon"
            className="w-6 h-6"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div
        id="menu-overlay"
        className="fixed inset-0 z-40 top-[71px]"
        onClick={handleOutsideClick}
        >
        <div className="absolute top-[70px] left-0 w-full bg-gray-900 shadow-md md:hidden z-40 flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-2 p-4 font-semibold text-lg ">
              <NavLink to="/" className="hover:bg-gray-500 rounded-md py-2 px-4  "><li>Home</li></NavLink>
              <NavLink to="/Cart" className=" hover:bg-gray-500 rounded-md py-1 px-3"><li>Cart {cart.length >0 && (<span className='text-sm px-1 rounded-full bg-orange-400'>{cart.length}</span>)}</li></NavLink>
              <NavLink to="/Order" className="hover:bg-gray-500 rounded-md py-1 px-3"><li>Order</li></NavLink>
              <div className=' relative items-center space-x-4  md:block'>
            <input onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} type="search" placeholder='Search here...' 
                className=' p-2 border rounded-md w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] outline-none text-black' />
            {showModal && products.length>0 && (
              <div className='absolute top-7 right-0 mt-3 overflow-y-auto z-50 w-full max-h-60 bg-white rounded-lg border-b-2 text-black text-sm'>
                <ul className='divide-y divide-gray-300'>
                  {products.map(product=>(
                    <li key={product.id} onClick={()=>handleProductClick(product.id)} className='cursor-pointer p-2'>{product.name}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
            <div className="flex items-center space-x-2 space-y-2">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8' />
                {userName ? (
              <>
                <span className="font-normal text-sm">{userName}</span>
                <button
                  className='bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-800 text-base'
                  onClick={handleLogout} 
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <button className='bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-800 text-base'>
                    Login
                  </button>
                </NavLink>
              </>
            )}
        </div>
        </ul>
        </div>
        </div>
      )}
            
    </div>
  );
}

export default Navbar;
