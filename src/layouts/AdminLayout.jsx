import React from 'react'
import AdminSidebar from '../components/AdminSidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
 return (
    <div className="flex  min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout
