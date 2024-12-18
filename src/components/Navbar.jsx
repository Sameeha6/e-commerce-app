import React from 'react'
import { NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; // Import the UserContext hook


function Navbar() {
    const { username, handleLogout } = useUser(); // Get username and logout from context

  return (

    <div className='Navbar w-full h-[77px] p-4 bg-white flex items-center justify-between shadow-lg'>
        <div className='flex items-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/12517/12517190.png" alt="logo" className='w-14 h-14'/>
            <p className='font-bold text-2xl'>.com</p>
        </div>
        <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
            <ul className='flex space-x-4 '>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/Cart"><li>Cart</li></NavLink>
                <NavLink to="/Order"><li>Order</li></NavLink>
            </ul>
        </div>
        <div className='flex items-center space-x-4'>
            
            
            <input type="text" placeholder='Search here...' 
                className='p-2 border rounded-md w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] ' />
        </div>
        <ul className="flex items-center space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8' />
                {/* <li className='hidden sm:block'>username</li>
                <button className='bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 text-white'>logout</button> */}
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
              <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
                Sign Up
              </button>
            </NavLink>
          </>
        )}
        </ul>
    </div>
  )
}

export default Navbar;
