import React from 'react'


function Navbar() {


  return (

    <div className='Navbar w-full h-[77px] p-4 bg-white flex items-center justify-between shadow-lg'>
        <div className='flex items-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/12517/12517190.png" alt="logo" className='w-14 h-14'/>
            <p className='font-bold text-2xl'>.com</p>
        </div>
        <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
            <ul className='flex space-x-4 '>
                <li>Home</li>
                <li>Cart</li>
                <li>Order</li>
            </ul>
        </div>
        <div className='flex items-center space-x-4'>
            
            
            <input type="text" placeholder='Search here...' 
                className='p-2 border rounded-md w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] ' />
        </div>
        <ul className="flex items-center space-x-2">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8' />
                <li className='hidden sm:block'>username</li>
                <button className='bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 text-white'>logout</button>
        </ul>
    </div>
  )
}

export default Navbar;
