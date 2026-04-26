import React from "react";
import { Search, Bell, Settings } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        {/* Left */}
        <h1 className="text-2xl text-2xl font-bold text-green-600 mb-6">
          Admin Dashboard
        </h1>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md border">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="ml-2 outline-none text-sm bg-transparent"
            />
          </div>

          {/* User Name */}
          <span className="text-sm font-medium text-gray-700">John Doe</span>

          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <Bell size={18} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* Settings Icon */}
          <div className="bg-white p-2 rounded-full shadow cursor-pointer">
            <Settings size={18} />
          </div>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Vehicles", value: 128 },
          { title: "Total Collectors", value: 42 },
          { title: "Total Bins", value: 86 },
          { title: "Total Routes", value: 29 },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-xl font-bold">{item.value}</h2>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              ✓
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Task Status */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-4 font-semibold">Task Status Summary</h3>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-[10px] border-green-500 border-r-red-400 flex items-center justify-center">
              <span className="text-xl font-bold text-green-600">67%</span>
            </div>
            <div className="flex gap-4 mt-4 text-sm">
              <span className="text-green-600">● Completed</span>
              <span className="text-red-400">● Pending</span>
            </div>
          </div>
        </div>

        {/* Weekly Performance */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-4 font-semibold">Weekly Performance</h3>
          <div className="flex items-end justify-between h-40">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
              (day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-6 ${
                      index < 5 ? "bg-green-500" : "bg-gray-300"
                    }`}
                    style={{
                      height: `${Math.random() * 100 + 40}px`,
                    }}
                  ></div>
                  <span className="text-xs mt-2">{day}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">Recent Notifications</h3>
          <button className="text-green-600 text-sm">Mark all as read</button>
        </div>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <p className="font-medium">New Route Assigned</p>
              <p className="text-sm text-gray-500">DHA Sector 4 Updated</p>
            </div>
            <span className="text-xs text-gray-400">2 min ago</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
