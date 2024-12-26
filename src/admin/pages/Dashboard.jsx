import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../api/productApi";
import { getAllOrders, getAllUsers } from "../../api/adminApi";


const Dashboard = () => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    getAllProduct().then((res) => setTotalProducts(res.data.length));
    getAllOrders().then((res) =>{ 
      setTotalOrders(res.data.length)
      const revenue = res.data.reduce((acc, order) => acc + order.total, 0);
      setTotalRevenue(revenue);
    });
    getAllUsers().then((res) => setTotalUsers(res.data.length));
    // getAllUsers().then((res) => {
    //   // Filter out admins based on the property (e.g., isAdmin or role)
    //   const nonAdminUsers = res.data.filter(user => !user.isAdmin);
    //   setTotalUsers(nonAdminUsers.length);
    // });
    }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-lg p-4 ">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </header>

      <main className="flex-1 flex flex-col p-6 items-center">
        {/* Overview Cards */}
        <div className="flex flex-col gap-6 mb-6 w-full max-w-2xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center flex">
            <img src="https://cdn-icons-png.flaticon.com/512/18446/18446219.png" alt="user" className="w-20 h-20" />
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-semibold text-gray-600">Total Users</h2>
              <p className="text-4xl font-medium text-black mt-4">{totalUsers}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center flex">
            <img src="https://cdn-icons-png.flaticon.com/512/18532/18532334.png" alt="pdts" className="w-24 h-20"/>
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-semibold text-gray-600">Total Products</h2>
              <p className="text-4xl font-medium text-black mt-4">{totalProducts}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center flex">
            <img src="https://cdn-icons-png.flaticon.com/512/6054/6054065.png" alt="orders" className="w-20 h-20" />
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-semibold text-gray-600">Total Orders</h2>
              <p className="text-4xl font-medium text-black mt-4">{totalOrders}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center flex">
            <img src="	https://cdn-icons-png.flaticon.com/512/16316/16316708.png" alt="rev" className="w-20 h-20"/>
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-semibold text-gray-600">Total Revenue</h2>
              <p className="text-3xl font-medium text-black mt-4">₹{totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
