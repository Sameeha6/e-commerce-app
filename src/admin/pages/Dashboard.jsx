import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../api/productApi";
import { getAllOrders, getAllUsers } from "../../api/adminApi";


const Dashboard = () => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    getAllProduct().then((res) => setTotalProducts(res.data.length));
    getAllOrders().then((res) => setTotalOrders(res.data.length));
    getAllUsers().then((res) => setTotalUsers(res.data.length));
    }, []);




  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-lg p-4 ">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </header>

      <main className="flex-1 flex flex-col p-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-600">Total Users</h2>
            <p className="text-4xl font-bold text-gray-900 mt-4">{totalUsers}</p>
            {/* <p className="text-sm text-gray-500 mt-2">+25 this week</p> */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-600">Total Products</h2>
            <p className="text-4xl font-bold text-gray-900 mt-4">{totalProducts}</p>
            {/* <p className="text-sm text-gray-500 mt-2">+142 this week</p> */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-600">Total Orders</h2>
            <p className="text-4xl font-bold text-gray-900 mt-4">{totalOrders}</p>
            {/* <p className="text-sm text-gray-500 mt-2">+39 this week</p> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
