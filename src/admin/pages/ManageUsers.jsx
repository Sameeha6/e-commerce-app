import React, { useState, useEffect } from 'react';
import { getAllUsers, updateUser  } from '../../api/adminApi';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers().then((res) => setUsers(res.data));
    }, []);

    const handleonClick = (id,status) => {
        if (window.confirm(`Are you sure you want to ${status?"unblock":"block"}  this user?`))
        {
            updateUser(id,{blocked:!status}).then((res) => {
                if (res) alert(`User ${status?"unblocked":"blocked"} successfully!`);
                else alert(`Failed to ${status?"unblock":"block"} user!`);
                getAllUsers().then((res) => setUsers(res.data));
            });
        }
    }
//
    return (
        <div className="container mx-auto ">
            <header className="bg-white shadow-lg p-4 mb-2">
                <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
            </header>
            
            {/* User Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">User List</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Role</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            if(user.role !== 'admin'){
                                return(
                                    <tr key={user.id} className="border-t">
                                        <td className="px-4 py-2">{user.name}</td>
                                        <td className="px-4 py-2">{user.email}</td>
                                        <td className="px-4 py-2">{user.role}</td>
                                        <td className="px-4 py-2">
                                            <button onClick={() => handleonClick(user.id,user.blocked)} className="bg-blue-600 text-white p-2 rounded-md mr-2">Block</button>
                                        </td>
                                    </tr>
                        )}})}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;