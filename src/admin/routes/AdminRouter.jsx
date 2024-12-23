import React from 'react'
import Dashboard from '../pages/Dashboard';
import ManageProducts from '../pages/ManageProducts';
import ManageOrders from '../pages/ManageOrders';
import ManageUsers from '../pages/ManageUsers';
import Reports from '../pages/Reports';


const AdminRouter = [
    {path:'/admin', element:<Dashboard/>},
    {path:'/admin/manageproduct', element:<ManageProducts/>},
    {path:'/admin/manageprorders', element:<ManageOrders/>},
    {path:'/admin/manageusers', element:<ManageUsers/>},
    {path:'/admin/reports', element:<Reports/>}
  ]

export default AdminRouter;
