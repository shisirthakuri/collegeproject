import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import NavBarAdmin from '../../components/common/NavBarAdmin';

const AdminDashboard = () => {
  return (
    <>
      <NavBarAdmin/>
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <h2 className="text-xl font-bold p-4 text-blue-700">Admin Panel</h2>
        <nav className="flex flex-col space-y-2 px-4">
          <NavLink
            to="upload-image"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 bg-blue-100 rounded px-3 py-2 font-medium'
                : 'text-gray-700 hover:bg-gray-100 rounded px-3 py-2'
            }
          >
            Upload Image
          </NavLink>
          <NavLink
            to="upload-banner"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 bg-blue-100 rounded px-3 py-2 font-medium'
                : 'text-gray-700 hover:bg-gray-100 rounded px-3 py-2'
            }
          >
            Upload Banner Notice
          </NavLink>
          <NavLink
            to="upload-circular"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 bg-blue-100 rounded px-3 py-2 font-medium'
                : 'text-gray-700 hover:bg-gray-100 rounded px-3 py-2'
            }
          >
            Upload Circular Notice
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet />
      </main>
    </div>
        </>
  );
};

export default AdminDashboard;
