import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/auth/Login_Logo.png";
import { Menu, X, Headphones, LayoutDashboard,
  CalendarCheck,
  CheckSquare,
  Trash2,
  Map,
  Upload,
  Trophy,
  User,
  LogOut,
  } from "lucide-react";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);

 
    const menu = [
      { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "" },
      { name: "Tasks Management", icon: <CalendarCheck size={20} />, path: "tasks-management"   },
      { name: "Bin Management", icon: <Map size={20} />, path: "bin-management" },  
      { name: "Collect Management", icon: <CheckSquare size={20} />, path: "collectors-management" },
      { name: "Vehicle Management", icon: <Trash2 size={20} />, path: "vehicle-management" },
      { name: "Real-Time Monitoring", icon: <Headphones size={20} />, path: "real-time-monitoring" },
      { name: "Routes Map", icon: <Map size={20} />, path: "routes Map" },
      { name: "Reports", icon: <Trophy size={20} />, path: "reports" },
    ];

  return (
    <>
      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <img src={logo} alt="logo" className="h-full" />
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

          <img src={logo} alt="logo" className="mb-2" />

          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              onClick={() => setOpen(false)} // close on mobile click
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200
               ${
                  isActive
                    ? "text-gay-900 shadow-md"
                    : "text-gray-700 hover:bg-green-100"
                }`
              }
            >
                 {/* Icon */}
            <span className="text-lg">{item.icon}</span>

            {/* Text */}
            <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Bottom */}
        <div className="bg-green-500 m-4 p-3 rounded text-white">
      
      <Headphones size={22} />
          <p className="font-bold">Need Help?</p>
          <button className="mt-2 bg-white text-green-600 px-3 py-1 rounded-full font-semibold">
            Contact Support
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
