import React from "react";
import { Search, Bell, Settings, Truck, Edit, Trash2 } from "lucide-react";

const VehicleManagement = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        
        {/* Left */}
        <h1 className="text-2xl text-2xl font-bold text-green-600">
          Vehicle Management
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
          <span className="text-sm font-medium text-gray-700">
            John Doe
          </span>

          {/* Notification */}
          <div className="relative cursor-pointer">
            <Bell size={18} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* Settings */}
          <div className="bg-white p-2 rounded-full shadow cursor-pointer">
            <Settings size={18} />
          </div>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Vehicles", value: 128 },
          { title: "Ongoing Vehicles", value: 42 },
          { title: "Pending Tasks", value: 86 },
          { title: "Complete Tasks", value: 29 },
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

      {/* Vehicle Section */}
      <div className="bg-gray-100">

        {/* Inner Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Total Vehicle</h1>
            <p className="text-sm text-gray-500">30 done this month</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="flex items-center bg-white px-3 py-2 rounded-lg border w-[250px]">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search by vehicle name, type..."
                className="ml-2 text-sm outline-none w-full"
              />
            </div>

            {/* Button */}
            <button className="bg-[#FFC437] px-4 py-2 rounded-lg font-medium">
              + Add new asset
            </button>
          </div>
        </div>

       {/* Table */}
  <div className="overflow-x-auto">
    <table className="w-full text-sm">

      {/* Head */}
      <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
        <tr>
          <th className="p-4 text-left">Vehicle</th>
          <th className="p-4 text-left">Type</th>
          <th className="p-4 text-left">Driver</th>
          <th className="p-4 text-left">Fuel</th>
          <th className="p-4 text-left">Usage</th>
          <th className="p-4 text-left">Status</th>
          <th className="p-4 text-center">Actions</th>
        </tr>
      </thead>

      {/* Body */}
      <tbody>
        {vehicles.map((v, i) => (
          <tr
            key={i}
            className="border-b hover:bg-gray-50 transition"
          >

            {/* Vehicle */}
            <td className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#80A615]/10 rounded-full flex items-center justify-center">
                <Truck size={18} className="text-[#80A615]" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{v.name}</p>
                <p className="text-xs text-gray-500">{v.product}</p>
              </div>
            </td>

            {/* Type */}
            <td className="p-4 text-gray-700">{v.type}</td>

            {/* Driver */}
            <td className="p-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                  {v.workers}
                </div>
                <span className="text-gray-700">Workers</span>
              </div>
            </td>

            {/* Fuel */}
            <td className="p-4 text-gray-700">{v.fuel}</td>

            {/* Usage */}
            <td className="p-4 text-gray-600">{v.usage}</td>

            {/* Status */}
            <td className="p-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatus(v.status)}`}
              >
                {v.status}
              </span>
            </td>

            {/* Actions */}
            <td className="p-4">
              <div className="flex justify-center gap-3">
                <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">
                  <Edit size={16} className="text-blue-600" />
                </button>
                <button className="p-2 bg-red-100 rounded hover:bg-red-200">
                  <Trash2 size={16} className="text-red-600" />
                </button>
              </div>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
      </div>
    </div>
  );
};

/* DATA */
const vehicles = [
  {
    name: "Mitsubishi LXR",
    product: "Garbage Truck",
    type: "Garbage Truck",
    workers: 1,
    fuel: "Diesel",
    usage: "PKR 80/970",
    status: "Active",
  },
  {
    name: "Mazda RX8",
    product: "Garbage Truck",
    type: "Delivery Car",
    workers: 1,
    fuel: "Petrol",
    usage: "PKR 85/970",
    status: "Active",
  },
  {
    name: "Volkswagen",
    product: "Garbage Truck",
    type: "Rickshaw",
    workers: 1,
    fuel: "Gas",
    usage: "PKR 80/970",
    status: "Stopped",
  },
  {
    name: "Mitsubishi LXR",
    product: "Garbage Truck",
    type: "Garbage Truck",
    workers: 1,
    fuel: "Diesel",
    usage: "PKR 80/970",
    status: "Active",
  },
  {
    name: "Mazda RX8",
    product: "Garbage Truck",
    type: "Delivery Car",
    workers: 1,
    fuel: "Petrol",
    usage: "PKR 80/970",
    status: "Idle",
  },
];

/* STATUS COLORS */
const getStatus = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-600";
    case "Stopped":
      return "bg-red-100 text-red-600";
    case "Idle":
      return "bg-yellow-100 text-yellow-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default VehicleManagement;