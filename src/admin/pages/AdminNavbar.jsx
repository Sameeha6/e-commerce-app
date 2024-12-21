import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => (
    <nav className="bg-blue-950 text-white shadow-xl">
        <div className="container mx-auto p-1 flex items-center justify-center">
            {/* <h2 className="text-2xl font-extrabold">Admin Panel</h2> */}
            {/* Optional: You can add a logout button or other items here */}
            <img src="https://cdn-icons-png.flaticon.com/512/12517/12517190.png" alt="logo" className='w-14 h-14'/>
            <p className='font-extrabold text-3xl'>.com</p>
        </div>
        <div className="flex flex-col-r gap-3 p-1 items-center justify-center">
            <Link 
                to="/admin" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300">
                Dashboard
            </Link>
            <Link 
                to="/admin/manageproducts" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300">
                Manage Products
            </Link>
            <Link 
                to="/admin/manageusers" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300">
                Manage Users
            </Link>
            <Link 
                to="/admin/manageorders" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300">
                Manage orders
            </Link>
            <Link 
                to="/admin/reports" 
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300">
                Reports
            </Link>
        </div>
    </nav>
);

export default AdminNavbar;