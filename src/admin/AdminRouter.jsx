
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/ManageProducts';
import ManageOrders from './pages/ManageOrders';
import ManageUsers from './pages/ManageUsers';
import AdminNavbar from '../components/AdminNavbar';
import Reports from './pages/Reports';

 const AdminRouter = () => {
  return (
    <div>
            <AdminNavbar />
            <div>
                <Routes>
                    <Route path="/" element = { <Dashboard/> } />
                    <Route path="/manageproducts" element = { <ManageProducts/> } />
                    <Route path="/manageorders" element = { <ManageOrders/> } />
                    <Route path="/manageusers" element = { <ManageUsers/> } />
                    <Route path="/reports" element = { <Reports/> } />
                </Routes>
            </div>
        </div>
)
}

export default AdminRouter;
