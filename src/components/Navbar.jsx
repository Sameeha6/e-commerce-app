import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; // Import the UserContext hook
import { useCart } from "../contexts/CartContext";

function Navbar() {
    const { username, handleLogout } = useUser(); // Get username and logout from context
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger men
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (

    <div className='Navbar w-full h-[77px] p-4 bg-white flex items-center justify-between shadow-lg'>
        <div className='flex items-center space-x-2'>
            <img src="https://cdn-icons-png.flaticon.com/512/12517/12517190.png" alt="logo" className='w-14 h-14'/>
            <p className='font-bold text-xl md:2xl'>.com</p>
        </div>
        <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
            <ul className='flex space-x-4 '>
                <NavLink to="/" className="hover:text-orange-500"><li>Home</li></NavLink>
                <NavLink to="/Cart" className="hover:text-orange-500"><li>Cart <span className='text-sm px-1 rounded-full bg-orange-400'>{cart?.length || 0}</span></li></NavLink>
                <NavLink to="/Order" className="hover:text-orange-500"><li>Order</li></NavLink>
            </ul>
        </div>
        <div className=' items-center space-x-4 hidden md:block'>
            <input type="text" placeholder='Search here...' 
                className='p-2 border rounded-md w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] ' />
        </div>
        <div className="flex items-center space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8 hidden md:block' />
                {username ? (
              <>
                <span className="font-normal text-sm">{username}</span>
                <button
                  className='bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 text-white'
                  onClick={handleLogout} // Trigger the logout function
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className='hidden md:block'>
                <NavLink to="/login">
                  <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
                    Login
                  </button>
                </NavLink>
                {/* <NavLink to="/signup">
                  <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
                    Sign Up
                  </button>
                </NavLink> */}
              </div>
            )}
        </div>

        <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/255px-Hamburger_icon.svg.png"
            alt="menu-icon"
            className="w-8 h-8"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-start space-y-2 p-4 font-semibold text-lg">
              <NavLink to="/" className="hover:text-orange-500"><li>Home</li></NavLink>
              <NavLink to="/Cart" className="hover:text-orange-500"><li>Cart <span className='text-sm px-1 rounded-full bg-orange-400'>{cart?.length || 0}</span></li></NavLink>
              <NavLink to="/Order" className="hover:text-orange-500"><li>Order</li></NavLink>
              <li className="w-full">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-grow rounded p-2 border border-slate-300"
                />
                <button className="bg-blue-500 rounded-lg p-2 text-white hover:bg-blue-400">
                  Search
                </button>
              </div>
            </li>
            <div className="flex items-center space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8' />
                {username ? (
              <>
                <span className="font-normal text-sm">{username}</span>
                <button
                  className='bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 text-white'
                  onClick={handleLogout} // Trigger the logout function
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <button className='bg-orange-500 text-white px-2 py-1 rounded-full hover:bg-orange-600'>
                    Login
                  </button>
                </NavLink>
                {/* <NavLink to="/signup">
                  <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
                    Sign Up
                  </button>
                </NavLink> */}
              </>
            )}
        </div>
        </ul>
        </div>
      )}
            
    </div>
  );
}

export default Navbar;
