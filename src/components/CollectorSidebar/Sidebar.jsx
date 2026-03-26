import { NavLink } from "react-router-dom";
import logo from "../../assets/auth/Logo.png";

const CollectorSidebar = () => {
  const menu = [
    { name: "Dashboard", path: "" },
    { name: "My Tasks", path: "tasks" },
    { name: "Routes", path: "routes" },

    { name: "Profile", path: "profile" },
  ];

  return (
    <div className="w-64 bg-white p-4 flex flex-col justify-between shadow-md">
      <div>
        <img src={logo} alt="logo" className="mb-6" />

        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end // ✅ ensures ONLY exact route is active
            className={({ isActive }) =>
              `block p-3 rounded-lg mb-2 ${
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

      <div className="bg-green-500 p-3 rounded text-white">
        <p>John Doe</p>
        <button className="mt-2 bg-white text-green-600 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default CollectorSidebar;
