import React from 'react'
import { Search, Filter, MoreVertical, MapPin, Trash2  } from "lucide-react";

const BinManagement = () => {
  return (
 <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-green-600">Bin Management</h1>
          <p className="text-sm text-gray-500">
            Real-time status of 1,248 connected smart bins across the metropolitan area.
          </p>
        </div>

        <button className="bg-[#FFC437] text-black px-4 py-2 rounded-lg font-medium">
          + Add New Bin
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow-sm flex flex-wrap gap-3 items-center mb-4">

        {/* Search */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-[300px]">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by Bin ID, Street Name, or District..."
            className="ml-2 bg-transparent outline-none text-sm w-full"
          />
        </div>

        {/* Status */}
        <select className="border px-3 py-2 rounded-lg text-sm">
          <option>Status: All</option>
        </select>

        {/* Type */}
        <select className="border px-3 py-2 rounded-lg text-sm">
          <option>Type: All</option>
        </select>

        {/* More Filters */}
        <button className="flex items-center gap-1 text-sm text-gray-600">
          <Filter size={16} /> More Filters
        </button>
      </div>

      {/* STATUS TAGS */}
      <div className="flex gap-3 mb-4 text-sm">
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Empty</span>
        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">Half-Full</span>
        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">Full</span>
        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full">Out of Order</span>
      </div>

       {/* TABLE */}
  <div className="overflow-x-auto">
    <table className="w-full text-sm">

      {/* HEAD */}
      <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
        <tr>
          <th className="p-4 text-left">Bin</th>
          <th className="p-4 text-left">Location</th>
          <th className="p-4 text-left">Fill Level</th>
          <th className="p-4 text-left">Last Emptied</th>
          <th className="p-4 text-left">Battery</th>
          <th className="p-4 text-center">Actions</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody>
        {bins.map((bin, i) => (
          <tr key={i} className="border-b hover:bg-gray-50 transition">

            {/* BIN ID */}
            <td className="p-4 font-medium text-gray-800">
              {bin.id}
            </td>

            {/* LOCATION */}
            <td className="p-4">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-gray-800">{bin.location}</p>
                  <span className="text-xs text-gray-500">
                    {bin.type}
                  </span>
                </div>
              </div>
            </td>

            {/* FILL LEVEL */}
            <td className="p-4">
              {bin.signal ? (
                <>
                  <p className={`font-semibold ${getFillColor(bin.level)}`}>
                    {bin.level}%
                  </p>

                  <div className="w-28 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                    <div
                      className={`${getProgressColor(bin.level)} h-2`}
                      style={{ width: `${bin.level}%` }}
                    ></div>
                  </div>
                </>
              ) : (
                <span className="text-gray-400 italic">No Signal</span>
              )}
            </td>

            {/* LAST EMPTIED */}
            <td className="p-4 text-gray-500">{bin.last}</td>

            {/* BATTERY */}
            <td className="p-4">
              <span className={`font-medium ${getBatteryColor(bin.battery)}`}>
                {bin.battery}
              </span>
            </td>

            {/* ACTIONS */}
            <td className="p-4">
              <div className="flex justify-center gap-2">
                <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                  <MoreVertical size={16} />
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

  {/* FOOTER */}
  <div className="flex justify-between items-center p-4 text-sm text-gray-500 border-t">
    <p>
      Showing 1-10 of {bins.length} bins
    </p>

    <div className="flex gap-2">
      <button className="px-3 py-1 border rounded hover:bg-gray-100">
        Previous
      </button>
      <button className="px-3 py-1 border rounded hover:bg-gray-100">
        Next
      </button>
    </div>
  </div>
    </div>
  )
}
const bins = [
  {
    id: "BIN-8821",
    location: "Main St. & 5th Ave",
    type: "Recyclable",
    level: 92,
    last: "2h ago",
    battery: "88%",
    signal: true,
  },
  {
    id: "BIN-4592",
    location: "Central Park North",
    type: "Organic",
    level: 54,
    last: "5h ago",
    battery: "42%",
    signal: true,
  },
  {
    id: "BIN-1023",
    location: "Library District",
    type: "General Waste",
    level: 12,
    last: "45m ago",
    battery: "96%",
    signal: true,
  },
  {
    id: "BIN-0034",
    location: "Railway Station",
    type: "General Waste",
    level: 0,
    last: "2 days ago",
    battery: "Critical",
    signal: false,
  },
];

const getFillColor = (level) => {
  if (level > 80) return "text-red-500";
  if (level > 40) return "text-yellow-500";
  return "text-green-600";
};

const getProgressColor = (level) => {
  if (level > 80) return "bg-red-500";
  if (level > 40) return "bg-yellow-500";
  return "bg-green-500";
};

const getBatteryColor = (battery) => {
  if (battery === "Critical") return "text-red-500";
  if (parseInt(battery) < 50) return "text-yellow-500";
  return "text-green-600";
};

export default BinManagement
