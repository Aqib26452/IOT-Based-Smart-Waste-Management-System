import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/auth/Logo.png";
import { Menu, X } from "lucide-react";

const CollectorSidebar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Dashboard", path: "" },
    { name: "My Tasks", path: "tasks" },
    { name: "Profile", path: "profile" },
  ];

  return (
    <>
      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <img src={logo} alt="logo" className="h-8" />
        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 z-50 
        w-64 bg-white shadow-md 
        min-h-screen flex flex-col justify-between 
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Top */}
        <div className="p-4">
          {/* Mobile Close */}
          <div className="md:hidden flex justify-end mb-4">
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          <img src={logo} alt="logo" className="mb-6" />

          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              onClick={() => setOpen(false)} // close on mobile click
              className={({ isActive }) =>
                `block p-3 rounded-lg mb-2 transition ${
                  isActive
                    ? "bg-green-500 text-white"
                    : "text-gray-700 hover:bg-green-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Bottom */}
        <div className="bg-green-500 m-4 p-3 rounded text-white">
          <p>John Doe</p>
          <button className="mt-2 bg-white text-green-600 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default CollectorSidebar;
